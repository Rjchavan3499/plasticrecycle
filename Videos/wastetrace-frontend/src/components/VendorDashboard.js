import "../styles/Dashboard.css";
import React, { useState } from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";
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
  BarElement
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

const plasticTypes = [
  "PET (Polyethylene Terephthalate)",
  "HDPE (High-Density Polyethylene)",
  "PVC (Polyvinyl Chloride)",
  "LDPE (Low-Density Polyethylene)",
  "PP (Polypropylene)",
  "PS (Polystyrene)",
  "Other"
];

const VendorDashboard = () => {
  const [plasticDetails, setPlasticDetails] = useState({
    type: "",
    weight: "",
    grade: "",
    location: "",
    photo: null
  });

  const [chartType, setChartType] = useState("pie");

  const recyclingData = {
    labels: ["Recycled", "Pending"],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverOffset: 4
      }
    ]
  };

  const volumeChartData = {
    labels: ["Plastic A", "Plastic B", "Plastic C"],
    datasets: [
      {
        label: "Weight (kg)",
        data: [20, 35, 50],
        backgroundColor: "#2196f3"
      }
    ]
  };

  const handlePlasticSubmit = (e) => {
    e.preventDefault();
    alert("Plastic Details Submitted!");
    setPlasticDetails({
      type: "",
      weight: "",
      grade: "",
      location: "",
      photo: null
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPlasticDetails({ ...plasticDetails, photo: URL.createObjectURL(file) });
    }
  };

  const handleChartChange = (e) => {
    setChartType(e.target.value);
  };

  return (
    <div className="dashboard-container">
      <h2>Vendor Dashboard</h2>
      <div className="dashboard-menu">
        <div className="menu-item">
          <h3>Submit Plastic Details</h3>
          <form onSubmit={handlePlasticSubmit}>
            <select
              value={plasticDetails.type}
              onChange={(e) => setPlasticDetails({ ...plasticDetails, type: e.target.value })}
              required
            >
              <option value="">Select Plastic Type</option>
              {plasticTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Weight (kg)"
              value={plasticDetails.weight}
              onChange={(e) => setPlasticDetails({ ...plasticDetails, weight: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Plastic Grade"
              value={plasticDetails.grade}
              onChange={(e) => setPlasticDetails({ ...plasticDetails, grade: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={plasticDetails.location}
              onChange={(e) => setPlasticDetails({ ...plasticDetails, location: e.target.value })}
              required
            />
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
            <button type="submit">Submit</button>
          </form>
          {plasticDetails.photo && (
            <div>
              <h4>Uploaded Photo</h4>
              <img
                src={plasticDetails.photo}
                alt="Plastic"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          )}
        </div>

        <div className="menu-item">
          <h3>Recycling Progress</h3>
          <select onChange={handleChartChange} value={chartType}>
            <option value="pie">Pie Chart</option>
            <option value="line">Line Chart</option>
          </select>

          {chartType === "pie" && <Doughnut data={recyclingData} />}

          {chartType === "line" && (
            <>
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  datasets: [
                    {
                      label: "Plastic Recycled (kg)",
                      data: [12, 19, 3, 5, 2, 3],
                      fill: false,
                      borderColor: "#4caf50",
                      tension: 0.3
                    }
                  ]
                }}
              />
              <h4 style={{ marginTop: "20px" }}>Volume Submitted</h4>
              <Bar data={volumeChartData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;