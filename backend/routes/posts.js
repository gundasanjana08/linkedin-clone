
import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { user, text } = req.body;
  const post = new Post({ user, text });
  await post.save();
  res.json({ message: "Post created" });
});

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post("/like/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  await post.save();
  res.json({ message: "Liked" });
});

router.post("/comment/:id", async (req, res) => {
  const { user, text } = req.body;
  const post = await Post.findById(req.params.id);
  post.comments.push({ user, text });
  await post.save();
  res.json({ message: "Comment added" });
});

router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

export default router;














