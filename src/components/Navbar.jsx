import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Menu, X, ArrowRight, Phone, MessageCircle, ChevronDown, Check } from 'lucide-react';

export const Navbar = ({ onOpenDemo }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const langDropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile drawer and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsLangOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
  ];

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

            {/* Language Dropdown Tab */}
            <div className="nav-dropdown-wrapper" ref={langDropdownRef}>
              <button
                type="button"
                className={`nav-dropdown-btn ${isLangOpen ? 'active' : ''}`}
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-expanded={isLangOpen}
                aria-haspopup="true"
              >
                <span>Language</span>
                <ChevronDown size={13} className={`nav-dropdown-chevron ${isLangOpen ? 'rotate' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="nav-dropdown-menu" role="menu">
                  {languages.map((lang) => {
                    const isCurrent = language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        className={`nav-dropdown-item ${isCurrent ? 'active' : ''}`}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        role="menuitem"
                      >
                        <div className="nav-dropdown-item-text">
                          <span className="lang-name-native">{lang.native}</span>
                          <span className="lang-name-sub">({lang.label})</span>
                        </div>
                        {isCurrent && <Check size={14} className="lang-check-icon" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Header Actions (Demo CTA & Mobile Toggle) */}
          <div className="header-actions">
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

            {/* Mobile Language Tab with Accordion */}
            <div className="mobile-lang-accordion" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.4rem', marginTop: '0.2rem' }}>
              <button
                type="button"
                className={`mobile-nav-link ${mobileLangOpen ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
              >
                <span>Language</span>
                <ChevronDown size={16} style={{ transform: mobileLangOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', color: '#64748B' }} />
              </button>
              {mobileLangOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', padding: '0.35rem 0.5rem 0.5rem 0.5rem' }}>
                  {languages.map((lang) => {
                    const isCurrent = language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setLanguage(lang.code);
                          setMobileMenuOpen(false);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.55rem 0.85rem',
                          borderRadius: '8px',
                          border: 'none',
                          background: isCurrent ? '#FFF7ED' : '#F8FAFC',
                          color: isCurrent ? '#EA580C' : '#334155',
                          fontWeight: isCurrent ? 700 : 500,
                          fontSize: '0.875rem',
                          cursor: 'pointer'
                        }}
                      >
                        <span>{lang.native} ({lang.label})</span>
                        {isCurrent && <Check size={15} color="#EA580C" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
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
              href="https://wa.me/919604001344?text=Hello%20Mastermind%20Media%20Team%2C%20I%20would%20like%20to%20discuss%20election%20software%20and%20campaign%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
              style={{ width: '100%', border: '1px solid #25D366', color: '#128C7E', justifyContent: 'center', background: '#F0FDF4' }}
            >
              <MessageCircle size={16} color="#25D366" />
              <span>WhatsApp: +91 96040 01344</span>
            </a>

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
