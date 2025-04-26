import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import VendorLogin from "./components/VendorLogin";
import VendorRegister from "./components/VendorRegister";
import VendorDashboard from "./components/VendorDashboard";
import ClientLogin from "./components/ClientLogin";         // updated name
import ClientRegister from "./components/ClientRegister";   // updated name
import ClientDashboard from "./components/ClientDashboard"; // updated name

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/client-register" element={<ClientRegister />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
