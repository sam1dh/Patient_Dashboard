import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Medications from './pages/Medications';
import MyDoctor from './pages/MyDoctor';
import Claims from './pages/Claims';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/my-doctor" element={<MyDoctor />} />
          <Route path="/claims" element={<Claims />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;