import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Database, 
  Search, 
  Users, 
  SlidersHorizontal, 
  ClipboardCheck, 
  FileSpreadsheet, 
  Smartphone, 
  LineChart, 
  FileUp, 
  Languages, 
  ShieldCheck, 
  Headphones,
  ArrowRight,
  Layers
} from 'lucide-react';

export const FeaturesGrid = ({ onOpenDemo }) => {
  const { t } = useLanguage();

  const iconMap = {
    'voter-db': Database,
    'smart-search': Search,
    'booth-management': Users,
    'advanced-filters': SlidersHorizontal,
    'survey-mgmt': ClipboardCheck,
    'exports': FileSpreadsheet,
    'mobile-access': Smartphone,
    'analytics': LineChart,
    'data-import': FileUp,
    'multilingual': Languages,
    'team-workflows': ShieldCheck,
    'customer-support': Headphones
  };

  const featureItems = t('features.items');

  return (
    <section className="section-padding" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Layers size={14} />
            {t('features.eyebrow')}
          </span>
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-description">{t('features.subtitle')}</p>
        </div>

        <div className="features-grid">
          {featureItems.map((item) => {
            const Icon = iconMap[item.id] || Database;
            return (
              <div key={item.id} className="feature-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="feature-icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: '#6B7280', 
                    background: '#F3F4F6', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '9999px' 
                  }}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.desc}</p>

                <div className="feature-card-footer">
                  <button
                    onClick={onOpenDemo}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      fontWeight: 700, 
                      color: 'var(--color-orange-red)',
                      fontSize: '0.875rem'
                    }}
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
