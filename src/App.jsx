import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { WhatsAppButton } from './components/WhatsAppButton';

// Architecture Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SoftwarePage } from './pages/SoftwarePage';
import { VoterDatabasePage } from './pages/VoterDatabasePage';
import { ServicesPage } from './pages/ServicesPage';
import { ElectionsPage } from './pages/ElectionsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

// Additional / Resources Pages
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogPostPage } from './pages/BlogPostPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  return (
    <>
      <ScrollToTop />
      
      {/* Sticky Responsive Header */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Multi-Page Route Views */}
      <div style={{ flex: 1 }}>
        <Routes>
          {/* 1. Home */}
          <Route path="/" element={<HomePage onOpenDemo={handleOpenDemo} />} />

          {/* 2. About Us */}
          <Route path="/about" element={<AboutPage onOpenDemo={handleOpenDemo} />} />

          {/* 3. Election Management Software (with /features alias) */}
          <Route path="/election-software" element={<SoftwarePage onOpenDemo={handleOpenDemo} />} />
          <Route path="/features" element={<SoftwarePage onOpenDemo={handleOpenDemo} />} />

          {/* 4. Voter Database & Voter Slip Management */}
          <Route path="/voter-database" element={<VoterDatabasePage onOpenDemo={handleOpenDemo} />} />

          {/* 5. Political Campaign Services (with /solutions alias) */}
          <Route path="/services" element={<ServicesPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/solutions" element={<ServicesPage onOpenDemo={handleOpenDemo} />} />

          {/* 6. Elections (13 Supported Tiers) */}
          <Route path="/elections" element={<ElectionsPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/team" element={<ElectionsPage onOpenDemo={handleOpenDemo} />} />

          {/* 7. Contact Us */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 8. Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          {/* 9. Terms and Conditions */}
          <Route path="/terms" element={<TermsPage />} />

          {/* Knowledge & Articles */}
          <Route path="/resources" element={<ResourcesPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/blog" element={<ResourcesPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/blog/:slug" element={<BlogPostPage onOpenDemo={handleOpenDemo} />} />

          {/* Fallback Catch-All to Home */}
          <Route path="*" element={<HomePage onOpenDemo={handleOpenDemo} />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Floating Fixed WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Demo Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
      />
    </>
  );
}
