import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

const foodModels = mongoose.models.food || mongoose.model("food", foodSchema);// ✅ sécurisé Vérifie si le modèle "food" existe déjà
//...alors on le crée à partir du schéma foodSchema

export default foodModels;
