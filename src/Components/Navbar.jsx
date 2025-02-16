import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fontsource/poppins'; // Import Poppins font

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <span role="img" aria-label="hospital">🏥</span> SevaAI Patient Dashboard
      </div>
      <nav className="navbar-links">
        <Link to="/" className="nav-link">🏠 Home</Link>
        <Link to="/appointments" className="nav-link">📅 Appointments</Link>
        <Link to="/medications" className="nav-link">💊 Medications</Link>
        <Link to="/my-doctor" className="nav-link">🏥 My Doctor</Link>
        <Link to="/claims" className="nav-link">📂 Claims</Link>
      </nav>
    </header>
  );
};

export default Navbar;