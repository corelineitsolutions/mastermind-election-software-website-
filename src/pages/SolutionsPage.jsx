import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ElectionTypes } from '../components/ElectionTypes';
import { ArrowRight, Vote, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const SolutionsPage = ({ onOpenDemo }) => {
  const { t } = useLanguage();
  const categories = t('solutions.categories');

  return (
    <main style={{ paddingTop: '2rem' }}>
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 100%)', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <span className="section-eyebrow">
            CONSTITUENCY-SPECIFIC SOLUTIONS
          </span>
          <h1 className="page-hero-title">
            Tailored Election Software for Every Democratic Tier
          </h1>
          <p className="section-description">
            Whether managing a multi-lakh parliamentary constituency or a hyper-local Gram Panchayat ward, Master Mind adapts its voter intelligence architecture to your exact electoral geography.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={onOpenDemo} className="btn btn-orange btn-lg">
              <span>Book a Constituency Consultation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Grid of All Constituency Types */}
      <ElectionTypes onOpenDemo={onOpenDemo} />

      {/* Detailed Technical Scope per Tier */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">CONSTITUENCY CAPABILITIES</span>
            <h2 className="section-title">Comparative Analysis Across Election Types</h2>
            <p className="section-description">How data structures differ between parliamentary, assembly, municipal, and rural ballots.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {categories.map((c) => (
              <div key={c.id} style={{ background: '#F9FAFB', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>{c.title}</h3>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange-red)', background: 'rgba(255,141,2,0.1)', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                    {c.scale}
                  </span>
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {c.desc}
                </p>
                <button
                  onClick={onOpenDemo}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.8125rem' }}
                >
                  <span>Request Tier Demo & Pricing</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
