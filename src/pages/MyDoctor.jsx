import React from 'react';
import './MyDoctor.css';

const DoctorCard = ({ doctor }) => (
  <div className="doctor-card">
    <div className="doctor-image-container">
      <img 
        src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg"
        alt={doctor.name} 
        className="doctor-image"
      />
    </div>
    
    <div className="doctor-content">
      <div className="specialty-badge">
        {doctor.specialty}
      </div>
      
      <h2 className="doctor-name">{doctor.name}</h2>
      <p className="hospital-name">{doctor.hospital}</p>
      
      <div className="doctor-info">
        <div className="info-item">
          <span className="info-icon">📞</span>
          {doctor.contact}
        </div>
        <div className="info-item">
          <span className="info-icon">📅</span>
          {new Date(doctor.nextAppointment).toLocaleString()}
        </div>
        <div className="info-item">
          <span className="info-icon">💊</span>
          {doctor.prescription}
        </div>
        <div className="info-item">
          <span className="info-icon">📝</span>
          {doctor.notes}
        </div>
      </div>
      
      <div className="action-buttons">
        <button className="call-button">
          📞 Call Doctor
        </button>
        <button className="message-button">
          📩 Message
        </button>
      </div>
    </div>
  </div>
);

const MyDoctor = () => {
  const doctors = [
    {
      id: 1,
    
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      contact: "+91 9876543210",
      hospital: "Apollo Hospitals, Bhopal",
      nextAppointment: "2025-02-10T10:00",
      prescription: "Aspirin 75mg, 1x daily",
      notes: "Monitor BP regularly. Reduce salt intake."
    },
    {
      id: 2,
      name: "Dr. Anita Sharma",
      specialty: "Neurologist",
      contact: "+91 9876543211",
      hospital: "AIIMS Delhi",
      nextAppointment: "2025-02-18T14:30",
      prescription: "Metformin 500mg, 1x daily",
      notes: "Follow up in 3 months."
    },
    {
      id: 3,
      name: "Dr. Priya Singh",
      specialty: "Dermatologist",
      contact: "+91 9876543212",
      hospital: "Fortis Hospital, Mumbai",
      nextAppointment: "2025-03-01T11:00",
      prescription: "Cetirizine 10mg, 1x daily",
      notes: "Avoid direct sunlight."
    },
    {
      id: 4,
      name: "Dr. Ravi Verma",
      specialty: "Orthopedist",
      contact: "+91 9876543213",
      hospital: "Max Hospital, Delhi",
      nextAppointment: "2025-03-05T09:00",
      prescription: "Calcium supplements, 1x daily",
      notes: "Avoid heavy lifting."
    },
    {
      id: 5,
      name: "Dr. Sneha Gupta",
      specialty: "Pediatrician",
      contact: "+91 9876543214",
      hospital: "Rainbow Children's Hospital, Hyderabad",
      nextAppointment: "2025-03-10T15:00",
      prescription: "Vitamin D drops, 1x daily",
      notes: "Ensure proper sunlight exposure."
    }
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        <span className="title-icon">🏥</span> My Doctors
      </h1>
      
      <div className="doctors-grid">
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default MyDoctor;