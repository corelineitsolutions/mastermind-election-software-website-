import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShieldCheck, Target, Award, Users, HeartHandshake, Compass, Phone, Mail } from 'lucide-react';

export const AboutPage = ({ onOpenDemo }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy-deep) 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="section-eyebrow section-eyebrow-gold" style={{ marginBottom: '1rem' }}>
            ABOUT MASTERMIND MEDIA
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Election Experts Built on Technology & Political Strategy
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.65, maxWidth: '760px', margin: '0 auto' }}>
            At Mastermind Media, we combine technology, communication, and strategic planning to deliver comprehensive election management solutions.
          </p>
        </div>
      </section>

      {/* Core Company Story & Mission */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">WHO WE ARE</span>
              <h2 className="section-title">Mastermind Media — Election Experts</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                At Mastermind Media, we combine technology, communication, and strategic planning to deliver comprehensive election management solutions.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Trusted by 500+ political leaders, we specialize in election management software, voter database solutions, and integrated campaign services across Maharashtra.
              </p>
              <blockquote style={{ borderLeft: '4px solid var(--color-royal-blue)', background: 'var(--color-bg-light)', padding: '1rem 1.5rem', borderRadius: '0 12px 12px 0', margin: '1.5rem 0' }}>
                <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-navy-dark)', fontStyle: 'italic', marginBottom: '0.25rem' }}>
                  “We don't just build apps; we engineer election victories.”
                </p>
                <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                  *Reflects our engineering dedication and high-performance commitment; does not constitute an electoral guarantee.
                </span>
              </blockquote>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our mission is to simplify campaign operations, improve coordination, and empower political teams with reliable digital tools.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenDemo} className="btn btn-royal btn-lg">
                  <span>Book a Consultation</span>
                  <ArrowRight size={18} />
                </button>
                <Link to="/election-software" className="btn btn-secondary btn-lg">
                  <span>Explore Software</span>
                </Link>
              </div>
            </div>

            {/* Mission & Vision Presentation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: '2rem', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'var(--color-royal-blue-subtle)', color: 'var(--color-royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Target size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>
                    Our Mission
                  </h3>
                </div>
                <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.7 }}>
                  Simplify election operations through reliable technology, organized workflows, and professional campaign support.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: '2rem', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'rgba(213, 173, 91, 0.15)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Compass size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>
                    Our Vision
                  </h3>
                </div>
                <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.7 }}>
                  Become a trusted election technology and campaign solutions partner for political teams across India.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: '2rem', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>
                    Ethical Commitments & Privacy
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.7 }}>
                  We practice absolute data confidentiality. Every client's voter database is encrypted and strictly isolated. We never monetize, share, or expose client voter lists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pune Headquarters Card */}
      <section className="section-padding" style={{ background: '#F5F7FB', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', background: '#FFFFFF', padding: '3rem 2.5rem', borderRadius: '24px', border: '1px solid #E2E8F0', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ width: '3.75rem', height: '3.75rem', borderRadius: '50%', background: 'var(--color-royal-blue-subtle)', color: 'var(--color-royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <MapPin size={26} />
            </div>
            <h3 style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.5rem' }}>
              Visit Our Pune Headquarters
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#374151', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              <strong>Mastermind Media</strong><br />
              404, 4th Floor, B Wing, City Vista, Kharadi, Pune – 411014, Maharashtra.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+919604001344" className="btn btn-royal">
                <Phone size={16} />
                <span>Call 9604001344</span>
              </a>
              <a href="tel:+919657301344" className="btn btn-secondary">
                <Phone size={16} />
                <span>Call 9657301344</span>
              </a>
              <a href="mailto:contact@mastermindmedias.com" className="btn btn-secondary">
                <Mail size={16} />
                <span>Email Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
