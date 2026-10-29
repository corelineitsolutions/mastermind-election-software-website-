import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Vote, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ElectionTypes = ({ onOpenDemo }) => {
  const { t } = useLanguage();
  const categories = t('solutions.categories');

  return (
    <section className="section-padding" id="solutions" style={{ background: '#F9FAFB' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Vote size={14} />
            {t('solutions.eyebrow')}
          </span>
          <h2 className="section-title">{t('solutions.title')}</h2>
          <p className="section-description">{t('solutions.subtitle')}</p>
        </div>

        <div className="election-types-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="election-card">
              <div className="election-card-header">
                <span className="election-badge">{cat.scale}</span>
                <Vote size={20} color="var(--color-orange-bright)" />
              </div>

              <h3 className="election-card-title">{cat.title}</h3>
              <p className="election-card-desc">{cat.desc}</p>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid #F3F4F6' }}>
                <button
                  onClick={onOpenDemo}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.8125rem' }}
                >
                  <span>Explore Constituency Setup</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
