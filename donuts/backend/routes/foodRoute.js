import express from "express";
import { addFood,listFood,removeFood} from "../controllers/foodControll.js";
import multer from "multer";

const foodRouter = express.Router();

// Configuration de stockage Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // tu dois créer ce dossier "uploads"
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;
