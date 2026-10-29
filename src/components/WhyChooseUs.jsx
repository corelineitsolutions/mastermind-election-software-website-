import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Users, 
  Database, 
  Layers, 
  Cpu, 
  Sliders, 
  Headphones
} from 'lucide-react';

export const WhyChooseUs = () => {
  const { language } = useLanguage();

  const content = {
    mr: {
      eyebrow: "खात्रीशीर फायदे",
      title: "राजकीय पक्ष व नेते मास्टरमाइंड मीडिया का निवडतात?",
      desc: "डेटा गोपनीयता, महाराष्ट्रातील निवडणुकांचा प्रत्यक्ष अनुभव आणि संपूर्ण प्रचार नियोजन एकाच छताखाली.",
      benefits: [
        {
          id: 1,
          num: '01',
          title: '५००+ राजकीय नेत्यांचा अनुभव',
          desc: 'विधानसभा, लोकसभा आणि स्थानिक निवडणुकांमध्ये हजारो बूथ कार्यकर्त्यांचे यशस्वी नियोजन.',
          icon: Users
        },
        {
          id: 2,
          num: '02',
          title: 'स्मार्ट मतदार डेटाबेस व्यवस्थापन',
          desc: 'अचूक प्रभाग, बूथ आणि कुटुंबनिहाय मतदार याद्या डिजिटल स्वरूपात तत्काळ उपलब्ध.',
          icon: Database
        },
        {
          id: 3,
          num: '03',
          title: 'एकात्मिक डिजिटल प्रचार सेवा',
          desc: 'सॉफ्टवेअर, व्हिडिओ डॉक्युमेंटरी, सोशल मीडिया आणि संदेश मोहिमा एकाच विश्वासू टीमकडून.',
          icon: Layers
        },
        {
          id: 4,
          num: '04',
          title: 'तंत्रज्ञान-आधारित निवडणूक समन्वय',
          desc: 'कौशल्यपूर्ण डिजिटल साधनांद्वारे प्रत्यक्ष मतदानाच्या दिवशी कार्यकर्त्यांची अचूक देखरेख.',
          icon: Cpu
        },
        {
          id: 5,
          num: '05',
          title: 'मतदारसंघनिहाय सानुकूल उपाय',
          desc: 'प्रत्येक मतदारसंघाच्या भौगोलिक आणि सामाजिक समीकरणांनुसार कार्यप्रणालीचे समायोजन.',
          icon: Sliders
        },
        {
          id: 6,
          num: '06',
          title: 'समर्पित वॉर रूम व फील्ड सपोर्ट',
          desc: 'निवडणूक संपेपर्यंत थेट उपस्थित राहून सॉफ्टवेअर ट्रेनिंग आणि ऑन-ग्राउंड तांत्रिक साहाय्य.',
          icon: Headphones
        }
      ]
    },
    hi: {
      eyebrow: "विश्वसनीय लाभ",
      title: "राजनीतिक दल एवं नेता मास्टरमाइंड मीडिया क्यों चुनते हैं?",
      desc: "डेटा सुरक्षा, महाराष्ट्र के चुनावों का प्रत्यक्ष अनुभव और संपूर्ण प्रचार योजना एक ही स्थान पर।",
      benefits: [
        {
          id: 1,
          num: '01',
          title: '500+ राजनेताओं का अनुभव',
          desc: 'विधानसभा, लोकसभा और स्थानीय चुनावों में बूथ कार्यकर्ताओं का सफल और सुरक्षित प्रबंधन।',
          icon: Users
        },
        {
          id: 2,
          num: '02',
          title: 'स्मार्ट वोटर डेटाबेस प्रबंधन',
          desc: 'सटीक बूथ-वार, वार्ड-वार और परिवार-स्तरीय मतदाता सूचियों का डिजिटल विश्लेषण।',
          icon: Database
        },
        {
          id: 3,
          num: '03',
          title: 'एकीकृत डिजिटल प्रचार सेवाएं',
          desc: 'सॉफ्टवेयर, वीडियो डॉक्यूमेंट्री, सोशल मीडिया और संदेश अभियान एक ही स्थान पर।',
          icon: Layers
        },
        {
          id: 4,
          num: '04',
          title: 'तकनीक-आधारित चुनाव समन्वय',
          desc: 'उन्नत डिजिटल उपकरणों के माध्यम से मतदान के दिन कार्यकर्ताओं की प्रभावी निगरानी।',
          icon: Cpu
        },
        {
          id: 5,
          num: '05',
          title: 'निर्वाचन क्षेत्र अनुसार अनुकूलित समाधान',
          desc: 'प्रत्येक निर्वाचन क्षेत्र के स्थानीय समीकरणों के अनुसार कार्यप्रणाली का अनुकूलन।',
          icon: Sliders
        },
        {
          id: 6,
          num: '06',
          title: 'समर्पित वॉर रूम एवं फील्ड सपोर्ट',
          desc: 'मतदान दिवस तक प्रत्यक्ष उपस्थिति के साथ सॉफ्टवेयर प्रशिक्षण और तकनीकी सहायता।',
          icon: Headphones
        }
      ]
    },
    en: {
      eyebrow: "PROVEN ADVANTAGES",
      title: "Why Political Teams Choose Mastermind Media",
      desc: "Combining data security, local Maharashtra election experience, and full-spectrum campaign coordination under one accountable roof.",
      benefits: [
        {
          id: 1,
          num: '01',
          title: '500+ Political Leaders Served',
          desc: 'Experience supporting political leaders and campaign teams across major elections in Maharashtra.',
          icon: Users
        },
        {
          id: 2,
          num: '02',
          title: 'Smart Voter Database Management',
          desc: 'Organize voter records and constituency information through structured digital workflows.',
          icon: Database
        },
        {
          id: 3,
          num: '03',
          title: 'Integrated Digital Campaign Services',
          desc: 'Coordinate software, creative production, messaging, and campaign support through one service partner.',
          icon: Layers
        },
        {
          id: 4,
          num: '04',
          title: 'Technology-Driven Campaign Coordination',
          desc: 'Reduce manual administrative effort through organized tools and real-time workflows.',
          icon: Cpu
        },
        {
          id: 5,
          num: '05',
          title: 'Customized Constituency Solutions',
          desc: 'Adapt supported workflows to constituency structures and campaign team requirements.',
          icon: Sliders
        },
        {
          id: 6,
          num: '06',
          title: 'Dedicated Project Support',
          desc: 'Receive hands-on assistance with software training, war room support, and ground enquiries.',
          icon: Headphones
        }
      ]
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="why-choose-section section-padding" id="why-choose-us">
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

        {/* 6 Benefits Grid */}
        <div className="benefits-grid">
          {t.benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.id} className="benefit-card">
                <div className="benefit-card-top">
                  <div className="benefit-icon-box">
                    <Icon size={24} className="benefit-icon" />
                  </div>
                  <span className="benefit-num-tag">{b.num}</span>
                </div>
                <h3 className="benefit-card-title">{b.title}</h3>
                <p className="benefit-card-desc">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
