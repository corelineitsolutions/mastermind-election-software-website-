import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Share2, 
  Target, 
  Video, 
  Truck, 
  MessageSquare, 
  PhoneCall, 
  MessageCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const CampaignServicesSection = ({ onOpenDemo }) => {
  const { language } = useLanguage();

  const content = {
    mr: {
      eyebrow: "आमच्या एकात्मिक सेवा",
      title: "एकात्मिक राजकीय प्रचार उपाय",
      desc: "संसदीय, विधानसभा आणि स्थानिक स्वराज्य संस्थांच्या निवडणुकांसाठी विशेष राजकीय संवाद, व्हिडिओ निर्मिती आणि डिजिटल वॉर रूम सेवा.",
      enquireBtn: "या सेवेबाबत चौकशी करा",
      bannerEyebrow: "मतदारसंघनिहाय रणनीती",
      bannerTitle: "संपूर्ण निवडणूक प्रचार उपाय शोधत आहात?",
      bannerText: "आम्हाला आपल्या मतदारसंघाची माहिती, प्रचाराच्या गरजा आणि संवादाचे उद्दिष्ट सांगा. आमची टीम योग्य रणनीती तयार करेल.",
      bannerBtn: "आपल्या गरजांवर चर्चा करा",
      services: [
        {
          id: 'social-war-room',
          title: 'सोशल मीडिया वॉर रूम',
          desc: 'केंद्रीय सोशल मीडिया नियोजन, पोस्ट निर्मिती, रील्स व ग्राफिक्स डिझाईन आणि २४/७ मोहीम संनियंत्रण.',
          icon: Share2,
          img: '/images/social-media.jpg',
          badge: 'डिजिटल वॉर रूम'
        },
        {
          id: 'paid-campaigning',
          title: 'सशुल्क डिजिटल मोहीम',
          desc: 'लक्षित मतदार वर्गवारी, फेसबुक-इन्स्टाग्राम जाहिराती, यूट्यूब प्रचार आणि दैनिक कामगिरी अहवाल.',
          icon: Target,
          img: '/images/paid-campaigns.jpg',
          badge: 'लक्षित पोहोच'
        },
        {
          id: 'political-documentaries',
          title: 'राजकीय प्रचार माहितीपट',
          desc: 'उमेदवारांचे कार्य, मतदारसंघातील विकासकामे, मुलाखती आणि प्रभावी डॉक्युमेंटरी व्हिडिओ निर्मिती.',
          icon: Video,
          img: '/images/political-documentaries.jpg',
          badge: 'व्हिडिओ निर्मिती'
        },
        {
          id: 'led-van-campaigning',
          title: 'एलईडी व्हॅन प्रचार मोहीम',
          desc: 'हाय-डेफिनिशन फिरत्या एलईडी स्क्रीनसह गाव, वॉर्ड आणि चौका-चौकात थेट ऑडिओ-व्हिडिओ प्रचार.',
          icon: Truck,
          img: '/images/led-van.jpg',
          badge: 'ऑन-ग्राउंड आउटरीच'
        },
        {
          id: 'bulk-sms-rcs',
          title: 'बल्क एसएमएस व आरसीएस',
          desc: 'निवडणूक आयोग नियमांनुसार मतदारांना सणांचे शुभेच्छा संदेश, विकासकामांची माहिती व थेट संदेश.',
          icon: MessageSquare,
          img: '/images/bulk-messaging.jpg',
          badge: 'थेट संदेश'
        },
        {
          id: 'voice-call-campaigns',
          title: 'व्हॉइस कॉल प्रचार मोहीम',
          desc: 'उमेदवाराच्या स्वतःच्या आवाजातील संदेश एकाच वेळी हजारो मतदारांपर्यंत पोहोचवणारी व्हॉइस प्रणाली.',
          icon: PhoneCall,
          img: '/images/voice-campaigns.jpg',
          badge: 'व्हॉइस ब्रॉडकास्ट'
        },
        {
          id: 'whatsapp-business',
          title: 'व्हॉट्सॲप बिझनेस प्रचार',
          desc: 'अधिकृत व्हॉट्सॲप बिझनेस टूल्सद्वारे प्रभागनिहाय ग्रुप्स, ब्रॉडकास्ट याद्या आणि थेट मतदार संवाद.',
          icon: MessageCircle,
          img: '/images/whatsapp-promotions.jpg',
          badge: 'थेट संवाद'
        }
      ]
    },
    hi: {
      eyebrow: "हमारी एकीकृत सेवाएं",
      title: "एकीकृत राजनीतिक प्रचार समाधान",
      desc: "संसदीय, विधानसभा और स्थानीय निकाय चुनावों के लिए विशेष राजनीतिक संचार, वीडियो निर्माण और डिजिटल वॉर रूम सेवाएं।",
      enquireBtn: "इस सेवा के बारे में पूछताछ करें",
      bannerEyebrow: "निर्वाचन क्षेत्र रणनीति",
      bannerTitle: "संपूर्ण चुनाव प्रचार समाधान खोज रहे हैं?",
      bannerText: "हमें अपने निर्वाचन क्षेत्र, प्रचार आवश्यकताओं और संचार लक्ष्यों के बारे में बताएं। हमारी टीम उपयुक्त समाधान तैयार करेगी।",
      bannerBtn: "अपनी आवश्यकताओं पर चर्चा करें",
      services: [
        {
          id: 'social-war-room',
          title: 'सोशल मीडिया वॉर रूम',
          desc: 'केंद्रीकृत सोशल मीडिया योजना, सामग्री समन्वय, रचनात्मक प्रबंधन और 24/7 अभियान निगरानी।',
          icon: Share2,
          img: '/images/social-media.jpg',
          badge: 'डिजिटल वॉर रूम'
        },
        {
          id: 'paid-campaigning',
          title: 'सशुल्क डिजिटल प्रचार',
          desc: 'लक्षित मतदाता वर्ग, फेसबुक-इंस्टाग्राम विज्ञापन, यूट्यूब अभियान और दैनिक प्रदर्शन रिपोर्टिंग।',
          icon: Target,
          img: '/images/paid-campaigns.jpg',
          badge: 'लक्षित पहुंच'
        },
        {
          id: 'political-documentaries',
          title: 'राजनीतिक प्रचार वृत्तचित्र',
          desc: 'उम्मीदवार के विकास कार्य, विजन वीडियो, साक्षात्कार और उच्च गुणवत्ता वाली डॉक्यूमेंट्री फिल्में।',
          icon: Video,
          img: '/images/political-documentaries.jpg',
          badge: 'वीडियो निर्माण'
        },
        {
          id: 'led-van-campaigning',
          title: 'एलईडी वैन प्रचार अभियान',
          desc: 'हाई-डेफिनिशन मोबाइल एलईडी स्क्रीन वैन द्वारा सार्वजनिक सभाओं और चौराहों पर सीधा प्रचार।',
          icon: Truck,
          img: '/images/led-van.jpg',
          badge: 'जमीनी प्रचार'
        },
        {
          id: 'bulk-sms-rcs',
          title: 'बल्क एसएमएस एवं आरसीएस',
          desc: 'चुनावी घोषणाओं, विकास संदेशों और उत्सवों की शुभकामनाओं के लिए स्वीकृत मैसेजिंग समाधान।',
          icon: MessageSquare,
          img: '/images/bulk-messaging.jpg',
          badge: 'सीधा संदेश'
        },
        {
          id: 'voice-call-campaigns',
          title: 'वॉयस कॉल प्रचार अभियान',
          desc: 'उम्मीदवार की वास्तविक आवाज में रिकॉर्डेड ऑडियो संदेश हजारों मतदाताओं तक पहुंचाने की व्यवस्था।',
          icon: PhoneCall,
          img: '/images/voice-campaigns.jpg',
          badge: 'वॉयस ब्रॉडकास्ट'
        },
        {
          id: 'whatsapp-business',
          title: 'व्हाट्सएप बिजनेस प्रचार',
          desc: 'स्वीकृत व्हाट्सएप बिजनेस टूल्स द्वारा बूथ-वार प्रसारण, डिजिटल पर्ची शेयरिंग और सीधा संवाद।',
          icon: MessageCircle,
          img: '/images/whatsapp-promotions.jpg',
          badge: 'मतदाता सहभागिता'
        }
      ]
    },
    en: {
      eyebrow: "OUR INTEGRATED SERVICES",
      title: "Integrated Political Campaign Solutions",
      desc: "Tailored political communication, creative production, and digital war room services designed for parliamentary, assembly, and local governance elections.",
      enquireBtn: "Enquire About This Service",
      bannerEyebrow: "CONSTITUENCY-WIDE STRATEGY",
      bannerTitle: "Looking for a Complete Campaign Solution?",
      bannerText: "Tell us about your constituency, campaign requirements, and communication needs. Our team will help you identify suitable solutions.",
      bannerBtn: "Discuss Your Requirements",
      services: [
        {
          id: 'social-war-room',
          title: 'Social Media War Room',
          desc: 'Centralized social media planning, content coordination, creative management, and campaign monitoring to help campaign teams maintain organized and consistent digital communications.',
          icon: Share2,
          img: '/images/social-media.jpg',
          badge: 'DIGITAL WAR ROOM'
        },
        {
          id: 'paid-campaigning',
          title: 'Paid Digital Campaigning',
          desc: 'Campaign setup, audience targeting, advertising creatives, and performance reporting, subject to platform policies and applicable election advertising rules.',
          icon: Target,
          img: '/images/paid-campaigns.jpg',
          badge: 'TARGETED REACH'
        },
        {
          id: 'political-documentaries',
          title: 'Political Promotional Documentaries',
          desc: 'Professional video storytelling, development-work showcases, candidate introductions, and campaign documentaries.',
          icon: Video,
          img: '/images/political-documentaries.jpg',
          badge: 'CREATIVE PRODUCTION'
        },
        {
          id: 'led-van-campaigning',
          title: 'LED Van Campaigning',
          desc: 'Mobile LED-screen promotions for authorized campaign events, public announcements, and outreach activities.',
          icon: Truck,
          img: '/images/led-van.jpg',
          badge: 'ON-GROUND OUTREACH'
        },
        {
          id: 'bulk-sms-rcs',
          title: 'Bulk SMS & RCS Messaging',
          desc: 'Digital messaging solutions for announcements and campaign communications with appropriate consent and compliance.',
          icon: MessageSquare,
          img: '/images/bulk-messaging.jpg',
          badge: 'DIRECT MESSAGING'
        },
        {
          id: 'voice-call-campaigns',
          title: 'Voice Call Campaigns',
          desc: 'Automated voice announcements and permitted campaign communication services.',
          icon: PhoneCall,
          img: '/images/voice-campaigns.jpg',
          badge: 'VOICE BROADCAST'
        },
        {
          id: 'whatsapp-business',
          title: 'WhatsApp Business Promotions',
          desc: 'Business messaging, promotional updates, and customer communication using approved WhatsApp Business tools and applicable policies.',
          icon: MessageCircle,
          img: '/images/whatsapp-promotions.jpg',
          badge: 'ENGAGEMENT'
        }
      ]
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="campaign-services-section section-padding" id="services">
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

        {/* 7 Services Grid — 3 per row on mobile matching screenshot */}
        <div className="services-showcase-grid">
          {t.services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="service-solution-card"
                onClick={onOpenDemo}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onOpenDemo(); }}
              >
                <div className="service-card-visual">
                  {service.img ? (
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="service-card-img" 
                      loading="lazy" 
                    />
                  ) : (
                    <div className="service-card-fallback-bg">
                      <Icon size={42} className="fallback-icon" />
                    </div>
                  )}
                  <span className="service-card-badge">{service.badge}</span>
                </div>

                <div className="service-card-content">
                  <div className="service-title-row">
                    <div className="service-mini-icon">
                      <Icon size={20} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>

                  <p className="service-description-text">
                    {service.desc}
                  </p>

                  <div className="service-card-action">
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDemo();
                      }}
                      className="service-enquire-link"
                    >
                      <span>{t.enquireBtn}</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Conversion Banner */}
        <div className="campaign-solution-cta-banner">
          <div className="banner-content">
            <span className="banner-eyebrow">
              <Sparkles size={14} />
              {t.bannerEyebrow}
            </span>
            <h3 className="banner-title">
              {t.bannerTitle}
            </h3>
            <p className="banner-text">
              {t.bannerText}
            </p>
          </div>
          <div className="banner-action">
            <button 
              type="button"
              onClick={onOpenDemo}
              className="btn btn-royal btn-lg"
            >
              <span>{t.bannerBtn}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
