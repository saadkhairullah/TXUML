import React from 'react'

const signup
 = () => {
    // signup page lives inside the two divs
  return (
    <div>
        <h1>Welcome to <span class="logo">MineApp</span></h1>
    <form action="/submit" class="join-form">
      <h2><span>Join us </span>to get started</h2>
      <div class="input-group">
        <label for="">Full name</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="">Email</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="">Password</label>
        <input type="password" />
      </div>
      <div class="input-group">
        <button type="submit" class="btn">Join now</button>
      </div>
      <a href="" class="register">already have an account ? Sign in.</a>
    </div>
  )
}

export default signup
