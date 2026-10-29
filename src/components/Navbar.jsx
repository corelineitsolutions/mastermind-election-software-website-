import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

export const Navbar = ({ onOpenDemo }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Main taskbar links matching exact website architecture
  const navLinks = [
    { to: '/', label: t('nav.home') || 'Home' },
    { to: '/about', label: t('nav.about') || 'About Us' },
    { to: '/election-software', label: language === 'mr' ? 'निवडणूक सॉफ्टवेअर' : language === 'hi' ? 'चुनाव सॉफ्टवेयर' : 'Election Software' },
    { to: '/services', label: language === 'mr' ? 'आमच्या सेवा' : language === 'hi' ? 'हमारी सेवाएं' : 'Our Services' },
    { to: '/elections', label: language === 'mr' ? 'निवडणुका' : language === 'hi' ? 'चुनाव' : 'Elections' },
    { to: '/contact', label: t('nav.contact') || 'Contact' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo-wrap" aria-label="Mastermind Media Homepage">
            <img
              src="/images/logo.png"
              alt="Mastermind Media | Election Management Software"
              className="brand-logo-img"
              width="170"
              height="44"
            />
          </Link>

          {/* Desktop Navigation Links (Single Line, Perfectly Centered) */}
          <nav className="nav-menu-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions (Language Switcher & Demo CTA) */}
          <div className="header-actions">
            {/* Language Switcher */}
            <div className="lang-switcher" aria-label="Language Switcher">
              <button
                type="button"
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
                onClick={() => setLanguage('hi')}
                title="हिंदी में देखें"
              >
                हिं
              </button>
              <button
                type="button"
                className={`lang-btn ${language === 'mr' ? 'active' : ''}`}
                onClick={() => setLanguage('mr')}
                title="मराठीत पहा"
              >
                म
              </button>
            </div>

            {/* Book Free Demo CTA Button */}
            <button
              onClick={onOpenDemo}
              className="btn btn-primary btn-navbar-cta"
              type="button"
            >
              <span>{t('nav.bookDemo')}</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid #E5E7EB' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#6B7280' }}>
              Language / भाषा:
            </span>
            <div className="lang-switcher">
              <button
                type="button"
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
                onClick={() => setLanguage('hi')}
              >
                हिन्दी
              </button>
              <button
                type="button"
                className={`lang-btn ${language === 'mr' ? 'active' : ''}`}
                onClick={() => setLanguage('mr')}
              >
                मराठी
              </button>
            </div>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} color={isActive ? 'var(--color-orange-red)' : '#9CA3AF'} />
                </Link>
              );
            })}
          </nav>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="btn btn-orange"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>{t('nav.bookDemo')}</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="tel:+919604001344"
              className="btn btn-outline-white"
              style={{ width: '100%', border: '1px solid #E5E7EB', justifyContent: 'center' }}
            >
              <Phone size={15} />
              <span>Call +91-9604001344</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
