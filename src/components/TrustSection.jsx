import React from 'react';
import { 
  Users, 
  Database, 
  Layers, 
  Cpu, 
  Smartphone,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const TrustSection = () => {
  const trustClaims = [
    {
      title: "500+ Political Leaders Served",
      desc: "Trusted by campaign offices, candidates, and political consultants across Maharashtra.",
      icon: Users
    },
    {
      title: "Smart Voter Database Management",
      desc: "Structured booth-wise, part-wise, and household-level voter record organization.",
      icon: Database
    },
    {
      title: "Integrated Campaign Services",
      desc: "Complete convergence of digital war rooms, on-ground media, and direct messaging.",
      icon: Layers
    },
    {
      title: "Technology-Driven Coordination",
      desc: "Streamlined operational workflows connecting karyakartas, candidates, and war rooms.",
      icon: Cpu
    }
  ];

  return (
    <section className="trust-strip-section" aria-label="Trust and Credibility">
      <div className="container">
        {/* 4 Core Business Claims */}
        <div className="trust-claims-grid">
          {trustClaims.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="trust-claim-card">
                <div className="trust-claim-icon-wrap">
                  <Icon size={24} className="trust-claim-icon" />
                </div>
                <div className="trust-claim-content">
                  <h3 className="trust-claim-title">{item.title}</h3>
                  <p className="trust-claim-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Web Access Bar */}
        <div className="trust-app-strip">
          <div className="app-strip-badge">
            <Smartphone size={16} />
            <span>Multi-Platform Accessibility</span>
          </div>
          <div className="app-strip-text">
            Mastermind Election Software is accessible on <strong>Desktop Web Workstations</strong>, <strong>Android Phones</strong>, and <strong>Apple iOS Devices</strong> for seamless booth-level execution.
          </div>
          <div className="app-strip-actions">
            <a 
              href="https://play.google.com/store/apps/details?id=com.corelineitsolutions.master_mind"
              target="_blank"
              rel="noopener noreferrer"
              className="app-pill-btn"
              title="Master Mind Android App on Google Play"
            >
              <span>Google Play App</span>
            </a>
            <a 
              href="https://wa.me/919604001344?text=Hello%20Mastermind%20Media%20Team%2C%20please%20share%20the%20iOS%20and%20web%20login%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="app-pill-btn"
              title="iOS & Web Portal Access"
            >
              <span>iOS & Web Access</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
