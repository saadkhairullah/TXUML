'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import './page.css';
import './page.css';

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
    <div>
      <div className="signin-container">
        <div className="image-container">
          <img src="/Sign_up_pic.jpg" alt="" />
        </div>

        <form onSubmit={onSignup} className="join-form">
          <h3><span>Join us </span>to get started</h3>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              minLength={6}
              required
            />
          </div>

          {error && <p className="error-msg">{error}</p>}

          <div className="input-group">
            <button type="submit" className="btn" disabled={buttonDisabled || loading}>
              {loading ? "Creating Account..." : "Join now"}
            </button>
          </div>

          <a href="/login" className="register">
            Already have an account? Sign in.
          </a>
        </form>
      </div>
    </div>
  );
}
