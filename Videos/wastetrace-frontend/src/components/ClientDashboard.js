import React from "react";
import "../styles/ClientDashboard.css"; // Separate CSS file

const ClientDashboard = () => {
  const ordersSummary = {
    total: 24,
    inProgress: 8,
    completed: 14,
    cancelled: 2,
  };

  const orders = [
    {
      id: "ORD-001",
      status: "In Progress",
      pickup: "Mumbai",
      destination: "Pune",
      date: "2025-04-26",
      time: "10:00 AM",
      vendor: "EcoVendor Pvt Ltd",
      weight: 120,
      carbonCredits: 15,
    },
    {
      id: "ORD-002",
      status: "Completed",
      pickup: "Delhi",
      destination: "Noida",
      date: "2025-04-25",
      time: "2:30 PM",
      vendor: "GreenTrans Ltd",
      weight: 200,
      carbonCredits: 25,
    },
    {
      id: "ORD-003",
      status: "Cancelled",
      pickup: "Chennai",
      destination: "Bangalore",
      date: "2025-04-24",
      time: "4:00 PM",
      vendor: "RecycleNow",
      weight: 80,
      carbonCredits: 0,
    },
  ];

  return (
    <div className="client-dashboard-container">
      {/* Header */}
      <div className="client-dashboard-header">
        <h2>Orders</h2>
        <div className="header-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-filter"></i>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Orders</h3>
          <p>{ordersSummary.total}</p>
        </div>
        <div className="summary-card">
          <h3>In Progress</h3>
          <p>{ordersSummary.inProgress}</p>
        </div>
        <div className="summary-card">
          <h3>Completed</h3>
          <p>{ordersSummary.completed}</p>
        </div>
        <div className="summary-card">
          <h3>Cancelled</h3>
          <p>{ordersSummary.cancelled}</p>
        </div>
      </div>

      {/* Orders List */}
      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-card-header">
              <h3>{order.id}</h3>
              <span className={`status-tag ${order.status.replace(/\s+/g, "-").toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <p><strong>From:</strong> {order.pickup} → <strong>To:</strong> {order.destination}</p>
            <p><strong>Date:</strong> {order.date} | <strong>Time:</strong> {order.time}</p>
            <p><strong>Vendor:</strong> {order.vendor}</p>
            <p><strong>Weight:</strong> {order.weight} kg | <strong>Carbon Credits:</strong> {order.carbonCredits}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;
