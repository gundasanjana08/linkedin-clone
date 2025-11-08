import React, { useState, useEffect } from "react";
import { fetchCommentsAPI, addCommentAPI } from "../services/api";

export default function Post({ post, user, token, onDelete }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const loadComments = async () => {
      const res = await fetchCommentsAPI(post._id);
      setComments(res.data);
    };
    loadComments();
  }, [post._id]);

  const handleAddComment = async () => {
    const res = await addCommentAPI(post._id, newComment, token);
    setComments([...comments, res.data]);
    setNewComment("");
  };

  return (
    <div className="border p-4 rounded mb-4">
      <div className="flex justify-between">
        <strong>{post.userId.name}</strong>
        {post.userId._id === user.id && (
          <button onClick={() => onDelete(post._id)} className="text-red-600">
            Delete
          </button>
        )}
      </div>
      <p>{post.content}</p>
      <div className="mt-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add comment"
          className="border p-1 rounded mr-2"
        />
        <button onClick={handleAddComment} className="px-2 py-1 bg-blue-600 text-white rounded">
          Comment
        </button>
      </div>
      <div className="mt-2">
        {comments.map((c) => (
          <p key={c._id}>
            <strong>{c.userId.name}:</strong> {c.text}
          </p>
        ))}
      </div>
    </div>
  );
}

















