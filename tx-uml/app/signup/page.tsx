import React from 'react'

const signup
 = () => {
    // signup page lives inside the two divs
  return (
    <div>
        <h1>Welcome to <span className="logo">MineApp</span></h1>
    <form action="/submit" className="join-form">
      <h2><span>Join us </span>to get started</h2>
      <div className="input-group">
        <label for="">Full name</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label for="">Email</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label for="">Password</label>
        <input type="password" />
      </div>
      <div className="input-group">
        <button type="submit" className="btn">Join now</button>
      </div>
      <a href="" className="register">already have an account ? Sign in.</a>
    </div>
  )
}

export default signup
