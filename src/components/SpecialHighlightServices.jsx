import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Printer, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight,
  FileSpreadsheet,
  Users,
  Search,
  Radio,
  Clock,
  ShieldAlert,
  Send
} from 'lucide-react';

export const SpecialHighlightServices = ({ onOpenDemo }) => {
  const highlightServices = [
    {
      id: 'voter-database',
      badge: 'CORE DATABASE PLATFORM',
      title: 'Voter Database Software',
      desc: 'Organize voter information, manage constituency-level records, and simplify election campaign planning through a centralized software solution.',
      icon: Database,
      features: [
        'Structured voter record management',
        'Constituency and polling-part organization',
        'Search and filtering tools',
        'Data organization and reporting',
        'Authorized data import and export',
        'Access-controlled information management'
      ],
      ctaText: 'Explore Voter Database Software',
      ctaLink: '/voter-database'
    },
    {
      id: 'voter-slip',
      badge: 'GROUND LOGISTICS & PRINTING',
      title: 'Voter Slip Management & Campaigning',
      desc: 'Streamline voter slip preparation, printing, distribution, and campaign coordination with efficient voter management tools.',
      icon: Printer,
      features: [
        'Voter slip preparation',
        'Print-ready layouts',
        'Booth-wise and part-wise organization',
        'Distribution tracking',
        'Campaign task coordination',
        'Configurable printing formats'
      ],
      ctaText: 'Explore Voter Slip Management',
      ctaLink: '/voter-database#slip-management'
    },
    {
      id: 'bulk-communications',
      badge: 'OUTREACH & REGULATORY COMPLIANCE',
      title: 'Bulk SMS & Voice Call Solutions',
      desc: 'Reach intended audiences with campaign updates, announcements, and scheduled communications, subject to applicable consent and telecom regulations.',
      icon: Radio,
      features: [
        'Approved messaging workflows',
        'Scheduled communication',
        'Voice announcement campaigns',
        'Delivery and campaign reporting where supported',
        'Contact list management',
        'Consent and opt-out management'
      ],
      ctaText: 'Explore Communication Solutions',
      ctaLink: '/services#communications'
    }
  ];

  return (
    <section className="highlight-services-section section-padding" id="highlight-services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            SPECIALIZED HIGHLIGHT SERVICES
          </span>
          <h2 className="section-title">
            Everything You Need to Manage Your Election Campaign
          </h2>
          <p className="section-description">
            From voter data organization to campaign communications, manage essential election operations through integrated technology and professional services.
          </p>
        </div>

        {/* 3 Highlighted Cards Grid */}
        <div className="highlight-services-grid">
          {highlightServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="highlight-service-card">
                <div className="highlight-card-top">
                  <div className="highlight-card-badge">
                    {service.badge}
                  </div>
                  <div className="highlight-icon-box">
                    <Icon size={28} className="highlight-icon" />
                  </div>
                  <h3 className="highlight-service-title">
                    {service.title}
                  </h3>
                  <p className="highlight-service-desc">
                    {service.desc}
                  </p>
                </div>

                <div className="highlight-card-divider" />

                <div className="highlight-features-block">
                  <span className="highlight-features-label">Key Capabilities:</span>
                  <ul className="highlight-features-list">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={16} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="highlight-card-footer">
                  <Link to={service.ctaLink} className="highlight-cta-btn">
                    <span>{service.ctaText}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
