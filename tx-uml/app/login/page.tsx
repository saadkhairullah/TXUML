import React from 'react'
import './style.css'
const login = () => {
    //  pages"login page lives inside the two divs
  return (
    <div>
      <h1>Welcome to <span className="logo">MineApp</span></h1>
    <form action="/submit" className="join-form">
      <h2><span>Log in </span>to your account</h2>
      <div className="input-group">
        <label for="">Email</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label for="">Password</label>
        <input type="password" />
      </div>
      <div className="input-group">
        <button type="submit" className="btn">Sign in</button>
      </div>
      <a href="" className="register">New to ? Create your account.</a>
    </form>  
    </div>
  )
}

export default login