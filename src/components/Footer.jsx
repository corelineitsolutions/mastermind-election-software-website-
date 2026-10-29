import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck, Smartphone } from 'lucide-react';

export const Footer = ({ onOpenDemo }) => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    mr: {
      desc: "निवडणूक व्यवस्थापन सॉफ्टवेअर आणि एकात्मिक प्रचार सेवा. राजकीय नेते, उमेदवार आणि निवडणूक टीमना अचूक तंत्रज्ञानासह सक्षम बनवणे.",
      credentials: "महाराष्ट्रातील ५००+ राजकीय नेत्यांचा विश्वास",
      colLinks: "महत्त्वाच्या लिंक्स",
      colServices: "आमच्या सेवा",
      colContact: "संपर्क माहिती",
      navHome: "मुख्यपृष्ठ",
      navAbout: "आमच्याबद्दल",
      navSoftware: "निवडणूक सॉफ्टवेअर",
      navServices: "आमच्या सेवा",
      navElections: "निवडणुका (१३ प्रकार)",
      navContact: "संपर्क साधा",
      demoBtn: "मोफत डेमो बुक करा →",
      srvVoterDb: "मतदार डेटाबेस सॉफ्टवेअर",
      srvVoterSlip: "मतदार स्लिप व्यवस्थापन",
      srvWarRoom: "सोशल मीडिया वॉर रूम",
      srvDigital: "डिजिटल प्रचार मोहीम",
      srvBulkSms: "बल्क एसएमएस व व्हॉइस कॉल्स",
      srvDocs: "राजकीय माहितीपट",
      waBtn: "व्हॉट्सॲप वॉर रूम डेस्क",
      copyright: `© ${currentYear} मास्टरमाइंड मीडिया. सर्व हक्क राखीव. तुमची निवडणूक, आमचा अनुभव.`,
      privacy: "गोपनीयता धोरण (Privacy Policy)",
      terms: "नियम व अटी (Terms)"
    },
    hi: {
      desc: "चुनाव प्रबंधन सॉफ्टवेयर एवं एकीकृत प्रचार समाधान। राजनीतिक नेताओं, उम्मीदवारों और चुनाव टीमों को सटीक तकनीक से सशक्त बनाना।",
      credentials: "महाराष्ट्र के 500+ राजनेताओं का विश्वास",
      colLinks: "महत्वपूर्ण लिंक्स",
      colServices: "हमारी सेवाएं",
      colContact: "संपर्क जानकारी",
      navHome: "होम",
      navAbout: "हमारे बारे में",
      navSoftware: "चुनाव सॉफ्टवेयर",
      navServices: "हमारी सेवाएं",
      navElections: "चुनाव (13 प्रकार)",
      navContact: "संपर्क करें",
      demoBtn: "फ्री डेमो बुक करें →",
      srvVoterDb: "वोटर डेटाबेस सॉफ्टवेयर",
      srvVoterSlip: "मतदाता पर्ची प्रबंधन",
      srvWarRoom: "सोशल मीडिया वॉर रूम",
      srvDigital: "डिजिटल प्रचार अभियान",
      srvBulkSms: "बल्क एसएमएस एवं वॉयस कॉल्स",
      srvDocs: "राजनीतिक प्रचार वृत्तचित्र",
      waBtn: "व्हाट्सएप वॉर रूम डेस्क",
      copyright: `© ${currentYear} मास्टरमाइंड मीडिया. सर्वाधिकार सुरक्षित। आपका चुनाव, हमारा अनुभव।`,
      privacy: "गोपनीयता नीति (Privacy Policy)",
      terms: "नियम एवं शर्तें (Terms)"
    },
    en: {
      desc: "Election Management Software & Integrated Campaign Solutions. Empowering political leaders, candidates, and campaign teams with data precision.",
      credentials: "500+ Political Leaders Served Across Maharashtra",
      colLinks: "Quick Links",
      colServices: "Our Services",
      colContact: "Contact Information",
      navHome: "Home",
      navAbout: "About Us",
      navSoftware: "Election Software",
      navServices: "Our Services",
      navElections: "Elections (13 Types)",
      navContact: "Contact Us",
      demoBtn: "Book a Free Demo →",
      srvVoterDb: "Voter Database Software",
      srvVoterSlip: "Voter Slip Management",
      srvWarRoom: "Social Media War Room",
      srvDigital: "Digital Campaigning",
      srvBulkSms: "Bulk SMS & Voice Calls",
      srvDocs: "Political Documentaries",
      waBtn: "WhatsApp War Room Desk",
      copyright: `© ${currentYear} Mastermind Media. All rights reserved. Your Election, Our Expertise.`,
      privacy: "Privacy Policy",
      terms: "Terms and Conditions"
    }
  };

  const t = content[language] || content.en;

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
              {t.desc}
            </p>

            <div className="footer-credentials-tag">
              <ShieldCheck size={14} className="text-gold" />
              <span>{t.credentials}</span>
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
            <h4 className="footer-col-title">{t.colLinks}</h4>
            <ul className="footer-link-list">
              <li><Link to="/" className="footer-link">{t.navHome}</Link></li>
              <li><Link to="/about" className="footer-link">{t.navAbout}</Link></li>
              <li><Link to="/election-software" className="footer-link">{t.navSoftware}</Link></li>
              <li><Link to="/services" className="footer-link">{t.navServices}</Link></li>
              <li><Link to="/elections" className="footer-link">{t.navElections}</Link></li>
              <li><Link to="/contact" className="footer-link">{t.navContact}</Link></li>
              <li>
                <button 
                  type="button"
                  onClick={onOpenDemo}
                  className="footer-link-highlight"
                >
                  {t.demoBtn}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="footer-col-title">{t.colServices}</h4>
            <ul className="footer-link-list">
              <li><Link to="/voter-database" className="footer-link">{t.srvVoterDb}</Link></li>
              <li><Link to="/voter-database#slip-management" className="footer-link">{t.srvVoterSlip}</Link></li>
              <li><Link to="/services" className="footer-link">{t.srvWarRoom}</Link></li>
              <li><Link to="/services" className="footer-link">{t.srvDigital}</Link></li>
              <li><Link to="/services" className="footer-link">{t.srvBulkSms}</Link></li>
              <li><Link to="/services" className="footer-link">{t.srvDocs}</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="footer-col-title">{t.colContact}</h4>
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
                <span>{t.waBtn}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="footer-bottom">
          <div className="footer-copyright-text">
            {t.copyright}
          </div>

          <div className="footer-legal-links">
            <Link to="/privacy-policy" className="footer-legal-link">{t.privacy}</Link>
            <span className="separator">•</span>
            <Link to="/terms" className="footer-legal-link">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
