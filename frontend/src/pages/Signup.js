import React, { useState } from "react";
import api from "../api";
import "./Auth.css";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/auth/signup", form);
    alert("Signup successful");
  };

  return (
    <div className="auth-container">
      <h2>Create your LinkedIn account</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;



