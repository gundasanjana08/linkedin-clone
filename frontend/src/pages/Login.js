import React, { useState } from "react";
import api from "../api";
import "./Auth.css";

function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", form);
    setUser(res.data.name);
  };

  return (
    <div className="auth-container">
      <h2>Login to LinkedIn Clone</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;


