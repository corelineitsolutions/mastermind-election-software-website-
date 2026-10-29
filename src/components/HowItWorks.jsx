import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Workflow, ArrowRight } from 'lucide-react';

export const HowItWorks = ({ onOpenDemo }) => {
  const { t } = useLanguage();
  const steps = t('howItWorks.steps');

  return (
    <section className="section-padding" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Workflow size={14} />
            {t('howItWorks.eyebrow')}
          </span>
          <h2 className="section-title">{t('howItWorks.title')}</h2>
          <p className="section-description">{t('howItWorks.subtitle')}</p>
        </div>

        <div className="process-steps-grid">
          {steps.map((st, idx) => (
            <div key={idx} className="process-step-card">
              <div className="step-number-pill">{st.step}</div>
              <h3 className="step-card-title">{st.title}</h3>
              <p className="step-card-desc">{st.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button onClick={onOpenDemo} className="btn btn-primary btn-lg">
            <span>{t('hero.primaryCta')}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
