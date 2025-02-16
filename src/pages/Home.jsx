import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { File, Clock, CheckCircle, XCircle, Calendar } from 'lucide-react';
import './Home.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  // Claims Analytics Data
  const claimsData = {
    labels: ['Approved', 'Pending', 'Rejected'],
    datasets: [{
      data: [65, 25, 10],
      backgroundColor: ['#10B981', '#FBBF24', '#EF4444'],
      borderWidth: 0
    }]
  };

  // Weekly Claims Data
  const weeklyClaims = [
    { week: 'Week 1', claims: 45 },
    { week: 'Week 2', claims: 52 },
    { week: 'Week 3', claims: 38 },
    { week: 'Week 4', claims: 47 }
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <div className="header">
        <h1>Claims Dashboard</h1>
        <p>Monthly Claims Overview</p>
      </div>

      {/* Key Metrics */}
      <div className="key-metrics">
        <div className="metric-card">
          <File className="metric-icon" />
          <div>
            <h3>Total Claims</h3>
            <p>150</p>
          </div>
        </div>
        <div className="metric-card">
          <Clock className="metric-icon" />
          <div>
            <h3>Pending</h3>
            <p>30</p>
          </div>
        </div>
        <div className="metric-card">
          <CheckCircle className="metric-icon" />
          <div>
            <h3>Approved</h3>
            <p>100</p>
          </div>
        </div>
        <div className="metric-card">
          <XCircle className="metric-icon" />
          <div>
            <h3>Rejected</h3>
            <p>20</p>
          </div>
        </div>
      </div>

      {/* Claims Analytics */}
      <div className="analytics-section">
        <h2>Claims Status Distribution</h2>
        <div className="analytics-content">
          <div className="pie-chart-container">
            <Pie data={claimsData} />
          </div>
          <div className="legend-container">
            <div className="legend-item">
              <span className="dot approved"></span>
              <span>Approved (65%)</span>
            </div>
            <div className="legend-item">
              <span className="dot pending"></span>
              <span>Pending (25%)</span>
            </div>
            <div className="legend-item">
              <span className="dot rejected"></span>
              <span>Rejected (10%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Claims Activity */}
      <div className="weekly-activity">
        <h2>Weekly Claims Processing</h2>
        <div className="weeks-grid">
          {weeklyClaims.map((item, index) => (
            <div key={index} className="week-card">
              <Calendar className="week-icon" />
              <h3>{item.week}</h3>
              <p>{item.claims} Claims</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;