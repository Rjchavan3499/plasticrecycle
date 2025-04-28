import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ClientLogin from "./components/ClientLogin";
import ClientRegister from "./components/ClientRegister";
import VendorLogin from "./components/VendorLogin";
import VendorRegister from "./components/VendorRegister";
import ClientDashboard from "./components/ClientDashboard";
import VendorDashboard from "./components/VendorDashboard";
import PrivateRoute from "./components/PrivateRoute";
import Spinner from "./components/Spinner";

function App() {
  const isAuthenticated = true; // Testing ke liye true kiya hai, actual me login status yaha se manage hoga

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/client-register" element={<ClientRegister />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/vendor-register" element={<VendorRegister />} />

        {/* Protected Routes */}
        <Route
          path="/client-dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ClientDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/vendor-dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <VendorDashboard />
            </PrivateRoute>
          }
        />

        {/* Loading Spinner Example */}
        <Route path="/loading" element={<Spinner />} />
      </Routes>
    </Router>
  );
}

export default App;
