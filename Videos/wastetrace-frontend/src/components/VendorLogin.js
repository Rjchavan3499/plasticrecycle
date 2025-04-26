import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css"; // Assuming you have an Auth.css

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
    <div className="auth-container">
      <h2>Vendor Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Mobile Number"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/client-register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default VendorLogin;
