// backend/routes/users.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// REGISTER endpoint
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;



