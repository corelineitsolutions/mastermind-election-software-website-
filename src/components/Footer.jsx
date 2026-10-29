import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, ShieldCheck, Smartphone, ArrowRight } from 'lucide-react';

export const Footer = ({ onOpenDemo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Company Overview & Badges */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link" aria-label="Mastermind Media Home">
              <img
                src="/images/logo.png"
                alt="Mastermind Media Logo"
                className="footer-logo-img"
              />
            </Link>
            
            <p className="footer-brand-desc">
              Election Management Software & Integrated Campaign Solutions. Empowering political leaders, candidates, and campaign teams with data precision.
            </p>

            <div className="footer-credentials-tag">
              <ShieldCheck size={14} className="text-gold" />
              <span>500+ Political Leaders Served Across Maharashtra</span>
            </div>

            <div className="footer-app-links-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.corelineitsolutions.master_mind"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-app-btn"
                title="Google Play Android App"
              >
                <Smartphone size={14} />
                <span>Google Play App</span>
              </a>

              <a
                href="https://wa.me/919604001344?text=Hello%20Mastermind%20Media%20Team%2C%20please%20share%20the%20iOS%20and%20web%20app%20access."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-app-btn"
                title="Apple App Store iOS App"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.92.04-2.07.63-2.73 1.4-.58.67-1.1 1.76-.96 2.83 1.03.08 2.12-.53 2.75-1.29z"/>
                </svg>
                <span>App Store & Web</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/election-software" className="footer-link">Election Software</Link></li>
              <li><Link to="/services" className="footer-link">Our Services</Link></li>
              <li><Link to="/elections" className="footer-link">Elections (13 Types)</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li>
                <button 
                  type="button"
                  onClick={onOpenDemo}
                  className="footer-link-highlight"
                >
                  Book a Free Demo →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-link-list">
              <li><Link to="/voter-database" className="footer-link">Voter Database Software</Link></li>
              <li><Link to="/voter-database#slip-management" className="footer-link">Voter Slip Management</Link></li>
              <li><Link to="/services#war-room" className="footer-link">Social Media War Room</Link></li>
              <li><Link to="/services#digital-campaigns" className="footer-link">Digital Campaigning</Link></li>
              <li><Link to="/services#communications" className="footer-link">Bulk SMS & Voice Calls</Link></li>
              <li><Link to="/services#documentaries" className="footer-link">Political Documentaries</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="footer-col-title">Contact Information</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="text-royal flex-shrink-0" style={{ marginTop: '2px' }} />
              <span>404, 4th Floor, B Wing, City Vista, Kharadi, Pune – 411014, Maharashtra.</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={16} className="text-royal flex-shrink-0" style={{ marginTop: '2px' }} />
              <div>
                <a href="tel:+919604001344" className="footer-phone-link">9604001344</a>
                <a href="tel:+919657301344" className="footer-phone-link">9657301344</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={16} className="text-royal flex-shrink-0" style={{ marginTop: '2px' }} />
              <a href="mailto:contact@mastermindmedias.com" className="footer-email-link">
                contact@mastermindmedias.com
              </a>
            </div>

            <div className="footer-whatsapp-action">
              <a
                href="https://wa.me/919604001344?text=Hello%20Mastermind%20Media%20Team%2C%20I%20would%20like%20to%20schedule%20an%20election%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-wa-btn"
              >
                <MessageCircle size={15} />
                <span>WhatsApp War Room Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="footer-bottom">
          <div className="footer-copyright-text">
            © {currentYear} Mastermind Media. All rights reserved. Your Election, Our Expertise.
          </div>

          <div className="footer-legal-links">
            <Link to="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/terms" className="footer-legal-link">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
