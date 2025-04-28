import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
  const [vendor, setVendor] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    console.log("Registered Vendor:", vendor);
    navigate("/vendor-login");  // Corrected (small letters)
  };

  return (
    <div className="auth-container">
      <h2>Vendor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={vendor.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={vendor.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          required
          value={vendor.mobile}
          onChange={handleChange}
          pattern="[0-9]{10}"
          title="Enter a 10-digit mobile number"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={vendor.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <p>
          Already registered? <Link to="/vendor-login">Login</Link> {/* Corrected */}
        </p>
      </form>
    </div>
  );
};

export default Register;
