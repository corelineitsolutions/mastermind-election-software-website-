import React from 'react';
import { CampaignServicesSection } from '../components/CampaignServicesSection';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users, 
  MapPin, 
  CheckCircle2,
  Calendar,
  PhoneCall
} from 'lucide-react';

export const ServicesPage = ({ onOpenDemo }) => {
  return (
    <main>
      {/* Page Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy-deep) 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="section-eyebrow section-eyebrow-gold" style={{ marginBottom: '1rem' }}>
            INTEGRATED POLITICAL SERVICES
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Comprehensive Political Campaign Solutions Across Maharashtra
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.65, maxWidth: '760px', margin: '0 auto 2rem auto' }}>
            From central social media war rooms and targeted advertising to mobile LED vans and authorized broadcast messaging, Mastermind Media provides unified campaign execution.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn btn-royal btn-lg">
              <span>Discuss Your Campaign Needs</span>
              <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="btn btn-outline-white btn-lg">
              <span>Contact War Room Specialists</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7 Services Grid & Conversion CTA Banner */}
      <CampaignServicesSection onOpenDemo={onOpenDemo} />

      {/* Campaign Process & Regulatory Compliance */}
      <section className="section-padding" style={{ background: '#F5F7FB', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">OUR EXECUTION FRAMEWORK</span>
            <h2 className="section-title">Professional, Policy-Compliant Execution</h2>
            <p className="section-description">
              All political advertising, promotional documentaries, and digital messaging adhere strictly to Election Commission of India guidelines and platform advertising verification protocols.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'var(--color-royal-blue-subtle)', color: 'var(--color-royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.5rem' }}>Ad Verification & Compliance</h3>
              <p style={{ fontSize: '0.925rem', color: '#64748B', lineHeight: 1.6 }}>We handle official Meta and Google political advertiser identity verification and pre-certification where mandated.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'rgba(213, 173, 91, 0.15)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Users size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.5rem' }}>Centralized Creative Control</h3>
              <p style={{ fontSize: '0.925rem', color: '#64748B', lineHeight: 1.6 }}>Unified messaging narrative ensuring the candidate's development achievements and agenda resonate clearly across all mediums.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <MapPin size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.5rem' }}>Constituency-Level Targeting</h3>
              <p style={{ fontSize: '0.925rem', color: '#64748B', lineHeight: 1.6 }}>Geotargeted paid promotions restricted tightly within assembly or ward boundaries to eliminate wasted media budgets.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
