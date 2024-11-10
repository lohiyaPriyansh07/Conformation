import React from 'react';
import logo from './images/logo.jpeg';
import './SignupPage.css';

function SignupPage() {
  return (
    <div className="signup-container">
      <div className="signup-block">
      <img src={logo} alt="Angel One Logo" className="logo" />
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
