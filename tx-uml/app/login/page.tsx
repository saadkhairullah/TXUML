"use client";
import React from 'react'
import './style.css'
const login = () => {
    //  pages"login page lives inside the two divs
  return (
     <div className="login-container">
 <h1 className="form-header">Welcome to <span className="logo">MineApp</span></h1>
    <form action="/submit" className="join-form">
      <h2><span>Log in </span>to your account</h2>
      <div className="input-group">
        <label >Email</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label >Password</label>
        <input type="password" />
      </div>
      <div className="input-group">
        <button type="submit" className="btn">Sign in</button>
      </div>
      <a href="/signup" className="register">New to ? Create your account.</a>
    </form>
    </div>

  )
}

export default login