import React from 'react';
import './style.css';

const signup = () => {
  return (
    <>
      <h1>
        Welcome to <span className="logo">MineApp</span>
      </h1>
      <form action="/submit" className="join-form">
        <h2>
          <span>Join us </span>to get started
        </h2>
        <div className="input-group">
          <label>Full name</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="input-group">
          <button type="submit" className="btn">Join now</button>
        </div>
        <a href="#" className="register">Already have an account? Sign in.</a>
      </form>
    </>
  );
};

export default signup;
