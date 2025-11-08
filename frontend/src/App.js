import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="navbar">
        <h1 className="app-title">LinkedIn Clone</h1>
        <NavLink to="/" className="nav-link">Feed</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
        <NavLink to="/signup" className="nav-link">Signup</NavLink>
        {user && (
          <span className="welcome">
            Welcome, {user}
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </span>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Feed user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;














