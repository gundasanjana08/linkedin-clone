import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: String,
  text: String,
  likes: { type: Number, default: 0 },
  comments: [{ user: String, text: String }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Post", postSchema);














