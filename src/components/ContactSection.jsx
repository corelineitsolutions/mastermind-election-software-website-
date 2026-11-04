import React from 'react';
import { DemoForm } from './DemoForm';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const ContactSection = () => {
  const { language } = useLanguage();

  const content = {
    mr: {
      eyebrow: "आमच्या तज्ज्ञांशी संपर्क साधा",
      title: "आपल्या पुढील निवडणूक मोहिमेचे नियोजन करूया",
      desc: "निवडणूक सॉफ्टवेअर डेमो, मतदार डेटाबेस आणि प्रचार व्यवस्थापनासाठी आमच्याशी थेट संपर्क साधा.",
      waTitle: "व्हॉट्सॲप वॉर रूम डेस्क",
      waSub: "तत्काळ उत्तर व थेट डेमो ॲक्सेस",
      waAction: "व्हॉट्सॲपवर चॅट करा",
      emailTitle: "अधिकृत ईमेल सपोर्ट",
      emailSub: "औपचारिक प्रस्ताव व चौकशीसाठी",
      emailAction: "ईमेल पाठवा",
      phoneTitle: "थेट संपर्क क्रमांक",
      phoneSub: "सोमवार ते शनिवार: सकाळी १०:०० – सायं ७:३०",
      phoneAction: "कॉल करा",
      formTitle: "मोफत सल्लामसलत बुक करा",
      formSubtitle: "खालील माहिती भरा. ही विनंती थेट आमच्या व्हॉट्सॲप नंबरवर पाठवली जाईल."
    },
    hi: {
      eyebrow: "हमारे विशेषज्ञों से संपर्क करें",
      title: "अपने अगले चुनाव अभियान की योजना बनाएं",
      desc: "चुनाव सॉफ्टवेयर डेमो, वोटर डेटाबेस और प्रचार प्रबंधन के लिए हमसे सीधा संपर्क करें।",
      waTitle: "व्हाट्सएप वॉर रूम डेस्क",
      waSub: "त्वरित उत्तर एवं तत्काल डेमो एक्सेस",
      waAction: "व्हाट्सएप पर चैट करें",
      emailTitle: "आधिकारिक ईमेल सपोर्ट",
      emailSub: "औपचारिक प्रस्ताव एवं पूछताछ हेतु",
      emailAction: "ईमेल भेजें",
      phoneTitle: "सीधा संपर्क नंबर",
      phoneSub: "सोमवार से शनिवार: प्रातः 10:00 – सायं 7:30",
      phoneAction: "कॉल करें",
      formTitle: "मुफ्त परामर्श बुक करें",
      formSubtitle: "नीचे विवरण भरें। यह अनुरोध सीधे हमारे व्हाट्सएप नंबर पर भेजा जाएगा।"
    },
    en: {
      eyebrow: "CONNECT WITH OUR SPECIALISTS",
      title: "Let's Plan Your Next Campaign",
      desc: "Connect with Mastermind Media for election software demonstrations, voter database solutions, and campaign management enquiries.",
      waTitle: "WhatsApp War Room Desk",
      waSub: "Instant response for demo access & voter lists",
      waAction: "Chat on WhatsApp",
      emailTitle: "Official Email Support",
      emailSub: "For formal RFPs, proposals & enquiries",
      emailAction: "Send Email",
      phoneTitle: "Direct Contact Numbers",
      phoneSub: "Monday – Saturday: 10:00 AM – 7:30 PM IST",
      phoneAction: "Click to Call",
      formTitle: "Request a Consultation",
      formSubtitle: "Fill out the details below. This inquiry will be dispatched directly to our WhatsApp War Room."
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

        {/* Two-Column Layout */}
        <div className="contact-two-column-grid">
          {/* Left Column: Strictly WhatsApp, Email, and Contact Number */}
          <div className="contact-info-panel">
            <div className="contact-quick-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* 1. WhatsApp Option */}
              <a 
                href="https://wa.me/919604001344?text=Hello%20Mastermind%20Media%20Team%2C%20I%20would%20like%20to%20discuss%20election%20software%20and%20campaign%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-card whatsapp-card"
                title="Chat on WhatsApp (+91 96040 01344)"
                style={{ borderLeft: '4px solid #25D366' }}
              >
                <div className="contact-action-icon whatsapp-bg" style={{ background: '#ECFDF5', color: '#10B981' }}>
                  <MessageCircle size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="action-sublabel" style={{ fontWeight: 700, color: '#15803D' }}>{t.waTitle}</div>
                  <div className="action-main-val" style={{ fontSize: '1.25rem', fontWeight: 800 }}>+91 96040 01344</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.2rem' }}>{t.waSub}</div>
                </div>
                <ArrowRight size={18} style={{ color: '#10B981' }} />
              </a>

              {/* 2. Email Option */}
              <a 
                href="mailto:contact@mastermindmedias.com?subject=Election%20Software%20Consultation%20Enquiry"
                className="contact-action-card email-card"
                title="Send Email to contact@mastermindmedias.com"
                style={{ borderLeft: '4px solid var(--color-royal-blue)' }}
              >
                <div className="contact-action-icon" style={{ background: '#EFF6FF', color: 'var(--color-royal-blue)' }}>
                  <Mail size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="action-sublabel" style={{ fontWeight: 700, color: 'var(--color-royal-blue)' }}>{t.emailTitle}</div>
                  <div className="action-main-val" style={{ fontSize: '1.15rem', fontWeight: 800 }}>contact@mastermindmedias.com</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.2rem' }}>{t.emailSub}</div>
                </div>
                <ArrowRight size={18} style={{ color: 'var(--color-royal-blue)' }} />
              </a>

              {/* 3. Contact Numbers (Call Options) */}
              <div 
                className="contact-detail-card" 
                style={{ borderLeft: '4px solid var(--color-orange-red)', padding: '1.25rem' }}
              >
                <div className="detail-card-header" style={{ marginBottom: '0.75rem' }}>
                  <Phone size={22} className="text-orange" />
                  <h3 className="detail-card-title" style={{ fontSize: '1.1rem' }}>{t.phoneTitle}</h3>
                </div>
                <p style={{ fontSize: '0.825rem', color: '#64748B', marginBottom: '1rem' }}>
                  {t.phoneSub}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <a 
                    href="tel:+919604001344"
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'center', width: '100%', fontWeight: 700 }}
                  >
                    <Phone size={14} />
                    <span>9604001344</span>
                  </a>
                  <a 
                    href="tel:+919657301344"
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'center', width: '100%', fontWeight: 700 }}
                  >
                    <Phone size={14} />
                    <span>9657301344</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Confidentiality & Security Assurance */}
            <div className="contact-detail-card" style={{ marginTop: '1.25rem', background: '#F8FAFC' }}>
              <div className="detail-card-header" style={{ marginBottom: '0.5rem' }}>
                <ShieldCheck size={20} className="text-royal" />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: 'var(--color-navy-dark)' }}>
                  100% Confidential War Room Handling
                </h4>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                All consultations, electoral strategy discussions, and voter database inquiries are strictly protected under non-disclosure protocols.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Enquiry Form (Dispatches to WhatsApp) */}
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
