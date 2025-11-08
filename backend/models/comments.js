import express from "express";
import Comment from "../models/Comment.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a comment
router.post("/", authMiddleware, async (req, res) => {
  const { postId, content } = req.body;

  if (!postId || !content) {
    return res.status(400).json({ message: "Post ID and content required" });
  }

  try {
    const comment = new Comment({
      user: req.user.id,
      post: postId,
      content,
    });

    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get comments for a post
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate(
      "user",
      "name"
    );
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

