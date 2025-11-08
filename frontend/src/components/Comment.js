import React, { useState } from "react";
import API from "../services/api";

const Comment = ({ postId, refreshComments }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;

    try {
      await API.post("/comments", { postId, text });
      setText("");
      refreshComments(); // refresh the comment list
    } catch (err) {
      alert("Error posting comment");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input
        type="text"
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded px-2 py-1 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded mt-1">
        Comment
      </button>
    </form>
  );
};

export default Comment;
