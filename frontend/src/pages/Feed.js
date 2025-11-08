import React, { useState, useEffect } from "react";
import api from "../api";
import "./Feed.css"; // Add this line for styling

function Feed({ user }) {
  const [text, setText] = useState("");
  const [commentText, setCommentText] = useState("");
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async () => {
    if (!text.trim()) return;
    await api.post("/posts", { user, text });
    setText("");
    fetchPosts();
  };

  const handleLike = async (id) => {
    await api.post(`/posts/like/${id}`);
    fetchPosts();
  };

  const handleComment = async (id) => {
    if (!commentText.trim()) return;
    await api.post(`/posts/comment/${id}`, { user, text: commentText });
    setCommentText("");
    setActiveCommentId(null);
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await api.delete(`/posts/${id}`);
    fetchPosts();
  };

  return (
    <div className="feed-container">
      <h1 className="app-title">LinkedIn Clone</h1>

      {user && (
        <div className="post-box">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your post..."
          />
          <button onClick={handlePost}>Post</button>
        </div>
      )}

      <h2 className="feed-heading">Feed</h2>

      {posts.map((p) => (
        <div key={p._id} className="post-card">
          <strong>{p.user}</strong>
          <p>{p.text}</p>
          <small>{new Date(p.createdAt).toLocaleString()}</small>
          <div className="button-row">
            <button onClick={() => handleLike(p._id)}>👍 Like ({p.likes})</button>
            {user && (
              <>
                <button onClick={() => handleDelete(p._id)}>🗑️ Delete</button>
                <button onClick={() => setActiveCommentId(p._id)}>💬 Comment</button>
              </>
            )}
          </div>

          {activeCommentId === p._id && (
            <div className="comment-box">
              <input
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button onClick={() => handleComment(p._id)}>Submit</button>
            </div>
          )}

          <div className="comment-section">
            <strong>Comments:</strong>
            {p.comments.map((c, i) => (
              <div key={i}>
                <em>{c.user}</em>: {c.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;



