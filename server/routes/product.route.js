import express from "express";
import {
  addProduct,
  productList,
  productById,
  changeStock,
} from "../controllers/product.controller.js";
import { upload } from "../config/multer.js";
import authSeller from "../middleware/authSeller.js";

const productRouter = express.Router();

// Add product (with image upload)
productRouter.post("/add", upload.array(["images"]), authSeller, addProduct);

// Get all products
productRouter.get("/list", productList);

// Get single product by ID
productRouter.get("/:id", productById);

// Change inStock status
productRouter.put("/stock", authSeller, changeStock);

export default productRouter;
