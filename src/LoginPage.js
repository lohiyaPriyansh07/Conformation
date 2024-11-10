import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from './images/logo.jpeg';
function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/kyc');
  };

  return (
    <div className="login-container">
      <div className="login-block">
      <img src={logo} alt="Angel One Logo" className="logo" />

        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
