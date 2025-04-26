import React, { useState } from "react";
import "../styles/ClientDashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [chartType, setChartType] = useState("line");

  // Dummy data for Orders
  const renderOrdersSummary = () => {
    const totalOrders = 100;
    const inProgress = 30;
    const completed = 50;
    const cancelled = 20;

    return (
      <div className="orders-summary-widget">
        <div className="stat-card">
          <h4>Total Orders</h4>
          <p>{totalOrders}</p>
        </div>
        <div className="stat-card">
          <h4>In Progress</h4>
          <p>{inProgress}</p>
        </div>
        <div className="stat-card">
          <h4>Completed</h4>
          <p>{completed}</p>
        </div>
        <div className="stat-card">
          <h4>Cancelled</h4>
          <p>{cancelled}</p>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div>
            {renderOrdersSummary()}
            <h4>Order Details</h4>
            <div className="orders-table">
              <div className="order-detail">
                <p><strong>Order ID:</strong> ORD001</p>
                <p><strong>Status:</strong> <span className="status-tag in-progress">In Progress</span></p>
                <p><strong>Pickup → Destination:</strong> Location A → Location B</p>
                <p><strong>Order Date:</strong> 2025-04-25 14:32</p>
                <p><strong>Assigned Vendor:</strong> Vendor A</p>
              </div>
            </div>
          </div>
        );
      case "carbon":
        return (
          <div className="client-dashboard-menu">
            <h3>Carbon Footprint</h3>
            <h4>Select Graph Type</h4>
            <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
              <option value="line">Line Chart</option>
              <option value="pie">Pie Chart</option>
              <option value="volume">Volume Chart</option>
            </select>
            <div className="chart-container">
              <div className="dummy-graph">
                <p>{chartType.charAt(0).toUpperCase() + chartType.slice(1)} Graph</p>
                <div className={`graph ${chartType}`}></div>
              </div>
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="client-dashboard-menu">
            <h3>Analytics</h3>
            <div className="analytics-item">
              <h4>Plastic Recycled</h4>
              <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
                <option value="line">Line Chart</option>
                <option value="pie">Pie Chart</option>
                <option value="volume">Volume Chart</option>
              </select>
              <div className="chart-container">
                <div className="dummy-graph">
                  <p>{chartType.charAt(0).toUpperCase() + chartType.slice(1)} Graph</p>
                  <div className={`graph ${chartType}`}></div>
                </div>
              </div>
            </div>
            <div className="analytics-item">
              <h4>CO₂ Reduction</h4>
              <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
                <option value="line">Line Chart</option>
                <option value="pie">Pie Chart</option>
                <option value="volume">Volume Chart</option>
              </select>
              <div className="chart-container">
                <div className="dummy-graph">
                  <p>{chartType.charAt(0).toUpperCase() + chartType.slice(1)} Graph</p>
                  <div className={`graph ${chartType}`}></div>
                </div>
              </div>
            </div>
          </div>
        );
      case "esg":
        return (
          <div className="client-dashboard-menu">
            <h3>ESG Tracking</h3>
            <div className="esg-item">
              <h4>Current ESG Score</h4>
              <p>92%</p>
            </div>
            <div className="esg-item">
              <h4>Previous Year Target</h4>
              <p>85%</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="client-dashboard-container">
      <h2>Welcome to Client Dashboard</h2>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
        <button className="tab-button orders-button" onClick={() => setActiveTab("orders")}>Orders</button>
        <button className="tab-button analytics-button" onClick={() => setActiveTab("analytics")}>Analytics</button>
        <button className="tab-button carbon-button" onClick={() => setActiveTab("carbon")}>Carbon Footprint</button>
        <button className="tab-button esg-button" onClick={() => setActiveTab("esg")}>ESG Tracking</button>
      </div>

      {renderContent()}
    </div>
  );
};

export default Dashboard;
