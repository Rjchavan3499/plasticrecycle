import React from 'react';
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="background">
      <div className="overlay">
        <h1>Welcome! Please Select User Type</h1>
        <div className="cards">
          <div className="card">
            <h2>Vendor</h2>
            <p>Login or Register as a Vendor to submit your plastic waste details.</p>
            <button onClick={() => window.location.href = '/vendor-login'}>Vendor Login</button>
          </div>
          <div className="card">
            <h2>Client</h2>
            <p>Login or Register as a Client to view registered vendors and carbon footprint.</p>
            <button onClick={() => window.location.href = '/client-login'}>Client Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
