import React from 'react';
import { ShieldCheck, Lock, FileCheck, Phone, Mail, MapPin } from 'lucide-react';

export const PrivacyPolicyPage = () => {
  return (
    <main>
      <section className="section-padding" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-eyebrow">LEGAL COMPLIANCE & PRIVACY</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 900, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
            Privacy Policy & Data Security
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
                1. Commitment to Candidate Data Confidentiality
              </h2>
              <p>
                At Mastermind Media, we recognize the supreme sensitivity of electoral rolls, booth-level volunteer hierarchies, voter records, and internal campaign survey data. We maintain an uncompromising policy of absolute data isolation and zero cross-sharing between candidates, political parties, or external commercial entities.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                2. Information We Process
              </h2>
              <p>
                When a political office utilizes Mastermind Election Software and integrated campaign services:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li><strong>Public Electoral Rolls:</strong> Officially published draft or final voter rolls provided by authorized candidate offices for digitization and booth allocation.</li>
                <li><strong>Volunteer & Karyakarta Credentials:</strong> Names, mobile numbers, and assigned polling stations for mobile application authentication.</li>
                <li><strong>Field Survey Responses:</strong> Data collected by authorized volunteers during lawful door-to-door constituent outreach.</li>
                <li><strong>Consultation Enquiries:</strong> Name, phone, and election specifications submitted through our website forms.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                3. Technical Safeguards & Encryption
              </h2>
              <p>
                All data transmission between our servers and field mobile devices uses TLS 1.3 encryption. At rest, databases are encrypted using AES-256 standards with restricted firewall perimeters. Individual karyakarta access is strictly scoped to designated polling stations, preventing bulk downloading.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                4. Telecom & Election Advertising Compliance
              </h2>
              <p>
                All bulk SMS, voice call broadcasting, and WhatsApp business communications managed on behalf of campaign teams are executed strictly in compliance with TRAI regulations, DLT template pre-approvals, and Election Commission of India model code requirements.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                5. Data Ownership & Deletion Rights
              </h2>
              <p>
                All uploaded and gathered electoral intelligence remains the sole intellectual property of the subscribing client. Upon conclusion of an election campaign, candidates may request complete data archival, export, or permanent cryptographic destruction from our active servers.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0', marginTop: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                Privacy Officer Contact Details
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
