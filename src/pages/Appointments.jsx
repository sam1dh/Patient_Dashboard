import React from 'react';
import './Appointments.css';

const Appointments = () => {
  // Static data for appointments
  const appointments = [
    {
      id: 1,
      patient: "John Doe",
      date: "2025-02-10T10:00",
      doctor: "Dr. Rajesh Kumar",
      hospital: "Apollo Hospitals, Bhopal",
      status: "Confirmed"
    },
    {
      id: 2,
      patient: "Jane Smith",
      date: "2025-02-12T14:30",
      doctor: "Dr. Anita Sharma",
      hospital: "AIIMS Delhi",
      status: "Pending"
    }
  ];

  return (
    <div className="appointments-container">
      <h1>📅 Appointments</h1>

      <div className="appointments-table">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date & Time</th>
              <th>Doctor</th>
              <th>Hospital</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.patient}</td>
                <td>{new Date(appointment.date).toLocaleString()}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.hospital}</td>
                <td>
                  <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                    {appointment.status}
                  </span>
                </td>
                <td>
                  <button className="action-button reschedule">Reschedule</button>
                  <button className="action-button cancel">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;