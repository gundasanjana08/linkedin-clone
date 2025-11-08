import express from "express";
import Comment from "../models/Comment.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add comment
router.post("/", verifyToken, async (req, res) => {
  try {
    const { userId, postId, text } = req.body;
    const comment = await Comment.create({ userId, postId, text, createdAt: new Date() });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;







