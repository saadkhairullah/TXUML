"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from "react-hot-toast";
import "./style.css";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setButtonDisabled(!(user.username && user.password));
  }, [user]);

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  // prevent full page reloading
    e.preventDefault();

  // Step 1: Use state for input fields
    try {
      setLoading(true);
      const response = await axios.post("/api/login", user);
      console.log("Login Success", response.data);
      toast.success("Login Success");
      router.push("/settings");
    } catch(error: any) {
      console.log("Login Failed", error.response?.data || error.message);
      toast.error(error.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  // Step 2: Handle form submission
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <div className="signin-container">
        <div className="image-container">

          <img src="/Sign_in_pic.jpeg" alt="Sign in" />

        </div>
        {/* Step 4: Controlled form with useState */}
        <form onSubmit={onLogin} className="join-form">
          <h3>
            <span>Log in </span>to your account
          </h3>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={user.username}
              onChange={handleSubmit}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={handleSubmit}
            />
          </div>

          <div className="input-group">
            <button type="submit" className="btn" disabled={buttonDisabled || loading}>
              {loading ? "Logging in..." : "Log in"}
            </button>
          </div>

          <a href="" className="register">
            New to TXUML? Create your account.
          </a>
        </form>
      </div>
    </div>
  )

}
