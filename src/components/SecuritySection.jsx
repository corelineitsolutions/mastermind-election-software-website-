import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, Lock, UserCheck, KeyRound, ServerCrash, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SecuritySection = ({ onOpenDemo }) => {
  const { t } = useLanguage();
  const pillars = t('security.pillars');

  const securityFeatures = [
    { title: "TLS 1.3 In-Transit Encryption", desc: "All voter lookups and mobile sync operations are guarded by modern cipher suites.", icon: Lock },
    { title: "AES-256 Storage Encryption", desc: "Databases and backups are encrypted at rest with automated key rotation.", icon: KeyRound },
    { title: "Booth-Scoped Privileges", desc: "Field workers are restricted to strictly assigned booth numbers, preventing bulk leakage.", icon: UserCheck },
    { title: "Non-Disclosure Guarantee", desc: "Formal bilateral confidentiality agreements signed before any electoral roll upload.", icon: FileCheck },
    { title: "Automated Daily Backups", desc: "Disaster recovery snapshots ensure your war room operations remain uninterrupted.", icon: ServerCrash },
    { title: "Tamper-Evident Audit Logs", desc: "Every voter slip download, export, and survey edit is timestamped with user IDs.", icon: ShieldCheck }
  ];

  return (
    <section className="section-padding" id="security">
      <div className="container">
        <div className="security-dark-banner">
          <div style={{ maxWidth: '780px', position: 'relative', zIndex: 1 }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontSize: '0.8125rem', 
              fontWeight: 700, 
              color: 'var(--color-amber-warm)', 
              background: 'rgba(255, 179, 66, 0.15)', 
              padding: '0.4rem 1rem', 
              borderRadius: '9999px',
              marginBottom: '1.25rem' 
            }}>
              <ShieldCheck size={16} />
              {t('security.eyebrow')}
            </span>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1rem' }}>
              {t('security.title')}
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '2rem' }}>
              {t('security.subtitle')}
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="security-pillars-grid">
            {pillars.map((pil, idx) => (
              <div key={idx} className="security-pillar-item">
                <div className="security-pillar-icon">
                  {idx === 0 ? <UserCheck size={24} /> : idx === 1 ? <Lock size={24} /> : <ShieldCheck size={24} />}
                </div>
                <h3 className="security-pillar-title">{pil.title}</h3>
                <p className="security-pillar-desc">{pil.desc}</p>
              </div>
            ))}
          </div>

          {/* Technical Controls Grid */}
          <div style={{ 
            marginTop: '3rem', 
            paddingTop: '2.5rem', 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}>
            {securityFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                  <Icon size={18} color="var(--color-amber-warm)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                      {f.title}
                    </h4>
                    <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', lineHeight: 1.5 }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ 
            marginTop: '2.5rem', 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '1rem',
            position: 'relative',
            zIndex: 1 
          }}>
            <div style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>
              Read our full legal assurances in our{' '}
              <Link to="/privacy-policy" style={{ color: 'var(--color-amber-warm)', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/terms" style={{ color: 'var(--color-amber-warm)', textDecoration: 'underline' }}>
                Terms of Service
              </Link>.
            </div>

            <button onClick={onOpenDemo} className="btn btn-orange">
              <span>Schedule Technical Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
