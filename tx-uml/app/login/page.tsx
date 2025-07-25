"use client";
import React, { useState } from "react";
import "./page.css";

const Login = () => {
  // Step 1: Use state for input fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", { username, password });

    // Step 3: Clear input fields
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <div className="signin-container">
        <div className="image-container">
          <img src="/Sign_in_pic.jpeg" alt="Sign in" />
        </div>
        {/* Step 4: Controlled form with useState */}
        <form onSubmit={handleSubmit} className="join-form">
          <h3>
            <span>Log in </span>to your account
          </h3>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <button type="submit" className="btn">
              Sign in
            </button>
          </div>

          <a href="" className="register">
            New to TXUML? Create your account.
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;