import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { HowItWorks } from '../components/HowItWorks';
import { ArrowRight, CheckCircle2, ShieldCheck, FileCheck, Users, Headphones } from 'lucide-react';

export const HowItWorksPage = ({ onOpenDemo }) => {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: '2rem' }}>
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 100%)', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <span className="section-eyebrow">
            PROVEN IMPLEMENTATION METHODOLOGY
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>
            From Electoral Rolls to an Active War Room
          </h1>
          <p className="section-description">
            A transparent, reliable onboarding roadmap engineered to establish your digital election operations quickly, safely, and compliantly.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={onOpenDemo} className="btn btn-orange btn-lg">
              <span>Start with Step 1: Book a Demo</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Main 4 Steps Component */}
      <HowItWorks onOpenDemo={onOpenDemo} />

      {/* Operational Checklist */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">ONBOARDING CHECKLIST</span>
            <h2 className="section-title">What Happens After You Book a Demo</h2>
            <p className="section-description">Our standard technical deployment protocol executed for every candidate.</p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                title: "1. Constituency Requirement Consultation",
                desc: "We analyze your constituency boundaries, booth count, voter demographics, and hardware requirements (tablets, phones, laser printers).",
                icon: Headphones
              },
              {
                title: "2. Confidentiality & Non-Disclosure Execution",
                desc: "A binding mutual NDA is executed protecting all candidate voter files, contact rosters, and internal strategy assessments.",
                icon: FileCheck
              },
              {
                title: "3. Voter Data Formatting & Ingestion",
                desc: "Official draft or final electoral lists are converted into high-speed searchable databases with family groupings and phonetic Devanagari indexing.",
                icon: ShieldCheck
              },
              {
                title: "4. Karyakarta Training & Mobile App Rollout",
                desc: "Hands-on training sessions (in-person or video conference in Marathi/Hindi) for booth prabharis, page pramukhs, and war room analysts.",
                icon: Users
              }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: '12px', border: '1px solid #E5E7EB', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(255,141,2,0.1)', color: 'var(--color-orange-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.4rem' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.9375rem', color: '#4B5563', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={onOpenDemo} className="btn btn-primary btn-lg">
              <span>Book Your Strategy Call Today</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
