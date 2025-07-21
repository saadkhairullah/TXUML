/*
'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import './style.css';

export default function SignupPage(){
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  
  const onSignup = async () => {
    try{

    } catch (error) {

    } finally {
      setLoading(false);
    }
  }

*/
/*
  return (
    <div className="login-container"> {/* Match login page layout *///}
/*    
      <h1 className="form-header">
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
          <button type="submit" className="btn">{buttonDisabled ? "Sign Up" : "Sign Up"}</button>
        </div>
        <a href="/login" className="register">Already have an account? Sign in.</a>
      </form>
    </div>
  );
  

}
*/
'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import './style.css';

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    setButtonDisabled(
      !(user.email.length > 0 && user.password.length > 0 && user.username.length > 0)
    );
  }, [user]);

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post('/api/signup', user);
      console.log(response.data);
      router.push('/login');
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container">
      <h1 className="form-header">
        Welcome to <span className="logo">MineApp</span>
      </h1>
      <form onSubmit={onSignup} className="join-form">
        <h2>
          <span>Join us </span>to get started
        </h2>
        <div className="input-group">
          <label>Full name</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            minLength={6}
          />
        </div>
        {error && <p className="error-msg">{error}</p>}
        <div className="input-group">
          <button type="submit" className="btn" disabled={buttonDisabled || loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </div>
        <a href="/login" className="register">
          Already have an account? Sign in.
        </a>
      </form>
    </div>
  );
}
