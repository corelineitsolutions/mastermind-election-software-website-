import React from 'react';

/**
 * HeroBackground Component
 * Uses the official 1920x1080 background image (ASSETS/back 01.jpg.jpeg)
 * showing Indian voters in queue at a polling booth blended with the
 * warm orange-red faceted geometry.
 */
export const HeroBackground = () => {
  return (
    <div className="hero-background-root" aria-hidden="true">
      <img
        src="/images/hero-back.jpg"
        alt="Election Polling Booth Background"
        className="hero-bg-img"
        width="1920"
        height="1080"
        loading="eager"
        decoding="sync"
      />
      {/* Precision legibility vignette on text side so white typography remains crystal-clear */}
      <div className="hero-bg-vignette" />
    </div>
  );
};
