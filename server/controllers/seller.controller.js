import express from "express";
import jwt from "jsonwebtoken";

//  Login Seller
export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      password === process.env.SELLER_PASSWORD &&
      email === process.env.SELLER_EMAIL
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });
      res.cookie("sellerToken", token, {
        httpOnly: true, // Prevent JavaScript to access cookie
        secure: process.env.NODE_ENV === "production", // Use secure cookie in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF protection
        maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time
      });

      return res.json({
        success: true,
        message: "Logged In",
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//  Check  Seller Auth
export const iSellerAuth = async (req, res) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Logout Seller
export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Logout failed: " + error.message,
    });
  }
};
