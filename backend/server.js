import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/linkedinClone");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(5001, () => console.log("Server running on port 5001"));






















