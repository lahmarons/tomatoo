import foodModels from "../models/foodModels.js";
import fs from "fs";

const addFood = async (req, res) => {
  console.log("🔁 [addFood] Requête reçue");

  try {
    // 1. Vérifie si req.body est bien rempli
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.price ||
      !req.body.category
    ) {
      console.log("❌ [addFood] Champs requis manquants dans req.body");
      return res
        .status(400)
        .json({ success: false, message: "Champs requis manquants" });
    }

    // 2. Vérifie si une image a été envoyée
    if (!req.file) {
      console.log("❌ [addFood] Aucune image reçue dans req.file");
      return res
        .status(400)
        .json({ success: false, message: "Image manquante" });
    }

    // 3. Log les valeurs reçues
    console.log("📦 [addFood] Données reçues :", req.body);
    console.log("🖼️ [addFood] Fichier image :", req.file);

    // 4. Création de l'objet food
    const image_filename = req.file.filename;
    const food = new foodModels({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    console.log("📝 [addFood] Enregistrement dans MongoDB...");
    await food.save();

    console.log("✅ [addFood] Aliment ajouté avec succès !");
    res
      .status(201)
      .json({ success: true, message: "Aliment ajouté avec succès !" });
  } catch (error) {
    console.log(
      "🔥 [addFood] Erreur lors de l'ajout de l'aliment :",
      error.message
    );
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
      error: error.message,
    });
  }
};
//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModels.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
//remove food
const removeFood = async (req, res) => {
  try {
    const food = await foodModels.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModels.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "foodremoved " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
export { addFood, listFood, removeFood };
