import React from 'react';
import { ElectionSoftwareSection } from '../components/ElectionSoftwareSection';
import { SoftwareMockup } from '../components/SoftwareMockup';
import { 
  Database, 
  Search, 
  Printer, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone,
  BarChart3,
  Users,
  Layers,
  FileSpreadsheet
} from 'lucide-react';

export const SoftwarePage = ({ onOpenDemo }) => {
  return (
    <main>
      {/* Page Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy-deep) 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="section-eyebrow section-eyebrow-gold" style={{ marginBottom: '1rem' }}>
            MASTERMIND ELECTION SOFTWARE
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Smarter Election Management Starts with Better Information.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.65, maxWidth: '760px', margin: '0 auto 2rem auto' }}>
            Manage voter records, organize constituency-level information, coordinate voter slip preparation, and simplify election-related workflows through a centralized election management platform.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn btn-royal btn-lg">
              <span>Book Your Free Software Demo</span>
              <ArrowRight size={18} />
            </button>
            <a href="#demo-console" className="btn btn-outline-white btn-lg">
              <span>View Interactive Console</span>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Showcase Mockup */}
      <section className="section-padding" style={{ background: '#F5F7FB' }}>
        <div className="container">
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <SoftwareMockup onOpenDemo={onOpenDemo} />
          </div>
        </div>
      </section>

      {/* 8 Features & Interactive Tab Console */}
      <div id="demo-console">
        <ElectionSoftwareSection onOpenDemo={onOpenDemo} />
      </div>

      {/* Security & Data Integrity Details */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-eyebrow">ENTERPRISE SECURITY</span>
            <h2 className="section-title">Confidentiality & Role-Based Vault Security</h2>
            <p className="section-description" style={{ marginBottom: '2.5rem' }}>
              We understand political campaigns operate in highly competitive environments. Mastermind Media implements bank-grade data security protocols.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
              <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <ShieldCheck size={26} color="var(--color-royal-blue)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.5rem' }}>Encrypted Vaults</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>Candidate databases are strictly isolated. No data is shared across different campaign offices or constituencies.</p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <Users size={26} color="var(--color-royal-blue)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.5rem' }}>Granular Access</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>Restrict volunteers to only see their allocated booth or ward voters. Candidate and central war room retain master control.</p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <Smartphone size={26} color="var(--color-royal-blue)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.5rem' }}>Offline Capable</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>Mobile apps function seamlessly in remote or poor connectivity booths with secure local caching and instant thermal printing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
