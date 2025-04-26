// src/components/Register.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

// Mobile number regex validation for country code and 10-digit number
const mobileRegex = /^[+]?[1-9][0-9]{1,3}[-\s]?[0-9]{10}$/; // Matches country code and 10-digit number

const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+91", country: "India" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  // Add more country codes as needed
];

const Register = () => {
  const [vendor, setVendor] = useState({ name: "", mobile: "", password: "", countryCode: "+1" });
  const [otp, setOtp] = useState(""); // State to handle OTP input
  const [isOtpSent, setIsOtpSent] = useState(false); // Flag to track OTP status
  const [error, setError] = useState(""); // To handle error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const handleCountryCodeChange = (e) => {
    setVendor({ ...vendor, countryCode: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine the country code and mobile number for validation
    const fullMobileNumber = vendor.countryCode + vendor.mobile;

    // Mobile validation
    if (!mobileRegex.test(fullMobileNumber)) {
      setError("Please enter a valid mobile number with country code and 10 digits.");
      return;
    }

    if (isOtpSent) {
      alert("OTP Verified! Registration Successful!");
      navigate("/");
    } else {
      alert("OTP Sent to your mobile number!");
      setIsOtpSent(true); // Simulate OTP sending
    }
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
          onChange={handleChange}
        />
        
        <div className="mobile-container">
          <select
            name="countryCode"
            value={vendor.countryCode}
            onChange={handleCountryCodeChange}
            required
          >
            {countryCodes.map((option) => (
              <option key={option.code} value={option.code}>
                {option.code} ({option.country})
              </option>
            ))}
          </select>
          
          <input
            type="text" // Mobile number input
            name="mobile"
            placeholder="Mobile Number (10 digits)"
            required
            value={vendor.mobile}
            onChange={handleChange}
            maxLength={10}
          />
        </div>
        
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message */}

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        
        {isOtpSent ? (
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="submit">Verify OTP & Register</button>
          </div>
        ) : (
          <button type="submit">Register</button>
        )}
        <p>Already registered? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
