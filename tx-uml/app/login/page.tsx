import React from 'react'

const login = () => {
    //  pages"login page lives inside the two divs
  return (
    <div>
      <h1>Welcome to <span class="logo">MineApp</span></h1>
    <form action="/submit" class="join-form">
      <h2><span>Log in </span>to your account</h2>
      <div class="input-group">
        <label for="">Email</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="">Password</label>
        <input type="password" />
      </div>
      <div class="input-group">
        <button type="submit" class="btn">Sign in</button>
      </div>
      <a href="" class="register">New to ? Create your account.</a>
    </form>  
    </div>
  )
}

export default login