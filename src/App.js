// import React from 'react';
// import ConfirmationPage from './ConformationPage';

// function App() {
//   return (
//     <div className="App">
//       <ConfirmationPage />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfirmationPage from './ConformationPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import KYCPage from './KYCPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/kyc" element={<KYCPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
