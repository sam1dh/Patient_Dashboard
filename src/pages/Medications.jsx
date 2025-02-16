import React from 'react';
import './Medications.css';

const Medications = () => {
  // Static data for medications
  const medications = [
    {
      id: 1,
      name: "Aspirin 75mg",
      schedule: [
        { time: "08:00 AM", dosage: "1 Tablet" },
        { time: "08:00 PM", dosage: "1 Tablet" }
      ]
    },
    {
      id: 2,
      name: "Metformin 500mg",
      schedule: [
        { time: "07:00 AM", dosage: "1 Tablet" }
      ]
    },
    {
        id: 3,
        name: "Cetirizine 10mg",
        schedule: [
          { time: "09:00 PM", dosage: "1 Tablet" }
        ],
        doctor: "Dr. Priya Singh",
        notes: "Avoid driving after taking."
      },
      {
        id: 4,
        name: "Calcium Supplements",
        schedule: [
          { time: "10:00 AM", dosage: "1 Tablet" }
        ],
        doctor: "Dr. Ravi Verma",
        notes: "Take with milk for better absorption."
      },
      {
        id: 5,
        name: "Vitamin D Drops",
        schedule: [
          { time: "03:00 PM", dosage: "5 Drops" }
        ],
        doctor: "Dr. Sneha Gupta",
        notes: "Ensure proper sunlight exposure."
      }
  ];

  return (
    <div className="medications-container">
      <h1>💊 Medications</h1>

      <div className="medications-list">
        {medications.map((medication) => (
          <div key={medication.id} className="medication-card">
            <h3>{medication.name}</h3>
            <div className="schedule">
              {medication.schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <span className="time">{item.time}</span>
                  <span className="dosage">{item.dosage}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medications;