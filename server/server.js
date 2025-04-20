import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";
import sellerRouter from "./routes/seller.route.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";
import addressRouter from "./routes/address.route.js";
import orderRouter from "./routes/order.route.js";

// Load env variables
dotenv.config();

const app = express();

// Allow multiple origins (update as needed)
const allowedOrigins = ["http://localhost:5173"];

// Connect to Database
connectDB();

// Connect cloudinary
await connectCloudinary();

//  Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

//  Routes
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
