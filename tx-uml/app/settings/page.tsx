'use client';

import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, use } from 'react';

export default function SettingsPage(params: any) {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await axios.put("/api/update", {
      username,
      email,
      password,
    });

    if (res.status === 200) {
      toast.success("User info updated");
      setPassword("*********"); // reset display
    } else {
      toast.error("Update failed");
    }
  } catch (error: any) {
    toast.error("Error updating user: " + error.response?.data?.error || error.message);
  }
};

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/logout', {
        method: 'GET',
        credentials: 'include',
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || 'Logout successful');
        router.push('/login');
      } else {
        toast.error(data.errosettingsr || 'Logout failed');
      }
    } catch (error: any) {
      toast.error('Logout failed: ' + error.message);
    }
  };

  // Test getting user data from token
  const getUserDetails = async () => {
    const res = await axios.get('/api/me');
    console.log(res.data); 
     setUsername(res.data.data.username);
    setEmail(res.data.data.email);
    setPassword("*********");
  }
  useEffect(() => {
    // Fetch user data when the component mounts
    getUserDetails();
  }, []);


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
            background-image: url("/Ground.jpg");
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
            font-weight: 700;
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
            margin-top: 1rem;
          }

          .btn:hover {
            background-color: rgb(94, 97, 255);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .btn:active {
            background-color: rgb(6, 10, 241);
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .logout-btn {
            background-color: #ff4d4f;
          }

          .logout-btn:hover {
            background-color: #ff7875;
          }

          .logout-btn:active {
            background-color: #d9363e;
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

          {/* Test Logout button */}
          <button onClick={handleLogout} className="btn logout-btn">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
