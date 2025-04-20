import express from "express";
import {
  sellerLogin,
  iSellerAuth,
  sellerLogout,
} from "../controllers/seller.controller.js";
import authSeller from "../middleware/authSeller.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", authSeller, iSellerAuth);
sellerRouter.get("/logout", authSeller, sellerLogout);

export default sellerRouter;
