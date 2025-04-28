import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Mobile:", mobile);
    console.log("Password:", password);
    alert("Login Successful!");
    navigate("/vendor-dashboard"); // make sure your route is /vendor-dashboard
  };

  return (
    <div className="auth-container">
      <h2>Vendor Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="tel"
          placeholder="Mobile"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          pattern="[0-9]{10}"
          title="Enter a 10-digit mobile number"
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
          Don't have an account? <Link to="/vendor-register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
