import React, { useState } from 'react';
import './Claims.css'; // Import the CSS file
import { 
  Upload, FileText, Download, Clock, CheckCircle, XCircle, 
  Plus, Eye, Search, Filter, Calendar
} from 'lucide-react';

const Claims = () => {
  const [selectedClaimId, setSelectedClaimId] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const claims = [
    {
      id: 1,
      claimId: "CLM12345",
      status: "Accepted",
      filedOn: "2025-01-10",
      amount: "₹5,000",
      hospital: "Apollo Hospitals",
      doctor: "Dr. Rajesh Kumar"
    },
    {
      id: 2,
      claimId: "CLM12346",
      status: "Under Review",
      filedOn: "2025-01-15",
      amount: "₹12,000",
      hospital: "AIIMS Delhi",
      doctor: "Dr. Anita Sharma"
    },
    {
      id: 3,
      claimId: "CLM12347",
      status: "Rejected",
      filedOn: "2025-01-20",
      amount: "₹8,000",
      hospital: "Fortis Hospital, Mumbai",
      doctor: "Dr. Priya Singh"
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Accepted': return <CheckCircle className="status-icon accepted" />;
      case 'Rejected': return <XCircle className="status-icon rejected" />;
      case 'Under Review': return <Clock className="status-icon under-review" />;
      default: return null;
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Accepted': return 'status-badge accepted';
      case 'Rejected': return 'status-badge rejected';
      case 'Under Review': return 'status-badge under-review';
      default: return 'status-badge';
    }
  };

  return (
    <div className="claims-dashboard">
      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-content">
            <p className="card-label">Total Claims</p>
            <p className="card-value">{claims.length}</p>
          </div>
          <FileText className="card-icon" />
        </div>

        <div className="summary-card">
          <div className="card-content">
            <p className="card-label">Under Review</p>
            <p className="card-value">
              {claims.filter(c => c.status === "Under Review").length}
            </p>
          </div>
          <Clock className="card-icon" />
        </div>

        <div className="summary-card">
          <div className="card-content">
            <p className="card-label">Accepted</p>
            <p className="card-value">
              {claims.filter(c => c.status === "Accepted").length}
            </p>
          </div>
          <CheckCircle className="card-icon" />
        </div>

        <div className="summary-card">
          <div className="card-content">
            <p className="card-label">Rejected</p>
            <p className="card-value">
              {claims.filter(c => c.status === "Rejected").length}
            </p>
          </div>
          <XCircle className="card-icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Claims Management</h1>
          <button className="new-claim-button" onClick={() => setActiveTab('new')}>
            <Plus className="icon" /> New Claim
          </button>
        </div>

        <div className="search-filter">
          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search claims..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="filter-button">
            <Filter className="icon" /> Filter
          </button>
        </div>

        <div className="tabs">
          <div className="tab-list">
            <button
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Claims Overview
            </button>
            <button
              className={`tab ${activeTab === 'new' ? 'active' : ''}`}
              onClick={() => setActiveTab('new')}
            >
              New Claim
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="claims-table">
                <table>
                  <thead>
                    <tr>
                      <th>Claim ID</th>
                      <th>Status</th>
                      <th>Filed On</th>
                      <th>Amount</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {claims.map((claim) => (
                      <tr key={claim.id}>
                        <td>{claim.claimId}</td>
                        <td>
                          <span className={getStatusStyle(claim.status)}>
                            {getStatusIcon(claim.status)}
                            {claim.status}
                          </span>
                        </td>
                        <td>{claim.filedOn}</td>
                        <td>{claim.amount}</td>
                        <td>
                          <button className="view-button" onClick={() => setSelectedClaimId(claim.id)}>
                            <Eye className="icon" /> View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'new' && (
              <form className="new-claim-form">
                <div className="form-grid">
                  <input type="text" placeholder="Patient Name" />
                  <input type="date" />
                  <input type="text" placeholder="Policy Number" />
                  <input type="text" placeholder="Hospital Name" />
                  <input type="text" placeholder="Doctor Name" />
                  <input type="number" placeholder="Amount" />
                </div>

                <div className="upload-section">
                  <label>Upload Documents</label>
                  <button className="upload-button">
                    <Upload className="icon" /> Choose Files
                  </button>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-button">Submit Claim</button>
                  <button type="button" className="cancel-button">Cancel</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Selected Claim Details */}
      {selectedClaimId && (
        <div className="claim-details">
          <h2>Claim Details</h2>
          <div className="details-content">
            {/* Claim details content */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Claims;