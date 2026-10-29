import React from 'react';
import { TeamGallery } from '../components/TeamGallery';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export const TeamPage = ({ onOpenDemo }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy-deep) 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="section-eyebrow section-eyebrow-gold" style={{ marginBottom: '1rem' }}>
            THE PEOPLE BEHIND MASTERMIND MEDIA
          </span>
          <h1 className="page-hero-title">
            Meet Our Team
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.65, maxWidth: '760px', margin: '0 auto 2rem auto' }}>
            A dedicated team of election technology specialists, software professionals, designers, digital marketers, and campaign management experts.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn btn-royal btn-lg">
              <span>Book a Consultation with Our Specialists</span>
              <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="btn btn-outline-white btn-lg">
              <span>Visit Pune Office</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Gallery Grid */}
      <TeamGallery />

      {/* Culture & Dedication Strip */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <span className="section-eyebrow">FIELD-PROVEN COMMITMENT</span>
          <h2 className="section-title">Stationed with Candidates Through Polling Day</h2>
          <p className="section-description" style={{ marginBottom: '2rem' }}>
            Our election engineers, database operators, and war room technicians don't just supply software from a distance. During active campaigns, we provide on-ground deployment, booth volunteer training, and 24/7 war room technical command.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#F8FAFC', padding: '0.75rem 1.25rem', borderRadius: '9999px', border: '1px solid #E2E8F0', fontSize: '0.9rem', color: 'var(--color-navy-dark)', fontWeight: 600 }}>
              <ShieldCheck size={16} color="var(--color-royal-blue)" />
              <span>Full Data Non-Disclosure</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#F8FAFC', padding: '0.75rem 1.25rem', borderRadius: '9999px', border: '1px solid #E2E8F0', fontSize: '0.9rem', color: 'var(--color-navy-dark)', fontWeight: 600 }}>
              <Users size={16} color="var(--color-royal-blue)" />
              <span>Bilingual Marathi & Hindi Trainers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#F8FAFC', padding: '0.75rem 1.25rem', borderRadius: '9999px', border: '1px solid #E2E8F0', fontSize: '0.9rem', color: 'var(--color-navy-dark)', fontWeight: 600 }}>
              <Award size={16} color="var(--color-royal-blue)" />
              <span>500+ Campaign Deployments</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
