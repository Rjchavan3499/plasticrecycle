import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Dashboard.css";

const VendorLogin = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Vendor Login Successful!");
    navigate("/vendor-dashboard");
  };

  return (
    <div className="dashboard-container">
      <h2>Vendor Login</h2>
      <form className="menu-item" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p style={{ marginTop: "1rem" }}>
          Don't have an account? <Link to="/vendor-register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default VendorLogin;
