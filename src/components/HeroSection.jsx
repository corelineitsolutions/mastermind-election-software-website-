import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  ArrowRight, 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  Sparkles,
  MapPin,
  Smartphone
} from 'lucide-react';

const HERO_THEMES = [
  {
    id: 'orange',
    name: 'Orange Edition',
    src: '/images/hero-themes/orange.png',
    color: '#EA580C',
    alt: 'Mastermind Election Software Suite - Orange Edition'
  },
  {
    id: 'blue',
    name: 'Blue Edition',
    src: '/images/hero-themes/blue.png',
    color: '#2563EB',
    alt: 'Mastermind Election Software Suite - Blue Edition'
  },
  {
    id: 'green',
    name: 'Green Edition',
    src: '/images/hero-themes/green.png',
    color: '#16A34A',
    alt: 'Mastermind Election Software Suite - Green Edition'
  },
  {
    id: 'pink',
    name: 'Pink Edition',
    src: '/images/hero-themes/pink.png',
    color: '#DB2777',
    alt: 'Mastermind Election Software Suite - Pink Edition'
  }
];

export const HeroSection = ({ onOpenDemo }) => {
  const { language } = useLanguage();
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  // Auto-cycle images every 3 seconds: Orange -> Blue -> Green -> Pink -> Repeat
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentThemeIndex((prev) => (prev + 1) % HERO_THEMES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const content = {
    mr: {
      eyebrow: 'महाराष्ट्र व अखिल भारतीय निवडणूक तंत्रज्ञान',
      headlinePrefix: 'तुमची निवडणूक,',
      headlineHighlight: 'आमचा अनुभव.',
      subheadline: 'स्मार्ट निवडणूक सॉफ्टवेअर आणि प्रगत प्रचार व्यवस्थापनाद्वारे राजकीय नेतृत्वाला सशक्त बनवणे.',
      paragraph: 'मास्टरमाइंड मीडिया राजकीय नेत्यांना प्रचार मोहीम अधिक कार्यक्षमतेने चालवण्यासाठी सर्वसमावेशक निवडणूक व्यवस्थापन सॉफ्टवेअर, मतदार डेटाबेस आणि डिजिटल प्रचार सेवा पुरवते.',
      ctaServices: 'आमच्या सेवा पहा',
      ctaConsult: 'सल्लामसलत बुक करा',
      ctaContact: 'तज्ज्ञांशी संपर्क साधा',
      trustLeaders: '५००+ राजकीय नेत्यांचा विश्वास',
      trustVault: '१००% सुरक्षित खाजगी वॉल्ट',
      trustHq: 'मुख्यालय पुणे, महाराष्ट्र',
      float1Title: 'अतिजलद मतदार शोध',
      float1Sub: 'मराठी व इंग्रजी भाषा',
      float2Title: 'कार्यकर्ता मोबाईल ॲप',
      float2Sub: 'Android व iOS सपोर्ट'
    },
    hi: {
      eyebrow: 'महाराष्ट्र एवं अखिल भारतीय चुनाव प्रौद्योगिकी',
      headlinePrefix: 'आपका चुनाव,',
      headlineHighlight: 'हमारा अनुभव।',
      subheadline: 'स्मार्ट चुनाव सॉफ्टवेयर और उन्नत प्रचार प्रबंधन द्वारा राजनीतिक नेतृत्व को सशक्त बनाना।',
      paragraph: 'मास्टरमाइंड मीडिया राजनीतिक नेताओं को उनके प्रचार अभियान को सुव्यवस्थित करने के लिए व्यापक चुनाव प्रबंधन सॉफ्टवेयर, वोटर डेटाबेस और डिजिटल प्रचार सेवाएं प्रदान करता है।',
      ctaServices: 'हमारी सेवाएं देखें',
      ctaConsult: 'परामर्श बुक करें',
      ctaContact: 'विशेषज्ञों से संपर्क करें',
      trustLeaders: '500+ राजनेताओं का विश्वास',
      trustVault: '100% सुरक्षित निजी वॉल्ट',
      trustHq: 'मुख्यालय पुणे, महाराष्ट्र',
      float1Title: 'त्वरित मतदाता खोज',
      float1Sub: 'हिंदी एवं अंग्रेज़ी',
      float2Title: 'कार्यकर्ता मोबाइल ऐप',
      float2Sub: 'Android एवं iOS सपोर्ट'
    },
    en: {
      eyebrow: 'Maharashtra & Pan-India Election Technology',
      headlinePrefix: 'Your Election,',
      headlineHighlight: 'Our Expertise.',
      subheadline: 'Empowering Political Leaders with Smart Election Software & Advanced Campaign Management Solutions.',
      paragraph: 'Mastermind Media provides comprehensive election management software, voter database solutions, and digital campaign services to help political leaders manage their campaigns efficiently.',
      ctaServices: 'Explore Our Services',
      ctaConsult: 'Book Consultation',
      ctaContact: 'Contact Experts',
      trustLeaders: '500+ Leaders Served',
      trustVault: '100% Private Vaults',
      trustHq: 'Headquartered in Pune',
      float1Title: 'Instant Voter Search',
      float1Sub: 'English & Devanagari',
      float2Title: 'Karyakarta Mobile App',
      float2Sub: 'Android & iOS Ready'
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="hero-section-premium" id="hero">
      {/* Official 1920x1080 Polling Booth Background Image (back 01.jpg.jpeg) */}
      <div className="hero-background-layer" aria-hidden="true">
        <img
          src="/images/hero-bg.jpg"
          alt="Indian Polling Booth and Election Campaign Background"
          className="hero-bg-photo"
          width="1920"
          height="1080"
          loading="eager"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-container-relative">
        <div className="hero-two-column-grid">
          {/* Left Column: Headlines, Supporting Text, 3 Action CTAs, Trust Strip */}
          <div className="hero-content-col">
            <div className="hero-eyebrow-badge">
              <span className="badge-dot" />
              <span className="badge-text">{t.eyebrow}</span>
            </div>

            <h1 className="hero-primary-headline">
              <span className="hero-headline-line">{t.headlinePrefix}</span>{' '}
              <span className="headline-highlight hero-headline-line">{t.headlineHighlight}</span>
            </h1>

            <h2 className="hero-subheadline-text">
              {t.subheadline}
            </h2>

            <p className="hero-supporting-paragraph">
              {t.paragraph}
            </p>

            {/* 3 Primary Action Buttons */}
            <div className="hero-action-buttons-group">
              <Link 
                to="/services" 
                className="btn btn-primary hero-btn-compact hero-cta-primary"
              >
                <span>{t.ctaServices}</span>
                <ArrowRight size={15} />
              </Link>

              <button 
                type="button"
                onClick={onOpenDemo}
                className="btn btn-outline-royal hero-btn-compact hero-cta-secondary"
              >
                <Calendar size={15} />
                <span>{t.ctaConsult}</span>
              </button>

              <Link 
                to="/contact" 
                className="btn btn-secondary hero-btn-compact hero-cta-tertiary"
              >
                <PhoneCall size={15} />
                <span>{t.ctaContact}</span>
              </Link>
            </div>

            {/* Premium Trust Indicators Strip */}
            <div className="hero-trust-indicators-row">
              <div className="hero-trust-item">
                <Award size={15} className="trust-icon" />
                <span className="trust-text">{t.trustLeaders}</span>
              </div>
              <div className="trust-separator">•</div>
              <div className="hero-trust-item">
                <ShieldCheck size={15} className="trust-icon" />
                <span className="trust-text">{t.trustVault}</span>
              </div>
              <div className="trust-separator">•</div>
              <div className="hero-trust-item">
                <MapPin size={15} className="trust-icon" />
                <span className="trust-text">{t.trustHq}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mastermind Media Mobile App Suite Showcase */}
          <div className="hero-visual-col">
            <div className="hero-phones-showcase-wrap">
              {/* Soft ambient spotlight glow behind phones that adapts to active theme */}
              <div 
                className="hero-phones-glow" 
                style={{
                  background: `radial-gradient(ellipse at center, rgba(255, 255, 255, 0.22) 0%, ${HERO_THEMES[currentThemeIndex].color}40 48%, transparent 72%)`,
                  transition: 'background 0.8s ease'
                }}
                aria-hidden="true" 
              />

              {/* Floating Feature Badge 1: Top Right */}
              <div className="hero-float-tag hero-float-top">
                <div className="float-icon-bubble">
                  <Sparkles size={14} />
                </div>
                <div className="float-tag-content">
                  <span className="float-tag-title">{t.float1Title}</span>
                  <span className="float-tag-sub">{t.float1Sub}</span>
                </div>
              </div>

              {/* 4 Hero Theme Carousel (Orange -> Blue -> Green -> Pink, 3s auto-cycle) */}
              <div className="hero-carousel-stage">
                {HERO_THEMES.map((theme, idx) => (
                  <img
                    key={theme.id}
                    src={theme.src}
                    alt={theme.alt}
                    className={`hero-carousel-img ${idx === currentThemeIndex ? 'active' : ''}`}
                    width="471"
                    height="530"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>

              {/* Floating Feature Badge 2: Bottom Left */}
              <div className="hero-float-tag hero-float-bottom">
                <div className="float-icon-bubble">
                  <Smartphone size={14} />
                </div>
                <div className="float-tag-content">
                  <span className="float-tag-title">{t.float2Title}</span>
                  <span className="float-tag-sub">{t.float2Sub}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
