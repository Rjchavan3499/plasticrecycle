import React, { useState } from "react";
import "../styles/ClientDashboard.css";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [chartType1, setChartType1] = useState("line");
  const [chartType2, setChartType2] = useState("line");

  const carbonData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "CO₂ Reduction (kg)",
        data: [10, 20, 30, 40, 50, 60],
        fill: false,
        borderColor: "#4caf50",
        tension: 0.3,
      },
    ],
  };

  const recycledData = {
    labels: ["Plastic A", "Plastic B", "Plastic C"],
    datasets: [
      {
        label: "Weight (kg)",
        data: [15, 25, 40],
        backgroundColor: "#2196f3",
      },
    ],
  };

  const recyclingProgressData = {
    labels: ["Recycled", "Pending"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverOffset: 4,
      },
    ],
  };

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

      case "analytics":
        return (
          <div className="analytics-section">
            <div className="analytics-card">
              <h4>Plastic Recycled</h4>
              <div className="chart-with-select">
                <select value={chartType1} onChange={(e) => setChartType1(e.target.value)}>
                  <option value="line">Line Chart</option>
                  <option value="pie">Pie Chart</option>
                  <option value="volume">Volume Chart</option>
                </select>
                <div className="chart-fixed">
                  {chartType1 === "line" && <Line data={carbonData} />}
                  {chartType1 === "pie" && <Doughnut data={recyclingProgressData} />}
                  {chartType1 === "volume" && <Bar data={recycledData} />}
                </div>
              </div>
            </div>

            <div className="analytics-card">
              <h4>CO₂ Reduction</h4>
              <div className="chart-with-select">
                <select value={chartType2} onChange={(e) => setChartType2(e.target.value)}>
                  <option value="line">Line Chart</option>
                  <option value="pie">Pie Chart</option>
                  <option value="volume">Volume Chart</option>
                </select>
                <div className="chart-fixed">
                  {chartType2 === "line" && <Line data={carbonData} />}
                  {chartType2 === "pie" && <Doughnut data={recyclingProgressData} />}
                  {chartType2 === "volume" && <Bar data={recycledData} />}
                </div>
              </div>
            </div>
          </div>
        );

      case "carbon":
        return (
          <div className="carbon-section">
            <h3>Carbon Footprint</h3>
            <div className="chart-with-select">
              <select value={chartType1} onChange={(e) => setChartType1(e.target.value)}>
                <option value="line">Line Chart</option>
                <option value="pie">Pie Chart</option>
                <option value="volume">Volume Chart</option>
              </select>
              <div className="chart-fixed">
                {chartType1 === "line" && <Line data={carbonData} />}
                {chartType1 === "pie" && <Doughnut data={recyclingProgressData} />}
                {chartType1 === "volume" && <Bar data={recycledData} />}
              </div>
            </div>
          </div>
        );

      case "esg":
        return (
          <div className="client-dashboard-menu">
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
      <div className="tab-buttons">
        <button className="tab-button orders-button" onClick={() => setActiveTab("orders")}>Orders</button>
        <button className="tab-button analytics-button" onClick={() => setActiveTab("analytics")}>Analytics</button>
        <button className="tab-button carbon-button" onClick={() => setActiveTab("carbon")}>Carbon Footprint</button>
        <button className="tab-button esg-button" onClick={() => setActiveTab("esg")}>ESG Tracking</button>
      </div>

      {renderContent()}
    </div>
  );
};

export default ClientDashboard;