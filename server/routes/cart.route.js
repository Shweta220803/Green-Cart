import express from "express";
import { updateCart } from "../controllers/cart.controller.js";
import authUser from "../middleware/authUser.js";

const cartRouter = express.Router();

// Route to update cart
cartRouter.put("/update", authUser, updateCart);

export default cartRouter;
