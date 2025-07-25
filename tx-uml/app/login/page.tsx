import React from "react";
import Image from "../assets/images/Sign_in_pic.jpeg"; // Adjust the path as necessary
import "./page.css"; // Assuming you have a CSS file for styling

const login = () => {
  // signup page lives inside the two divs
  return (
  
      <div className="signin-container">
        <div className="image-container">
          <img src="/Sign_in_pic.jpeg" alt="" />
        </div>
        <form action="/submit" className="join-form">
          <h3>
            <span>Log in </span>to your account
          </h3>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div className="input-group">
            <button type="submit" className="btn">
              Sign in
            </button>
          </div>
          <a href="/signup" className="register">
            New to TXUML ? Create your account.
          </a>
        </form>
      </div>
  );
};

export default login;
