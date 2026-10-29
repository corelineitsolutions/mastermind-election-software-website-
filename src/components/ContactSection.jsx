import React from 'react';
import { DemoForm } from './DemoForm';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  ExternalLink
} from 'lucide-react';

export const ContactSection = () => {
  const { language } = useLanguage();

  const content = {
    mr: {
      eyebrow: "आमच्या तज्ज्ञांशी संपर्क साधा",
      title: "आपल्या पुढील निवडणूक मोहिमेचे नियोजन करूया",
      desc: "निवडणूक सॉफ्टवेअर डेमो, मतदार डेटाबेस आणि प्रचार व्यवस्थापनासाठी मास्टरमाइंड मीडियाशी संपर्क साधा.",
      call1: "मुख्य हेल्पलाइन (कॉल करा)",
      call2: "प्रचार सपोर्ट (कॉल करा)",
      waLabel: "थेट व्हॉट्सॲप डेस्क",
      hqTitle: "कॉर्पोरेट मुख्यालय",
      address: "मास्टरमाइंड मीडिया\n४०४, चौथा मजला, बी विंग, सिटी व्हिस्टा,\nखराडी, पुणे – ४११०१४, महाराष्ट्र.",
      mapsLink: "गुगल मॅप्सवर उघडा",
      hoursTitle: "कामकाज व सपोर्ट वेळ",
      days1: "सोमवार – शनिवार:",
      hours1: "सकाळी १०:०० – संध्याकाळी ७:३० IST",
      days2: "निवडणूक वॉर रूम सपोर्ट:",
      hours2: "२४/७ प्राधान्य हेल्पलाइन",
      emailLabel: "अधिकृत ईमेल:",
      formTitle: "मोफत सल्लामसलत बुक करा",
      formSubtitle: "खालील माहिती भरा. आमचे तांत्रिक व प्रचार संचालक आपल्याशी तत्काळ संपर्क साधतील."
    },
    hi: {
      eyebrow: "हमारे विशेषज्ञों से संपर्क करें",
      title: "अपने अगले चुनाव अभियान की योजना बनाएं",
      desc: "चुनाव सॉफ्टवेयर डेमो, वोटर डेटाबेस और प्रचार प्रबंधन के लिए मास्टरमाइंड मीडिया से संपर्क करें।",
      call1: "मुख्य हेल्पलाइन (कॉल करें)",
      call2: "प्रचार सपोर्ट (कॉल करें)",
      waLabel: "सीधा व्हाट्सएप डेस्क",
      hqTitle: "कॉर्पोरेट मुख्यालय",
      address: "मास्टरमाइंड मीडिया\n404, चौथी मंजिल, बी विंग, सिटी विस्टा,\nखराड़ी, पुणे – 411014, महाराष्ट्र।",
      mapsLink: "गूगल मैप्स पर देखें",
      hoursTitle: "कार्य एवं सहायता समय",
      days1: "सोमवार – शनिवार:",
      hours1: "प्रातः 10:00 – सायं 7:30 IST",
      days2: "सक्रिय चुनाव वॉर रूम:",
      hours2: "24/7 प्राथमिकता हेल्पलाइन",
      emailLabel: "आधिकारिक ईमेल:",
      formTitle: "परामर्श के लिए अनुरोध करें",
      formSubtitle: "नीचे विवरण भरें। हमारे तकनीकी एवं प्रचार निदेशक आपसे शीघ्र संपर्क करेंगे।"
    },
    en: {
      eyebrow: "CONNECT WITH OUR SPECIALISTS",
      title: "Let's Plan Your Next Campaign",
      desc: "Connect with Mastermind Media for election software demonstrations, voter database solutions, and campaign management enquiries.",
      call1: "Primary Helpline (Click to Call)",
      call2: "Campaign Support (Click to Call)",
      waLabel: "Direct WhatsApp Desk",
      hqTitle: "Corporate Headquarters",
      address: "Mastermind Media\n404, 4th Floor, B Wing, City Vista,\nKharadi, Pune – 411014, Maharashtra.",
      mapsLink: "Open in Google Maps",
      hoursTitle: "Business & Support Hours",
      days1: "Monday – Saturday:",
      hours1: "10:00 AM – 7:30 PM IST",
      days2: "Active Campaign / War Room:",
      hours2: "24/7 Priority Helpline",
      emailLabel: "Official Email:",
      formTitle: "Request a Consultation",
      formSubtitle: "Fill out the details below. Our technical and campaign directors will get in touch promptly."
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="contact-lead-section section-padding" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {t.eyebrow}
          </span>
          <h2 className="section-title">
            {t.title}
          </h2>
          <p className="section-description">
            {t.desc}
          </p>
        </div>

        {/* Two-Column Layout on Desktop */}
        <div className="contact-two-column-grid">
          {/* Left Column: Office Details, Click-to-call, Location Link, Business Hours */}
          <div className="contact-info-panel">
            {/* Quick Calling Cards */}
            <div className="contact-quick-actions">
              <a 
                href="tel:+919604001344"
                className="contact-action-card call-card"
                title="Call 9604001344"
              >
                <div className="contact-action-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="action-sublabel">{t.call1}</div>
                  <div className="action-main-val">9604001344</div>
                </div>
              </a>

              <a 
                href="tel:+919657301344"
                className="contact-action-card call-card"
                title="Call 9657301344"
              >
                <div className="contact-action-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="action-sublabel">{t.call2}</div>
                  <div className="action-main-val">9657301344</div>
                </div>
              </a>

              <a 
                href="https://wa.me/919604001344?text=Hello%20Mastermind%20Media%20Team%2C%20I%20would%20like%20to%20discuss%20election%20software%20and%20campaign%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-card whatsapp-card"
                title="Chat on WhatsApp"
              >
                <div className="contact-action-icon whatsapp-bg">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="action-sublabel">{t.waLabel}</div>
                  <div className="action-main-val">+91 96040 01344</div>
                </div>
              </a>
            </div>

            {/* Office Address Card */}
            <div className="contact-detail-card">
              <div className="detail-card-header">
                <MapPin size={22} className="text-royal" />
                <h3 className="detail-card-title">{t.hqTitle}</h3>
              </div>
              <p className="detail-card-address" style={{ whiteSpace: 'pre-line' }}>
                {t.address}
              </p>

              <a 
                href="https://maps.google.com/?q=City+Vista+Kharadi+Pune+411014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="location-map-link"
              >
                <span>{t.mapsLink}</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Business Hours & Support */}
            <div className="contact-detail-card">
              <div className="detail-card-header">
                <Clock size={20} className="text-royal" />
                <h3 className="detail-card-title">{t.hoursTitle}</h3>
              </div>
              <ul className="hours-bullet-list">
                <li>
                  <span className="days">{t.days1}</span>
                  <span className="hours">{t.hours1}</span>
                </li>
                <li>
                  <span className="days">{t.days2}</span>
                  <span className="hours highlight">{t.hours2}</span>
                </li>
                <li>
                  <span className="days">{t.emailLabel}</span>
                  <a href="mailto:contact@mastermindmedias.com" className="email-link">contact@mastermindmedias.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Lead Enquiry Form */}
          <div className="contact-form-panel">
            <div className="form-panel-header">
              <h3 className="form-panel-title">{t.formTitle}</h3>
              <p className="form-panel-subtitle">
                {t.formSubtitle}
              </p>
            </div>

            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
};
