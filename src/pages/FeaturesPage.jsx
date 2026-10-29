import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { ProductShowcase } from '../components/ProductShowcase';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Database, Smartphone } from 'lucide-react';

export const FeaturesPage = ({ onOpenDemo }) => {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: '2rem' }}>
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 100%)', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <span className="section-eyebrow">
            COMPREHENSIVE FEATURE SUITE
          </span>
          <h1 className="page-hero-title">
            Everything You Need to Power Your Election War Room
          </h1>
          <p className="section-description">
            Explore the complete feature architecture of Master Mind Election Software — from lightning-fast voter lookup to booth-level karyakarta monitoring.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={onOpenDemo} className="btn btn-orange btn-lg">
              <span>Book a Free Live Demo</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <FeaturesGrid onOpenDemo={onOpenDemo} />

      {/* Deep-Dive Feature Breakdown */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">WORKFLOW BREAKDOWN</span>
            <h2 className="section-title">Designed for Fast-Paced Ground Campaigns</h2>
            <p className="section-description">How Master Mind powers every touchpoint between campaign managers and booth volunteers.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '10px', background: 'rgba(255,141,2,0.1)', color: 'var(--color-orange-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Database size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                1. Seamless Voter List Ingestion
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1rem' }}>
                Upload official PDF electoral rolls or Excel files. Our backend extracts voter names, addresses, and family structures automatically with 99.8% OCR precision.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#1F2937' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10B981" /> Supports English, Marathi & Hindi voter rolls
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10B981" /> De-duplicates shifted, dead, and duplicate records
                </li>
              </ul>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '10px', background: 'rgba(255,141,2,0.1)', color: 'var(--color-orange-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Smartphone size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                2. Field Volunteer Mobile Empowerment
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1rem' }}>
                Every booth karyakarta downloads the verified Android app. They only see their assigned booths, keeping your master voter list fully protected.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#1F2937' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10B981" /> Offline database search without active internet
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10B981" /> Record voter phone numbers & voting leaning
                </li>
              </ul>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '10px', background: 'rgba(255,141,2,0.1)', color: 'var(--color-orange-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                3. Instant Export & Slip Printing
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1rem' }}>
                Generate official-style voter slips (मतदार चिठ्ठी) with candidate photos, election symbols, QR codes, and booth serials ready for laser or offset printing.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#1F2937' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10B981" /> Formatted alphabetically or family-grouped
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#10B981" /> Password-encrypted Excel files for bulk texting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Showcase */}
      <ProductShowcase onOpenDemo={onOpenDemo} />
    </main>
  );
};
