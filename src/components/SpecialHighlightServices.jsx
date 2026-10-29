import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Database, 
  Printer, 
  CheckCircle2, 
  ArrowRight, 
  Radio
} from 'lucide-react';

export const SpecialHighlightServices = ({ onOpenDemo }) => {
  const { language } = useLanguage();

  const content = {
    mr: {
      eyebrow: "विशेष प्रमुख सेवा",
      title: "निवडणूक प्रचार व्यवस्थापनासाठी आवश्यक सर्वकाही",
      desc: "मतदार डेटा व्यवस्थापनापासून ते प्रचार संवादापर्यंत, आवश्यक निवडणूक कामे एकाच तंत्रज्ञानाद्वारे व्यवस्थापित करा.",
      services: [
        {
          id: 'voter-database',
          badge: 'प्रमुख डेटाबेस प्लॅटफॉर्म',
          title: 'मतदार डेटाबेस सॉफ्टवेअर',
          desc: 'मतदार माहिती व्यवस्थित करा, मतदारसंघ स्तरावरील नोंदी व्यवस्थापित करा आणि केंद्रीय सॉफ्टवेअरद्वारे निवडणूक नियोजन सोपे करा.',
          icon: Database,
          features: [
            'सुव्यवस्थित मतदार नोंद व्यवस्थापन',
            'मतदारसंघ आणि बूथनिहाय मांडणी',
            'स्मार्ट शोध आणि फिल्टर टूल्स',
            'डेटा संकलन आणि विश्लेषण अहवाल',
            'सुरक्षित डेटा आयात आणि निर्यात',
            'अधिकार-नियंत्रित सुरक्षित माहिती'
          ],
          ctaText: 'डेटाबेस सॉफ्टवेअर पहा',
          ctaLink: '/voter-database'
        },
        {
          id: 'voter-slip',
          badge: 'ग्राउंड लॉजिस्टिक्स आणि छपाई',
          title: 'मतदार स्लिप व्यवस्थापन व छपाई',
          desc: 'कार्यक्षम साधनांसह मतदार स्लिप तयार करणे, छपाई, वाटप आणि प्रचार समन्वय सुलभ करा.',
          icon: Printer,
          features: [
            'जलद मतदार स्लिप निर्मिती',
            'प्रिंट-तयार लेआउट आणि फोटो',
            'बूथनिहाय व भागनिहाय नियोजन',
            'स्लिप वाटप थेट ट्रॅकिंग',
            'कार्यकर्ता काम वाटप समन्वय',
            'विविध छपाई फॉरमॅट्स उपलब्ध'
          ],
          ctaText: 'मतदार स्लिप सोल्यूशन पहा',
          ctaLink: '/voter-database#slip-management'
        },
        {
          id: 'bulk-communications',
          badge: 'जनसंपर्क आणि कायदेशीर नियमन',
          title: 'बल्क एसएमएस व व्हॉइस कॉल सेवा',
          desc: 'प्रचार अपडेट्स, जाहीर सूचना आणि नियोजित संवादाद्वारे मतदारांपर्यंत थेट आणि नियमांनुसार पोहोचा.',
          icon: Radio,
          features: [
            'मान्यताप्राप्त मेसेजिंग प्रणाली',
            'नियोजित व्हॉइस कॉल्स आणि भाषणे',
            'थेट ऑडिओ उद्घोषणा मोहिमा',
            'रिअल-टाइम डिलिव्हरी अहवाल',
            'संपर्क यादी अचूक व्यवस्थापन',
            'सहमती व नियमांचे १००% पालन'
          ],
          ctaText: 'संवाद सोल्यूशन्स पहा',
          ctaLink: '/services'
        }
      ]
    },
    hi: {
      eyebrow: "विशेष प्रमुख सेवाएं",
      title: "चुनाव प्रचार प्रबंधन के लिए आवश्यक सब कुछ",
      desc: "मतदाता डेटा प्रबंधन से लेकर प्रचार संचार तक, आवश्यक चुनावी कार्यों को एकीकृत तकनीक द्वारा प्रबंधित करें।",
      services: [
        {
          id: 'voter-database',
          badge: 'कोर डेटाबेस प्लेटफॉर्म',
          title: 'वोटर डेटाबेस सॉफ्टवेयर',
          desc: 'मतदाता जानकारी व्यवस्थित करें, निर्वाचन क्षेत्र स्तर के रिकॉर्ड प्रबंधित करें और केंद्रीकृत सॉफ्टवेयर द्वारा चुनाव योजना को आसान बनाएं।',
          icon: Database,
          features: [
            'संरचित मतदाता रिकॉर्ड प्रबंधन',
            'निर्वाचन क्षेत्र और बूथ-वार व्यवस्था',
            'स्मार्ट खोज और फ़िल्टर उपकरण',
            'डेटा संगठन और विश्लेषणात्मक रिपोर्ट',
            'अधिकृत डेटा आयात एवं निर्यात',
            'पहुंच-नियंत्रित सुरक्षित जानकारी'
          ],
          ctaText: 'डेटाबेस सॉफ्टवेयर देखें',
          ctaLink: '/voter-database'
        },
        {
          id: 'voter-slip',
          badge: 'जमीनी लॉजिस्टिक्स एवं छपाई',
          title: 'मतदाता पर्ची प्रबंधन एवं छपाई',
          desc: 'कुशल उपकरणों के साथ वोटर पर्ची तैयारी, छपाई, वितरण और प्रचार समन्वय को सरल बनाएं।',
          icon: Printer,
          features: [
            'त्वरित मतदाता पर्ची निर्माण',
            'प्रिंट-रेडी लेआउट एवं फोटो',
            'बूथ-वार एवं भाग-वार संगठन',
            'पर्ची वितरण लाइव ट्रैकिंग',
            'कार्यकर्ता कार्य समन्वय',
            'विभिन्न प्रिंटिंग प्रारूप उपलब्ध'
          ],
          ctaText: 'वोटर पर्ची समाधान देखें',
          ctaLink: '/voter-database#slip-management'
        },
        {
          id: 'bulk-communications',
          badge: 'जनसंपर्क एवं विनियामक अनुपालन',
          title: 'बल्क एसएमएस एवं वॉयस कॉल समाधान',
          desc: 'प्रचार अपडेट और उद्घोषणाओं के माध्यम से मतदाताओं तक सीधे और दूरसंचार नियमों के अनुसार पहुंचें।',
          icon: Radio,
          features: [
            'अनुमोदित मैसेजिंग वर्कफ़्लो',
            'शेड्यूल वॉयस कॉल और संदेश',
            'ध्वनि उद्घोषणा प्रचार अभियान',
            'रियल-टाइम डिलीवरी रिपोर्ट',
            'संपर्क सूची सटीक प्रबंधन',
            'सहमति एवं नियमों का पूर्ण पालन'
          ],
          ctaText: 'संचार समाधान देखें',
          ctaLink: '/services'
        }
      ]
    },
    en: {
      eyebrow: "SPECIALIZED HIGHLIGHT SERVICES",
      title: "Everything You Need to Manage Your Election Campaign",
      desc: "From voter data organization to campaign communications, manage essential election operations through integrated technology and professional services.",
      services: [
        {
          id: 'voter-database',
          badge: 'CORE DATABASE PLATFORM',
          title: 'Voter Database Software',
          desc: 'Organize voter information, manage constituency-level records, and simplify election campaign planning through a centralized software solution.',
          icon: Database,
          features: [
            'Structured voter record management',
            'Constituency and polling-part organization',
            'Search and filtering tools',
            'Data organization and reporting',
            'Authorized data import and export',
            'Access-controlled information management'
          ],
          ctaText: 'Explore Voter Database Software',
          ctaLink: '/voter-database'
        },
        {
          id: 'voter-slip',
          badge: 'GROUND LOGISTICS & PRINTING',
          title: 'Voter Slip Management & Campaigning',
          desc: 'Streamline voter slip preparation, printing, distribution, and campaign coordination with efficient voter management tools.',
          icon: Printer,
          features: [
            'Voter slip preparation',
            'Print-ready layouts',
            'Booth-wise and part-wise organization',
            'Distribution tracking',
            'Campaign task coordination',
            'Configurable printing formats'
          ],
          ctaText: 'Explore Voter Slip Management',
          ctaLink: '/voter-database#slip-management'
        },
        {
          id: 'bulk-communications',
          badge: 'OUTREACH & REGULATORY COMPLIANCE',
          title: 'Bulk SMS & Voice Call Solutions',
          desc: 'Reach intended audiences with campaign updates, announcements, and scheduled communications, subject to applicable consent and telecom regulations.',
          icon: Radio,
          features: [
            'Approved messaging workflows',
            'Scheduled communication',
            'Voice announcement campaigns',
            'Delivery and campaign reporting where supported',
            'Contact list management',
            'Consent and opt-out management'
          ],
          ctaText: 'Explore Communication Solutions',
          ctaLink: '/services'
        }
      ]
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="highlight-services-section section-padding" id="highlight-services">
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

        {/* 3 Highlighted Cards Grid */}
        <div className="highlight-services-grid">
          {t.services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="highlight-service-card">
                <div className="highlight-card-top">
                  <div className="highlight-card-badge">
                    {service.badge}
                  </div>
                  <div className="highlight-icon-box">
                    <Icon size={28} className="highlight-icon" />
                  </div>
                  <h3 className="highlight-service-title">
                    {service.title}
                  </h3>
                  <p className="highlight-service-desc">
                    {service.desc}
                  </p>
                </div>

                <div className="highlight-card-divider" />

                <div className="highlight-features-block">
                  <span className="highlight-features-label">Key Capabilities:</span>
                  <ul className="highlight-features-list">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={16} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="highlight-card-footer">
                  <Link to={service.ctaLink} className="highlight-cta-btn">
                    <span>{service.ctaText}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
