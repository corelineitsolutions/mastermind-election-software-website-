import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustSection } from '../components/TrustSection';
import { SpecialHighlightServices } from '../components/SpecialHighlightServices';
import { ElectionSoftwareSection } from '../components/ElectionSoftwareSection';
import { CampaignServicesSection } from '../components/CampaignServicesSection';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ElectionsSection } from '../components/ElectionsSection';
import { ContactSection } from '../components/ContactSection';
import { FAQSection } from '../components/FAQSection';

export const HomePage = ({ onOpenDemo }) => {
  return (
    <main>
      {/* 1. Hero Section (Section 5) */}
      <HeroSection onOpenDemo={onOpenDemo} />

      {/* 2. Trust and Credibility Strip (Section 6) */}
      <TrustSection />

      {/* 3. Special Highlight Services (Section 7) */}
      <SpecialHighlightServices onOpenDemo={onOpenDemo} />

      {/* 4. Election Management Software Section (Section 8) */}
      <ElectionSoftwareSection onOpenDemo={onOpenDemo} />

      {/* 5. Our Services — Integrated Political Campaign Solutions (Section 9) */}
      <CampaignServicesSection onOpenDemo={onOpenDemo} />

      {/* 6. About Us Section (Section 10) */}
      <AboutSection />

      {/* 7. Why Choose Mastermind Media? (Section 11) */}
      <WhyChooseUs onOpenDemo={onOpenDemo} />

      {/* 8. 13+ Supported Election Software Solutions */}
      <ElectionsSection onOpenDemo={onOpenDemo} />

      {/* 9. Contact Us and Lead Generation (Section 13) */}
      <ContactSection />

      {/* 10. Frequently Asked Questions Accordion */}
      <FAQSection />
    </main>
  );
};
