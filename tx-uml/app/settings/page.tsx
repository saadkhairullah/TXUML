'use client';

import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Submitted:', { username, email, password });

    // Clear fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <style>
        {`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

        body {
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
        }

        .settings-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url("images/Ground.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          padding: 2rem;
          font-family: "Montserrat", sans-serif;
          backdrop-filter: blur(4px);
          background-color: rgba(255, 255, 255, 0.85);
        }

        .settings-box {
          max-width: 500px;
          width: 100%;
          background-color: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: #221f1f 2px 3px 5px 1px;
        }

        h2 {
          text-align: center;
          color: #221f1f;
          margin-bottom: 2rem;
        }

        .input-group {
          margin-bottom: 1.5rem;
        }

        .input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #696565;
        }

        .input-group input {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 700; /* BOLD TEXT HERE */
          border: 1px solid #ccc;
          color: #221f1f;
        }

        .input-group input:focus {
          outline: none;
          border: 3px solid #3a3dfc;
        }

        .btn {
          width: 100%;
          padding: 15px;
          background-color: #3a3dfc;
          color: whitesmoke;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-size: 18px;
          transition: all 0.3s ease-in-out;
        }

        .btn:hover {
          background-color: rgb(94, 97, 255);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .btn:active {
          background-color: rgb(6, 10, 241);
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
        }
      `}
      </style>

      <div className="settings-container">
        <div className="settings-box">
          <h2>User Settings Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
