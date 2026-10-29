import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { ShieldCheck, Lock, Headphones, MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <main>
      {/* Page Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy-deep) 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="section-eyebrow section-eyebrow-gold" style={{ marginBottom: '1rem' }}>
            CONNECT WITH MASTERMIND MEDIA
          </span>
          <h1 className="page-hero-title">
            Let's Plan Your Next Campaign
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.65, maxWidth: '760px', margin: '0 auto' }}>
            Connect with Mastermind Media for election software demonstrations, voter database solutions, and campaign management enquiries.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact & Lead Form Section */}
      <ContactSection />

      {/* Trust & Confidentiality Assurance Strip */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'var(--color-royal-blue-subtle)', color: 'var(--color-royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy-dark)', marginBottom: '0.25rem' }}>Strict Confidentiality</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>All inquiries, candidate consultations, and constituency requirements are protected by complete client non-disclosure.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'var(--color-royal-blue-subtle)', color: 'var(--color-royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Headphones size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy-dark)', marginBottom: '0.25rem' }}>Rapid Consultation Response</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>During campaign periods, our senior technical directors respond via phone or WhatsApp within 2 business hours.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'var(--color-royal-blue-subtle)', color: 'var(--color-royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy-dark)', marginBottom: '0.25rem' }}>In-Person Pune Meetings</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>Visit our City Vista Kharadi office in Pune for an in-depth software demo on large war-room multi-screen monitors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
