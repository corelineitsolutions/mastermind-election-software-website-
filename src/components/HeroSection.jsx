import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Smartphone, Users } from 'lucide-react';

export const HeroSection = ({ onOpenDemo }) => {
  const scrollToElections = (e) => {
    e.preventDefault();
    const el = document.getElementById('elections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section-premium" id="hero">
      {/* Background Image Layer (ASSETS/back 01.jpg.jpeg) */}
      <div className="hero-background-layer" aria-hidden="true">
        <img
          src="/images/hero-bg.jpg"
          alt="Election Campaign Background"
          className="hero-bg-photo"
          width="1920"
          height="1080"
          loading="eager"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-container-relative">
        <div className="hero-headline-centered">
          {/* Eyebrow Badge */}
          <div className="hero-glass-badge">
            <Sparkles size={14} className="hero-badge-icon" />
            <span>Maharashtra & India's Premier Election Software</span>
          </div>

          {/* Main Title (white, centered, ~30% from top) */}
          <h1 className="hero-main-heading-white">
            Master Mind Election Software
          </h1>

          {/* Subtitle */}
          <p className="hero-subheadline-white">
            Smarter Campaigns Start with Smarter Management.
          </p>

          {/* Professional Action Buttons */}
          <div className="hero-actions-group">
            <button
              type="button"
              className="btn btn-primary btn-lg hero-cta-primary"
              onClick={onOpenDemo}
            >
              <span>Book a Free Demo</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="#elections"
              onClick={scrollToElections}
              className="btn hero-cta-glass btn-lg"
            >
              <span>Explore 11+ Elections</span>
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="hero-trust-strip">
            <div className="hero-trust-chip">
              <Users size={16} className="hero-chip-icon" />
              <span><strong>500+</strong> Leaders Served</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-chip">
              <Smartphone size={16} className="hero-chip-icon" />
              <span><strong>100% Offline</strong> Karyakarta App</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-chip">
              <ShieldCheck size={16} className="hero-chip-icon" />
              <span><strong>ECI Compliant</strong> Voter Slips</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
