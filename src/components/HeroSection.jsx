import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  ArrowRight, 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  Sparkles,
  MapPin,
  Smartphone
} from 'lucide-react';

export const HeroSection = ({ onOpenDemo }) => {
  const { language } = useLanguage();

  return (
    <section className="hero-section-premium" id="hero">
      {/* Official 1920x1080 Polling Booth Background Image (back 01.jpg.jpeg) */}
      <div className="hero-background-layer" aria-hidden="true">
        <img
          src="/images/hero-bg.jpg"
          alt="Indian Polling Booth and Election Campaign Background"
          className="hero-bg-photo"
          width="1920"
          height="1080"
          loading="eager"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-container-relative">
        <div className="hero-two-column-grid">
          {/* Left Column: Headlines, Supporting Text, 3 Action CTAs, Trust Strip */}
          <div className="hero-content-col">
            <div className="hero-eyebrow-badge">
              <span className="badge-dot" />
              <span className="badge-text">
                {language === 'mr' 
                  ? 'महाराष्ट्र व अखिल भारतीय निवडणूक तंत्रज्ञान' 
                  : language === 'hi'
                  ? 'महाराष्ट्र एवं अखिल भारतीय चुनाव प्रौद्योगिकी'
                  : 'Maharashtra & Pan-India Election Technology'}
              </span>
            </div>

            <h1 className="hero-primary-headline">
              <span className="hero-headline-line">Your Election,</span>{' '}
              <span className="headline-highlight hero-headline-line">Our Expertise.</span>
            </h1>

            <h2 className="hero-subheadline-text">
              Empowering Political Leaders with Smart Election Software & Advanced Campaign Management Solutions.
            </h2>

            <p className="hero-supporting-paragraph">
              Mastermind Media provides comprehensive election management software, voter database solutions, and digital campaign services to help political leaders manage their campaigns efficiently.
            </p>

            {/* 3 Primary Action Buttons */}
            <div className="hero-action-buttons-group">
              <Link 
                to="/services" 
                className="btn btn-primary hero-btn-compact hero-cta-primary"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={15} />
              </Link>

              <button 
                type="button"
                onClick={onOpenDemo}
                className="btn btn-outline-royal hero-btn-compact hero-cta-secondary"
              >
                <Calendar size={15} />
                <span>Book Consultation</span>
              </button>

              <Link 
                to="/contact" 
                className="btn btn-secondary hero-btn-compact hero-cta-tertiary"
              >
                <PhoneCall size={15} />
                <span>Contact Experts</span>
              </Link>
            </div>

            {/* Premium Trust Indicators Strip */}
            <div className="hero-trust-indicators-row">
              <div className="hero-trust-item">
                <Award size={15} className="trust-icon" />
                <span className="trust-text"><strong>500+</strong> Leaders Served</span>
              </div>
              <div className="trust-separator">•</div>
              <div className="hero-trust-item">
                <ShieldCheck size={15} className="trust-icon" />
                <span className="trust-text"><strong>100%</strong> Private Vaults</span>
              </div>
              <div className="trust-separator">•</div>
              <div className="hero-trust-item">
                <MapPin size={15} className="trust-icon" />
                <span className="trust-text">Headquartered in <strong>Pune</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Mastermind Media 5-in-1 Mobile App Suite Showcase */}
          <div className="hero-visual-col">
            <div className="hero-phones-showcase-wrap">
              {/* Soft ambient spotlight glow behind phones */}
              <div className="hero-phones-glow" aria-hidden="true" />

              {/* Floating Feature Badge 1: Top Right */}
              <div className="hero-float-tag hero-float-top">
                <div className="float-icon-bubble">
                  <Sparkles size={14} />
                </div>
                <div className="float-tag-content">
                  <span className="float-tag-title">Instant Voter Search</span>
                  <span className="float-tag-sub">English & Devanagari</span>
                </div>
              </div>

              {/* 5 Smartphones Showcase Image */}
              <img
                src="/images/hero-phones.png"
                alt="Mastermind Media 5-in-1 Election Mobile Software Suite"
                className="hero-phones-img"
                width="609"
                height="328"
                loading="eager"
              />

              {/* Floating Feature Badge 2: Bottom Left */}
              <div className="hero-float-tag hero-float-bottom">
                <div className="float-icon-bubble">
                  <Smartphone size={14} />
                </div>
                <div className="float-tag-content">
                  <span className="float-tag-title">Karyakarta Mobile App</span>
                  <span className="float-tag-sub">Android & iOS Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
