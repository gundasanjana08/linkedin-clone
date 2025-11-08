import React, { useState } from "react";

const CommentSection = ({ comments = [] }) => {
  const [newComment, setNewComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    alert(`Comment added: ${newComment}`);
    setNewComment("");
  };

  return (
    <div className="mt-3">
      {comments.map((c, i) => (
        <p key={i} className="text-sm text-gray-700 bg-gray-100 p-2 rounded-lg mb-1">
          💬 {c}
        </p>
      ))}
      <form onSubmit={handleComment} className="flex gap-2 mt-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="border border-gray-300 rounded-xl px-3 py-1 w-full"
        />
        <button
          type="submit"
          className="bg-linkedinBlue text-white px-3 py-1 rounded-xl hover:bg-linkedinDark"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
