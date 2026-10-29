import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Target, 
  Compass, 
  ArrowRight, 
  Award, 
  MapPin
} from 'lucide-react';

export const AboutSection = () => {
  const { language } = useLanguage();

  const content = {
    mr: {
      eyebrow: "आमच्या कंपनीबद्दल",
      title: "मास्टरमाइंड मीडिया — निवडणूक तंत्रज्ञान तज्ज्ञ",
      lead: "मास्टरमाइंड मीडियामध्ये आम्ही सर्वसमावेशक निवडणूक व्यवस्थापन उपाय देण्यासाठी आधुनिक तंत्रज्ञान, गतिमान जनसंवाद आणि रणनीतिक नियोजनाचा मेळ घालतो.",
      p1: "महाराष्ट्रातील ५००+ राजकीय नेत्यांचा दृढ विश्वास असलेले आम्ही निवडणूक व्यवस्थापन सॉफ्टवेअर, मतदार डेटाबेस आणि एकात्मिक प्रचार सेवांमध्ये अग्रेसर आहोत.",
      quote: "“आम्ही केवळ ॲप्स बनवत नाही; आम्ही निवडणूक विजयाचे नियोजन करतो.”",
      disclaimer: "*हे विधान आमची कार्यनिष्ठा आणि गुणवत्ता दर्शवते; कोणतीही निवडणूक यशाची कायदेशीर हमी नाही.",
      p2: "आमचे ध्येय प्रचाराची कामे सुलभ करणे, समन्वय वाढवणे आणि राजकीय टीमना विश्वासार्ह डिजिटल साधनांसह सक्षम बनवणे हे आहे.",
      missionTitle: "आमचे ध्येय (Mission)",
      missionDesc: "विश्वासार्ह तंत्रज्ञान, शिस्तबद्ध कार्यप्रणाली आणि व्यावसायिक निवडणूक सेवेद्वारे प्रचार नियोजन सोपे करणे.",
      visionTitle: "आमची दृष्टी (Vision)",
      visionDesc: "संपूर्ण भारतातील राजकीय नेत्यांसाठी आणि पक्षांसाठी सर्वात विश्वासू निवडणूक तंत्रज्ञान भागीदार बनणे.",
      btnText: "आमच्याबद्दल अधिक जाणून घ्या",
      hqTitle: "मुख्यालय पुणे",
      hqSub: "सिटी व्हिस्टा, खराडी, महाराष्ट्र",
      badgeTitle: "५००+ राजकीय नेते",
      badgeSub: "विधानसभा व परिषदेत यशस्वी सेवा"
    },
    hi: {
      eyebrow: "हमारी कंपनी के बारे में",
      title: "मास्टरमाइंड मीडिया — चुनाव विशेषज्ञ",
      lead: "मास्टरमाइंड मीडिया में हम व्यापक चुनाव प्रबंधन समाधान देने के लिए आधुनिक तकनीक, रणनीतिक संचार और जमीनी अनुभव का समन्वय करते हैं।",
      p1: "महाराष्ट्र के 500+ राजनीतिक नेताओं द्वारा विश्वसनीय, हम चुनाव प्रबंधन सॉफ्टवेयर, वोटर डेटाबेस और एकीकृत प्रचार सेवाओं के विशेषज्ञ हैं।",
      quote: "“हम केवल ऐप नहीं बनाते; हम चुनावी विजय की योजना बनाते हैं।”",
      disclaimer: "*यह कथन हमारी तकनीकी दक्षता और समर्पण को दर्शाता है; कोई चुनावी जीत की गारंटी नहीं है।",
      p2: "हमारा उद्देश्य प्रचार कार्यों को सरल बनाना, समन्वय में सुधार करना और राजनीतिक टीमों को सटीक डिजिटल उपकरणों से सशक्त बनाना है।",
      missionTitle: "हमारा मिशन (Mission)",
      missionDesc: "विश्वसनीय तकनीक, व्यवस्थित कार्यप्रणाली और पेशेवर सहयोग से चुनाव प्रबंधन को सुगम बनाना।",
      visionTitle: "हमारा विजन (Vision)",
      visionDesc: "संपूर्ण भारत में राजनीतिक दलों एवं उम्मीदवारों के लिए सबसे भरोसेमंद चुनाव तकनीकी साझेदार बनना।",
      btnText: "हमारे बारे में और जानें",
      hqTitle: "मुख्यालय पुणे",
      hqSub: "सिटी विस्टा, खराड़ी, महाराष्ट्र",
      badgeTitle: "500+ राजनेता",
      badgeSub: "सफल चुनावी अभियानों का अनुभव"
    },
    en: {
      eyebrow: "ABOUT OUR COMPANY",
      title: "Mastermind Media — Election Experts",
      lead: "At Mastermind Media, we combine technology, communication, and strategic planning to deliver comprehensive election management solutions.",
      p1: "Trusted by 500+ political leaders, we specialize in election management software, voter database solutions, and integrated campaign services across Maharashtra.",
      quote: "“We don't just build apps; we engineer election victories.”",
      disclaimer: "*Statement reflects our engineering standard and strategic dedication; not an electoral guarantee.",
      p2: "Our mission is to simplify campaign operations, improve coordination, and empower political teams with reliable digital tools.",
      missionTitle: "Our Mission",
      missionDesc: "Simplify election operations through reliable technology, organized workflows, and professional campaign support.",
      visionTitle: "Our Vision",
      visionDesc: "Become a trusted election technology and campaign solutions partner for political teams across India.",
      btnText: "Learn More About Us",
      hqTitle: "Headquartered in Pune",
      hqSub: "City Vista, Kharadi, Maharashtra",
      badgeTitle: "500+ Political Leaders",
      badgeSub: "Served Across Assemblies & Councils"
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="about-overview-section section-padding" id="about-us">
      <div className="container">
        <div className="about-two-column-layout">
          {/* Left Column: Heading, Content, Mission & Vision, CTA */}
          <div className="about-text-column">
            <span className="section-eyebrow">
              {t.eyebrow}
            </span>
            <h2 className="section-title">
              {t.title}
            </h2>

            <div className="about-body-narrative">
              <p className="narrative-lead">
                {t.lead}
              </p>
              <p>
                {t.p1}
              </p>
              <blockquote className="about-quote-box">
                <p className="quote-text">
                  {t.quote}
                </p>
                <span className="quote-disclaimer">
                  {t.disclaimer}
                </span>
              </blockquote>
              <p>
                {t.p2}
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="mv-card-header">
                  <div className="mv-icon-box mission">
                    <Target size={20} />
                  </div>
                  <h3 className="mv-card-title">{t.missionTitle}</h3>
                </div>
                <p className="mv-card-desc">
                  {t.missionDesc}
                </p>
              </div>

              <div className="vision-card">
                <div className="mv-card-header">
                  <div className="mv-icon-box vision">
                    <Compass size={20} />
                  </div>
                  <h3 className="mv-card-title">{t.visionTitle}</h3>
                </div>
                <p className="mv-card-desc">
                  {t.visionDesc}
                </p>
              </div>
            </div>

            <div className="about-cta-row">
              <Link to="/about" className="btn btn-royal btn-lg">
                <span>{t.btnText}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: High Quality Visual Showcase */}
          <div className="about-visual-column">
            <div className="about-visual-frame">
              <img 
                src="/images/app-dashboard.jpg" 
                alt="Mastermind Media War Room & Election Technology Deployment" 
                className="about-feature-img"
              />

              {/* Floating Pune HQ Card */}
              <div className="about-floating-card hq-card">
                <MapPin size={20} className="text-royal" />
                <div>
                  <div className="floating-card-title">{t.hqTitle}</div>
                  <div className="floating-card-sub">{t.hqSub}</div>
                </div>
              </div>

              {/* Floating Verified Trust Card */}
              <div className="about-floating-card trust-badge-card">
                <Award size={20} className="text-gold" />
                <div>
                  <div className="floating-card-title">{t.badgeTitle}</div>
                  <div className="floating-card-sub">{t.badgeSub}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
