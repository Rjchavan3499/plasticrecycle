import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css"; // Reusing Auth.css styles

const VendorRegister = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Vendor Registered Successfully!");
    navigate("/vendor-login");
  };

  return (
    <div className="auth-container">
      <h2>Vendor Registration</h2>
      <form onSubmit={handleRegister}>
      <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/vendor-login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default VendorRegister;
