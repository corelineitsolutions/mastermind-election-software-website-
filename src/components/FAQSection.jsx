import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const items = t('faq.items');

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding" id="faq" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <HelpCircle size={14} />
            {t('faq.eyebrow')}
          </span>
          <h2 className="section-title">{t('faq.title')}</h2>
          <p className="section-description">{t('faq.subtitle')}</p>
        </div>

        <div className="faq-list">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={20}
                    color="var(--color-navy-dark)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                      flexShrink: 0,
                      marginLeft: '1rem'
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
