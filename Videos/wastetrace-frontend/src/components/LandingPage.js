// src/components/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css"; // Reusing your Dashboard.css

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Welcome! Please Select User Type</h2>
      <div className="dashboard-menu">
        <div className="menu-item">
          <h3>Vendor</h3>
          <p>Login or Register as a Vendor to submit your plastic waste details.</p>
          <button onClick={() => navigate("/vendor-login")}>Vendor Login</button>
        </div>

        <div className="menu-item">
          <h3>Client</h3>
          <p>Login or Register as a Client to view registered vendors and carbon footprint.</p>
          <button onClick={() => navigate("/client-login")}>Client Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
