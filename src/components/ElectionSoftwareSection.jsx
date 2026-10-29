import React, { useState } from 'react';
import { 
  Database, 
  MapPin, 
  Search, 
  Printer, 
  FileSpreadsheet, 
  CheckSquare, 
  UserCheck, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Eye,
  SlidersHorizontal,
  Download,
  Calendar
} from 'lucide-react';
import { SoftwareMockup } from './SoftwareMockup';

export const ElectionSoftwareSection = ({ onOpenDemo }) => {
  const [activePreviewTab, setActivePreviewTab] = useState('voter-search');

  // The 8 exact feature cards from Section 8
  const softwareFeatures = [
    {
      id: 1,
      title: 'Voter Database Management',
      desc: 'Centralized database engine to store, index, and organize hundreds of thousands of voter records with zero duplicate entries and rapid search retrieval.',
      icon: Database,
      status: 'AVAILABLE NOW'
    },
    {
      id: 2,
      title: 'Constituency & Polling-Part Organization',
      desc: 'Hierarchical mapping of Assembly, Ward, Polling Station, and Part numbers. Instantly view total registered voters per booth.',
      icon: MapPin,
      status: 'AVAILABLE NOW'
    },
    {
      id: 3,
      title: 'Advanced Voter Search & Filtering',
      desc: 'Multi-parameter search by Name (English & Devanagari), EPIC Voter ID, Age bracket, Gender, Family Head, and House Number.',
      icon: Search,
      status: 'AVAILABLE NOW'
    },
    {
      id: 4,
      title: 'Voter Slip Generation & Printing',
      desc: 'One-click automated generation of Election Commission compliant voter slips with QR code, booth address, and serial numbers. Compatible with thermal printers.',
      icon: Printer,
      status: 'AVAILABLE NOW'
    },
    {
      id: 5,
      title: 'Data Import, Export, & Organization',
      desc: 'Authorized batch import of official electoral rolls in Excel, CSV, or PDF, with instant export capabilities for karyakarta field lists.',
      icon: FileSpreadsheet,
      status: 'AVAILABLE NOW'
    },
    {
      id: 6,
      title: 'Campaign Task Coordination',
      desc: 'Assign booth-level responsibilities to specific karyakartas, track daily voter outreach progress, and coordinate election day voter turnout.',
      icon: CheckSquare,
      status: 'AVAILABLE NOW'
    },
    {
      id: 7,
      title: 'User Roles & Access Permissions',
      desc: 'Granular role-based security: Candidate, War Room Admin, Assembly Coordinator, and Booth Volunteer with strictly segregated permissions.',
      icon: UserCheck,
      status: 'AVAILABLE NOW'
    },
    {
      id: 8,
      title: 'Reporting & Operational Insights',
      desc: 'Real-time visual graphs of voter contact percentages, booth-wise sentiment breakdown, and live voting hour turnout tracking on election day.',
      icon: BarChart3,
      status: 'AVAILABLE NOW'
    }
  ];

  return (
    <section className="election-software-section section-padding" id="election-software">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            CORE PRODUCT SHOWCASE
          </span>
          <h2 className="section-title">
            Smarter Election Management Starts with Better Information.
          </h2>
          <p className="section-description">
            Manage voter records, organize constituency-level information, coordinate voter slip preparation, and simplify election-related workflows through a centralized election management platform.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="software-features-grid">
          {softwareFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.id} className="software-feature-card">
                <div className="feat-card-header">
                  <div className="feat-icon-wrap">
                    <Icon size={22} className="feat-icon" />
                  </div>
                  <span className="feat-status-pill">{feat.status}</span>
                </div>
                <h3 className="feat-card-title">{feat.title}</h3>
                <p className="feat-card-desc">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Software Console Showcase */}
        <div style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-eyebrow">LIVE INTERACTIVE CONSOLE</span>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
              Mastermind Election Console & Field Companion
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
              Experience the live voter search, booth part filters, and instant voter slip preview.
            </p>
          </div>
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            <SoftwareMockup onOpenDemo={onOpenDemo} />
          </div>
        </div>

        {/* Product Demonstration Interactive Console Preview */}
        <div className="software-demo-preview-card">
          <div className="demo-preview-top-nav">
            <div className="preview-nav-tabs">
              <button 
                type="button"
                className={`preview-tab-btn ${activePreviewTab === 'voter-search' ? 'active' : ''}`}
                onClick={() => setActivePreviewTab('voter-search')}
              >
                <Search size={15} />
                <span>Smart Voter Search</span>
              </button>
              <button 
                type="button"
                className={`preview-tab-btn ${activePreviewTab === 'voter-slips' ? 'active' : ''}`}
                onClick={() => setActivePreviewTab('voter-slips')}
              >
                <Printer size={15} />
                <span>Voter Slip Generation</span>
              </button>
              <button 
                type="button"
                className={`preview-tab-btn ${activePreviewTab === 'booth-analytics' ? 'active' : ''}`}
                onClick={() => setActivePreviewTab('booth-analytics')}
              >
                <BarChart3 size={15} />
                <span>Booth Insights & Turnout</span>
              </button>
            </div>

            <div className="preview-watermark-tag">
              <ShieldCheck size={14} className="text-royal" />
              <span>Synthetic Sample Records (Zero Actual Voter PII)</span>
            </div>
          </div>

          <div className="demo-preview-viewport">
            {activePreviewTab === 'voter-search' && (
              <div className="preview-tab-pane">
                <div className="pane-control-bar">
                  <div className="pane-search-mock">
                    <Search size={16} className="text-muted" />
                    <span>Search: "Rajesh" | Part 42 | Age 40-50 | Gender: All</span>
                  </div>
                  <div className="pane-stats-counter">
                    <strong>12 Matches</strong> found in 0.04s
                  </div>
                </div>

                <div className="preview-table-wrapper">
                  <table className="preview-table">
                    <thead>
                      <tr>
                        <th>Sr. #</th>
                        <th>Voter Name (EN / MR)</th>
                        <th>Part / Booth</th>
                        <th>EPIC No.</th>
                        <th>Age / Sex</th>
                        <th>Family Group</th>
                        <th>Slip Ready</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>342</td>
                        <td><strong>Deshmukh Rajesh V.</strong> <br /><span className="text-muted">देशमुख राजेश वि.</span></td>
                        <td>Part 42 - Ghole Road Hall</td>
                        <td><span className="code-pill">WDX8291044</span></td>
                        <td>48 / M</td>
                        <td>House 102 (4 Electors)</td>
                        <td><span className="badge-success">Generated</span></td>
                      </tr>
                      <tr>
                        <td>343</td>
                        <td><strong>Deshmukh Sunita R.</strong> <br /><span className="text-muted">देशमुख सुनिता रा.</span></td>
                        <td>Part 42 - Ghole Road Hall</td>
                        <td><span className="code-pill">WDX8291051</span></td>
                        <td>44 / F</td>
                        <td>House 102 (4 Electors)</td>
                        <td><span className="badge-success">Generated</span></td>
                      </tr>
                      <tr>
                        <td>512</td>
                        <td><strong>Jadhav Rajesh M.</strong> <br /><span className="text-muted">जाधव राजेश म.</span></td>
                        <td>Part 42 - Ghole Road Hall</td>
                        <td><span className="code-pill">MH2091448</span></td>
                        <td>41 / M</td>
                        <td>House 114 (2 Electors)</td>
                        <td><span className="badge-success">Generated</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activePreviewTab === 'voter-slips' && (
              <div className="preview-tab-pane">
                <div className="voter-slip-layout-grid">
                  <div className="slip-spec-card">
                    <h4>Print-Ready Standard Voter Slip</h4>
                    <p>Formats available for standard A4 multi-cut sheets or portable 2-inch and 3-inch thermal Bluetooth printers for field karyakartas.</p>
                    <ul className="slip-spec-bullets">
                      <li>• ECI-compliant format with clear Serial Number</li>
                      <li>• Complete Polling Station name, Room number & Location</li>
                      <li>• Bilingual candidate appeal or voter helpline number</li>
                      <li>• Fast batch generation (1000 slips in under 15 seconds)</li>
                    </ul>
                    <button type="button" onClick={onOpenDemo} className="btn btn-royal btn-sm" style={{ marginTop: '1rem' }}>
                      <Printer size={15} />
                      <span>Test Print Layout in Demo</span>
                    </button>
                  </div>

                  <div className="slip-visual-sample">
                    <div className="mock-voter-slip-paper">
                      <div className="slip-paper-header">
                        <div className="slip-badge">मतदार पावती / VOTER SLIP</div>
                        <div className="slip-election-label">Maharashtra Legislative Assembly Election</div>
                      </div>
                      <div className="slip-paper-body">
                        <div className="paper-row"><span>विधानसभा मतदारसंघ:</span> <strong>209 - शिवाजीनगर</strong></div>
                        <div className="paper-row"><span>भाग / Polling Part:</span> <strong>42 (घोले रोड हायस्कूल)</strong></div>
                        <div className="paper-row"><span>अनुक्रमांक / Serial #:</span> <strong className="serial-accent"># 342</strong></div>
                        <div className="paper-row"><span>नाव / Elector Name:</span> <strong>देशमुख राजेश वि.</strong></div>
                        <div className="paper-row"><span>ओळखपत्र / EPIC ID:</span> <strong>WDX8291044</strong></div>
                        <div className="paper-row"><span>मतदान केंद्र / Booth:</span> <strong>खोली क्र. २, तळमजला</strong></div>
                      </div>
                      <div className="slip-paper-footer">
                        <div className="paper-qr-box">
                          <div className="mock-barcode" />
                        </div>
                        <div className="paper-note">कृपया मतदानाच्या दिवशी आपले मूळ ओळखपत्र सोबत ठेवावे.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePreviewTab === 'booth-analytics' && (
              <div className="preview-tab-pane">
                <div className="analytics-metrics-overview">
                  <div className="overview-metric-box">
                    <span className="metric-box-label">Total Booths</span>
                    <span className="metric-box-val">284</span>
                    <span className="metric-box-sub">100% Ward Coverage</span>
                  </div>
                  <div className="overview-metric-box">
                    <span className="metric-box-label">Assigned Karyakartas</span>
                    <span className="metric-box-val">1,136</span>
                    <span className="metric-box-sub">4 Volunteers / Booth Avg</span>
                  </div>
                  <div className="overview-metric-box">
                    <span className="metric-box-label">Slips Distributed</span>
                    <span className="metric-box-val">78.4%</span>
                    <span className="metric-box-sub">2,24,545 Printed</span>
                  </div>
                  <div className="overview-metric-box">
                    <span className="metric-box-label">Contacted Electors</span>
                    <span className="metric-box-val">1,98,200</span>
                    <span className="metric-box-sub">Verified Households</span>
                  </div>
                </div>

                <div className="booth-progress-list">
                  <div className="progress-item">
                    <div className="progress-header">
                      <span>Ward 14 - Model Colony & Shivaji Housing (Part 1 - 24)</span>
                      <strong>89% Voter Slips Distributed</strong>
                    </div>
                    <div className="progress-track"><div className="progress-fill" style={{ width: '89%' }} /></div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-header">
                      <span>Ward 15 - Ghole Road & Apte Road (Part 25 - 58)</span>
                      <strong>92% Voter Slips Distributed</strong>
                    </div>
                    <div className="progress-track"><div className="progress-fill" style={{ width: '92%' }} /></div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-header">
                      <span>Ward 16 - Shivajinagar Gaothan & Station (Part 59 - 94)</span>
                      <strong>74% Voter Slips Distributed</strong>
                    </div>
                    <div className="progress-track"><div className="progress-fill" style={{ width: '74%' }} /></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section Conversion Call to Action */}
        <div className="software-section-cta-box">
          <div className="cta-box-text">
            <h3 className="cta-box-title">Experience the Platform with Your Own Constituency Sample</h3>
            <p className="cta-box-sub">
              Our specialists will conduct a live personalized walkthrough illustrating your constituency's voter distribution and booth layouts.
            </p>
          </div>
          <button 
            type="button"
            onClick={onOpenDemo}
            className="btn btn-primary btn-lg"
          >
            <span>Book Your Free Software Demo</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
