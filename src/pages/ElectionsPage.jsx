import React from 'react';
import { ElectionsSection } from '../components/ElectionsSection';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users, 
  MapPin, 
  Calendar,
  Layers,
  Vote
} from 'lucide-react';

export const ElectionsPage = ({ onOpenDemo }) => {
  const { language } = useLanguage();

  return (
    <main>
      {/* Page Hero Header */}
      <section className="section-padding" style={{ 
        background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy-deep) 100%)', 
        color: '#FFFFFF', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Soft background glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(ellipse, rgba(255, 106, 0, 0.25) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '920px', position: 'relative', zIndex: 1 }}>
          <div className="hero-eyebrow-badge" style={{ margin: '0 auto 1.25rem auto' }}>
            <span className="badge-dot" />
            <span className="badge-text">
              {language === 'mr' 
                ? '१३+ निवडणूक प्रकारांसाठी विशेष तंत्रज्ञान' 
                : language === 'hi'
                ? '13+ चुनाव प्रकारों हेतु विशिष्ट तकनीक'
                : '13+ ELECTION TYPES SUPPORTED'}
            </span>
          </div>

          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', 
            fontWeight: 900, 
            lineHeight: 1.15, 
            marginBottom: '1.25rem',
            color: '#FFFFFF'
          }}>
            Election Management Software for Every Election Level
          </h1>

          <p style={{ 
            fontSize: '1.125rem', 
            color: '#F1F5F9', 
            lineHeight: 1.65, 
            maxWidth: '780px', 
            margin: '0 auto 2rem auto' 
          }}>
            Mastermind Media provides specialized, policy-compliant voter database management, booth karyakarta mobile applications, and war room intelligence tailored for Parliamentary, Assembly, Municipal Corporation, Zilla Parishad, Gram Panchayat, and Legislative Council elections.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              onClick={onOpenDemo} 
              className="btn btn-primary btn-lg"
              style={{
                background: 'linear-gradient(135deg, #FF6A00 0%, #EA580C 100%)',
                color: '#FFFFFF',
                boxShadow: '0 4px 18px rgba(234, 88, 12, 0.45)'
              }}
            >
              <span>Book Election Software Demo</span>
              <ArrowRight size={18} />
            </button>
            <Link 
              to="/contact" 
              className="btn btn-outline-white btn-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                border: '1.5px solid rgba(255, 255, 255, 0.4)'
              }}
            >
              <span>Consult with Pune War Room</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 13 Elections Showcase Section */}
      <ElectionsSection onOpenDemo={onOpenDemo} />
    </main>
  );
};
