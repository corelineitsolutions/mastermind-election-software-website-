import React from 'react';

export const HeroSection = ({ onOpenDemo }) => {
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
        {/* Hero content ready for next layout */}
      </div>
    </section>
  );
};
