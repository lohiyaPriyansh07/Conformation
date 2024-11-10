import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KYCPage.css';
import logo from './images/logo.jpeg';

function KYCPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="kyc-container">
      <div className="kyc-block">
      <img src={logo} alt="Angel One Logo" className="logo" />

        <h1>KYC Verification</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Aadhaar Number" required />
          <input type="text" placeholder="PAN Number" required />
          <button type="submit">Submit KYC</button>
        </form>
      </div>
    </div>
  );
}

export default KYCPage;
