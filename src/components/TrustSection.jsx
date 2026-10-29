import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Users, 
  Database, 
  Layers, 
  Cpu, 
  Smartphone,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const TrustSection = () => {
  const { language } = useLanguage();

  const content = {
    mr: {
      claims: [
        {
          title: "५००+ राजकीय नेत्यांना सेवा",
          desc: "महाराष्ट्रातील निवडणूक कार्यालये, उमेदवार आणि राजकीय सल्लागारांचा दृढ विश्वास.",
          icon: Users
        },
        {
          title: "स्मार्ट मतदार डेटाबेस व्यवस्थापन",
          desc: "बूथनिहाय, प्रभागनिहाय आणि कुटुंबनिहाय मतदार नोंदींचे अचूक वर्गीकरण.",
          icon: Database
        },
        {
          title: "एकात्मिक निवडणूक प्रचार सेवा",
          desc: "डिजिटल वॉर रूम, ऑन-ग्राउंड प्रचार आणि थेट जनसंवादाचे परिपूर्ण एकत्रीकरण.",
          icon: Layers
        },
        {
          title: "तंत्रज्ञान-आधारित समन्वय",
          desc: "कार्यकर्ते, उमेदवार आणि वॉर रूम यांना जोडणारी गतिमान कार्यप्रणाली.",
          icon: Cpu
        }
      ],
      badge: "सर्व प्लॅटफॉर्मवर उपलब्ध",
      text: "मास्टरमाइंड निवडणूक सॉफ्टवेअर <strong>डेस्कटॉप वेब</strong>, <strong>अँड्रॉइड मोबाईल</strong> आणि <strong>ॲपल आयओएस</strong> वर अखंडपणे कार्य करते.",
      playStore: "गुगल प्ले ॲप",
      iosWeb: "iOS व वेब ॲक्सेस"
    },
    hi: {
      claims: [
        {
          title: "500+ राजनेताओं को सेवा",
          desc: "महाराष्ट्र भर के चुनाव कार्यालयों, उम्मीदवारों और राजनीतिक सलाहकारों का विश्वास।",
          icon: Users
        },
        {
          title: "स्मार्ट वोटर डेटाबेस प्रबंधन",
          desc: "बूथ-वार, वार्ड-वार और परिवार-स्तरीय मतदाता रिकॉर्ड का व्यवस्थित संगठन।",
          icon: Database
        },
        {
          title: "एकीकृत चुनाव प्रचार सेवाएं",
          desc: "डिजिटल वॉर रूम, ऑन-ग्राउंड मीडिया और प्रत्यक्ष संदेश का संपूर्ण समन्वय।",
          icon: Layers
        },
        {
          title: "तकनीक-आधारित समन्वय",
          desc: "कार्यकर्ताओं, उम्मीदवारों और वॉर रूम को जोड़ने वाली सरल कार्यप्रणाली।",
          icon: Cpu
        }
      ],
      badge: "सभी प्लेटफॉर्म पर उपलब्ध",
      text: "मास्टरमाइंड चुनाव सॉफ्टवेयर <strong>डेस्कटॉप वेब</strong>, <strong>एंड्रॉइड फोन</strong> और <strong>एप्पल iOS</strong> पर सुचारू रूप से कार्य करता है।",
      playStore: "गूगल प्ले ऐप",
      iosWeb: "iOS एवं वेब एक्सेस"
    },
    en: {
      claims: [
        {
          title: "500+ Political Leaders Served",
          desc: "Trusted by campaign offices, candidates, and political consultants across Maharashtra.",
          icon: Users
        },
        {
          title: "Smart Voter Database Management",
          desc: "Structured booth-wise, part-wise, and household-level voter record organization.",
          icon: Database
        },
        {
          title: "Integrated Campaign Services",
          desc: "Complete convergence of digital war rooms, on-ground media, and direct messaging.",
          icon: Layers
        },
        {
          title: "Technology-Driven Coordination",
          desc: "Streamlined operational workflows connecting karyakartas, candidates, and war rooms.",
          icon: Cpu
        }
      ],
      badge: "Multi-Platform Accessibility",
      text: "Mastermind Election Software is accessible on <strong>Desktop Web Workstations</strong>, <strong>Android Phones</strong>, and <strong>Apple iOS Devices</strong> for seamless booth-level execution.",
      playStore: "Google Play App",
      iosWeb: "iOS & Web Access"
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="trust-strip-section" aria-label="Trust and Credibility">
      <div className="container">
        {/* 4 Core Business Claims */}
        <div className="trust-claims-grid">
          {t.claims.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="trust-claim-card">
                <div className="trust-claim-icon-wrap">
                  <Icon size={24} className="trust-claim-icon" />
                </div>
                <div className="trust-claim-content">
                  <h3 className="trust-claim-title">{item.title}</h3>
                  <p className="trust-claim-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Web Access Bar */}
        <div className="trust-app-strip">
          <div className="app-strip-badge">
            <Smartphone size={16} />
            <span>{t.badge}</span>
          </div>
          <div className="app-strip-text" dangerouslySetInnerHTML={{ __html: t.text }} />
          <div className="app-strip-actions">
            <a 
              href="https://play.google.com/store/apps/details?id=com.corelineitsolutions.master_mind"
              target="_blank"
              rel="noopener noreferrer"
              className="app-pill-btn"
              title="Master Mind Android App on Google Play"
            >
              <span>{t.playStore}</span>
            </a>
            <a 
              href="https://wa.me/919604001344?text=Hello%20Mastermind%20Media%20Team%2C%20please%20share%20the%20iOS%20and%20web%20login%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="app-pill-btn"
              title="iOS & Web Portal Access"
            >
              <span>{t.iosWeb}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
