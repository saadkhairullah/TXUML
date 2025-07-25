import React from "react";
import Image from "../assets/images/Sign_up_pic.jpg"; // Adjust the path as necessary
import "./page.css"; // Assuming you have a CSS file for styling

  // signup page lives inside the two divs
const signup = () => {
  // signup page lives inside the two divs
  return (
      <div className="signin-container">
        <div className="image-container">
          <img src="/Sign_up_pic.jpg" alt="" />
        </div>
    <form action="/submit" className="join-form">
      <h3><span>Join us </span>to get started</h3>
      <div className="input-group">
        <label htmlFor="">Username</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label htmlFor="">Password</label>
        <input type="password" />
      </div>
      <div className="input-group">
        <button type="submit" className="btn">Join now</button>
      </div>
      <a href="/login" className="register">already have an account ? Sign in.</a>

    </form>
      </div>
  );
};

export default signup;
