import React, { useState } from 'react';
import './ConfirmationPage.css';
import logo from './images/logo.jpeg';

function ConfirmationPage() {
  const [showExplore, setShowExplore] = useState(false);

  const toggleExplore = () => {
    setShowExplore(!showExplore);
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        {/* Logo inside the confirmation-box */}
        <img src={logo} alt="Angel One Logo" className="logo" />

        <div className="checkmark-circle">
          <span>&#10003;</span>
        </div>
        <h1>Activate Derivative Segments</h1>
        <p>Request Received</p>
        <p>Activation Number: EM7337024</p>

        <div className="explore-section">
          <h2>Explore More with Angel One</h2>
          <button className="explore-button" onClick={toggleExplore}>Explore Now</button>
          {showExplore && (
            <ul className="explore-list">
              <li><a href="#">Learn about Derivative Trading</a></li>
              <li><a href="#">Explore Investment Opportunities</a></li>
              <li><a href="#">View Your Portfolio</a></li>
              <li><a href="#">Get Help and Support</a></li>
            </ul>
          )}
        </div>


        <div className="info-section">
       
        <p className="info-text">
          We have received your segment activation request. It may take up to 2 working days for
          the segments to reflect in your profile. For any help please reach out to us at
          <a href="https://angelone.in/help-support/"> angelone.in/help-support</a>.
        </p>
      </div>
      </div>

      
    </div>
  );
}

export default ConfirmationPage;
