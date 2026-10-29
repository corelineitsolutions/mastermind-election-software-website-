import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Printer, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  ChevronRight,
  Filter,
  BarChart3,
  Layers,
  MapPin
} from 'lucide-react';

export const SoftwareMockup = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState('voters');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooth, setSelectedBooth] = useState('all');

  const sampleVoters = [
    {
      id: 1,
      name: 'Deshmukh Rajesh V.',
      nameMr: 'देशमुख राजेश वि.',
      partNo: 'Part 42',
      booth: 'Ghole Road High School',
      epic: 'WDX8291044',
      age: 48,
      gender: 'M',
      slipStatus: 'Printed',
      contactStatus: 'Contacted',
      familyMembers: 4
    },
    {
      id: 2,
      name: 'Kulkarni Sunita A.',
      nameMr: 'कुलकर्णी सुनिता आ.',
      partNo: 'Part 42',
      booth: 'Ghole Road High School',
      epic: 'WDX8291051',
      age: 44,
      gender: 'F',
      slipStatus: 'Printed',
      contactStatus: 'Contacted',
      familyMembers: 4
    },
    {
      id: 3,
      name: 'Patil Anand R.',
      nameMr: 'पाटील आनंद रा.',
      partNo: 'Part 43',
      booth: 'Model Colony Hall',
      epic: 'JKP4019283',
      age: 31,
      gender: 'M',
      slipStatus: 'Distributed',
      contactStatus: 'Verified',
      familyMembers: 3
    },
    {
      id: 4,
      name: 'Shinde Sneha M.',
      nameMr: 'शिंदे स्नेहा म.',
      partNo: 'Part 44',
      booth: 'Shivajinagar Gaothan',
      epic: 'MH2090142',
      age: 27,
      gender: 'F',
      slipStatus: 'Generated',
      contactStatus: 'Follow-up',
      familyMembers: 5
    }
  ];

  const filteredVoters = sampleVoters.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          v.epic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBooth = selectedBooth === 'all' || v.partNo === selectedBooth;
    return matchesSearch && matchesBooth;
  });

  return (
    <div className="hero-mockup-wrapper">
      {/* Decorative ambient background blur */}
      <div className="hero-mockup-ambient-glow" />

      {/* Main Desktop Dashboard Window Frame */}
      <div className="hero-dashboard-card">
        {/* Top Window Bar */}
        <div className="dashboard-topbar">
          <div className="window-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <div className="dashboard-title-pill">
            <ShieldCheck size={13} className="text-royal" />
            <span>Mastermind Election Console v4.8 • Shivajinagar AC-209 (Pune)</span>
          </div>

          <div className="dashboard-status-indicator">
            <span className="pulse-dot" />
            <span>War Room Live</span>
          </div>
        </div>

        {/* Dashboard Subheader & Metrics */}
        <div className="dashboard-header-stats">
          <div className="stat-pill">
            <span className="stat-label">Total Voters:</span>
            <span className="stat-val">2,86,410</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Booths:</span>
            <span className="stat-val">284</span>
          </div>
          <div className="stat-pill highlight">
            <span className="stat-label">Voter Slips:</span>
            <span className="stat-val">94.8% Ready</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Field Teams:</span>
            <span className="stat-val">24 Active</span>
          </div>
        </div>

        {/* Toolbar: Search, Booth Filter, View Tabs */}
        <div className="dashboard-controls">
          <div className="mock-search-input">
            <Search size={14} className="icon-muted" />
            <input 
              type="text" 
              placeholder="Search voter by Name or EPIC ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Voter search mockup"
            />
          </div>

          <div className="mock-filter-group">
            <select 
              value={selectedBooth} 
              onChange={(e) => setSelectedBooth(e.target.value)}
              aria-label="Filter by Part"
              className="mock-select"
            >
              <option value="all">All Polling Parts (284)</option>
              <option value="Part 42">Part 42 - Ghole Road</option>
              <option value="Part 43">Part 43 - Model Colony</option>
              <option value="Part 44">Part 44 - Gaothan</option>
            </select>

            <button 
              type="button"
              className="mock-btn-action"
              onClick={onOpenDemo}
              title="Print Voter Slips for Filtered Voters"
            >
              <Printer size={13} />
              <span>Print Slips</span>
            </button>
          </div>
        </div>

        {/* Realistic Voter Database Table */}
        <div className="dashboard-table-container">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Voter Name & Family</th>
                <th>Part / Polling Station</th>
                <th>EPIC ID</th>
                <th>Age / Sex</th>
                <th>Voter Slip</th>
                <th>Campaign Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredVoters.map((voter) => (
                <tr key={voter.id}>
                  <td>
                    <div className="voter-name-cell">
                      <div className="name-en">{voter.name}</div>
                      <div className="name-mr">{voter.nameMr} • {voter.familyMembers} in Family</div>
                    </div>
                  </td>
                  <td>
                    <div className="booth-cell">
                      <span className="part-tag">{voter.partNo}</span>
                      <span className="booth-name">{voter.booth}</span>
                    </div>
                  </td>
                  <td>
                    <span className="epic-badge">{voter.epic}</span>
                  </td>
                  <td>
                    <span className="age-gender">{voter.age} / {voter.gender}</span>
                  </td>
                  <td>
                    <span className={`status-badge slip-${voter.slipStatus.toLowerCase()}`}>
                      <CheckCircle2 size={12} />
                      {voter.slipStatus}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge contact-${voter.contactStatus.toLowerCase()}`}>
                      <span className="status-dot" />
                      {voter.contactStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dashboard Bottom Action Callout */}
        <div className="dashboard-footer-bar">
          <div className="footer-bar-info">
            <span className="sample-watermark">Synthetic Demonstrative Data • Zero PII Exposed</span>
          </div>
          <button 
            type="button" 
            className="footer-bar-cta"
            onClick={onOpenDemo}
          >
            <span>Launch Live Interactive Walkthrough</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Overlapping Companion Mobile Screen Mockup */}
      <div className="hero-mobile-companion-card">
        <div className="mobile-companion-header">
          <Smartphone size={15} className="text-royal" />
          <div>
            <div className="companion-app-title">Mastermind Karyakarta App</div>
            <div className="companion-app-sub">Android & iOS Companion</div>
          </div>
        </div>

        <div className="companion-app-body">
          <div className="companion-slip-preview">
            <div className="slip-preview-header">
              <span>VOTER SLIP (मतदार पावती)</span>
              <span className="slip-booth-no">BOOTH 42</span>
            </div>
            <div className="slip-voter-info">
              <div className="slip-row">
                <span className="label">Voter:</span>
                <span className="val">Deshmukh Rajesh V.</span>
              </div>
              <div className="slip-row">
                <span className="label">EPIC ID:</span>
                <span className="val bold">WDX8291044</span>
              </div>
              <div className="slip-row">
                <span className="label">Serial #:</span>
                <span className="val bold text-royal"># 342</span>
              </div>
              <div className="slip-row">
                <span className="label">Room:</span>
                <span className="val">Room 2, Ground Floor</span>
              </div>
            </div>
            <div className="slip-qr-mock">
              <div className="qr-barcode-line" />
              <span>Scan at Polling Station Helpdesk</span>
            </div>
          </div>
        </div>

        <div className="companion-badge-bottom">
          <CheckCircle2 size={12} color="#10B981" />
          <span>Offline Search & Bluetooth Thermal Print</span>
        </div>
      </div>
    </div>
  );
};
