import React from 'react';
import { ShieldCheck, FileCheck } from 'lucide-react';

export const TermsPage = () => {
  return (
    <main>
      <section className="section-padding" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-eyebrow">TERMS OF USE & LICENSING</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 900, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
            Terms and Conditions
          </h1>
          <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>
            Last Updated: {new Date().getFullYear()} | Mastermind Media
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.05rem', color: '#374151', lineHeight: 1.8 }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Mastermind Election Software (web applications, mobile applications, and associated campaign services provided by Mastermind Media), you agree to be bound by these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                2. Lawful Campaign Purpose
              </h2>
              <p>
                The software and campaign services are licensed exclusively for lawful political campaign management, constituent engagement, voter slip distribution, and democratic election operations compliant with the Representation of the People Act, 1951 and relevant state election rules.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                3. Disclaimer Regarding Election Outcomes
              </h2>
              <p>
                Mastermind Media provides technical software tools, database organization, and communication systems. In accordance with ethical standards, the phrase “we engineer election victories” reflects our rigorous engineering methodology and does not represent an artificial guarantee or warranty of election results. Election results depend entirely upon democratic voter franchise and campaign candidates.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                4. Independent Technology Entity
              </h2>
              <p>
                Mastermind Media is an independent private enterprise. It is neither affiliated with nor endorsed by the Election Commission of India (ECI) or any State Election Commission.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0', marginTop: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                Corporate Registered Details
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                <strong>Mastermind Media</strong><br />
                404, 4th Floor, B Wing, City Vista, Kharadi, Pune – 411014, Maharashtra.<br />
                Telephone: <a href="tel:+919604001344" style={{ color: 'var(--color-royal-blue)' }}>+91 96040 01344</a> / <a href="tel:+919657301344" style={{ color: 'var(--color-royal-blue)' }}>+91 96573 01344</a><br />
                Email: <a href="mailto:contact@mastermindmedias.com" style={{ color: 'var(--color-royal-blue)' }}>contact@mastermindmedias.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
