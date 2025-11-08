import React, { useState } from "react";
import API from "../services/api";

const PostBox = ({ onPostCreated }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return alert("Post content cannot be empty!");

    try {
      const token = localStorage.getItem("token");
      const res = await API.post(
        "/posts",
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onPostCreated(res.data);
      setContent("");
    } catch (err) {
      alert("Error creating post");
      console.error(err);
    }
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-2xl mb-6">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start a post..."
        className="w-full border border-gray-300 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-linkedinBlue"
      ></textarea>
      <button
        onClick={handleSubmit}
        className="bg-linkedinBlue text-white px-4 py-2 rounded-xl mt-2 hover:bg-linkedinDark transition"
      >
        Post
      </button>
    </div>
  );
};

export default PostBox;

