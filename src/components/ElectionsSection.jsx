import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Building2, 
  Landmark, 
  Vote, 
  Award, 
  Users, 
  MapPin, 
  GraduationCap, 
  School, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Calendar
} from 'lucide-react';

export const ELECTIONS_DATA = [
  {
    id: 'lok-sabha',
    title: 'Lok Sabha Election Software',
    category: 'parliament-assembly',
    categoryName: 'Parliamentary',
    icon: Landmark,
    image: '/images/elections/lok-sabha.jpg',
    voterScale: '15,00,000+ to 22,00,000+ Voters',
    boothScale: '1,600 to 2,400+ Polling Booths across 6 Assembly Segments',
    desc: 'Enterprise-scale election management software engineered to synchronize high-volume voter lists across multiple Vidhan Sabha segments into a unified central command center.',
    features: [
      'Multi-Assembly Segment aggregation & real-time synchronization',
      'Constituency-wide booth worker hierarchy & karyakarta mobile access',
      'Cross-booth duplicate voter identification & address sanitization',
      'High-speed voter slip generation with voter photo & family grouping'
    ]
  },
  {
    id: 'rajya-sabha',
    title: 'Rajya Sabha Election Software',
    category: 'parliament-assembly',
    categoryName: 'Parliamentary',
    icon: Award,
    image: '/images/elections/rajya-sabha.jpg',
    voterScale: 'Elected Legislative Assembly Members (MLAs)',
    boothScale: 'State Legislative Assembly Polling Stations',
    desc: 'Specialized electoral intelligence and vote tracking software tailored for Upper House elections, quota management, and ballot preference security.',
    features: [
      'Proportional representation Single Transferable Vote (STV) calculator',
      'Candidate quota calculation & preference ranking projections',
      'Real-time MLA attendance, authorization & coordination dashboard',
      '100% confidential and secure internal campaign intelligence vault'
    ]
  },
  {
    id: 'vidhan-sabha',
    title: 'Vidhan Sabha Election Software',
    category: 'parliament-assembly',
    categoryName: 'Parliamentary',
    icon: Vote,
    image: '/images/elections/vidhan-sabha.jpg',
    voterScale: '2,50,000 to 4,50,000+ Voters',
    boothScale: '280 to 450+ Polling Booths',
    desc: 'The gold-standard election software platform for Assembly candidates across Maharashtra, delivering micro-targeted booth management, voter slips, and booth-pramukh tracking.',
    features: [
      'Booth-by-booth historical voting analysis & swing voter identification',
      'Bilingual voter search in English & Devanagari script',
      'Mobile app for 500+ booth karyakartas with instant voter verification',
      'One-click WhatsApp & SMS voter slip distribution to families'
    ]
  },
  {
    id: 'vidhan-parishad',
    title: 'Vidhan Parishad Election Software',
    category: 'parliament-assembly',
    categoryName: 'Parliamentary',
    icon: Building2,
    image: '/images/elections/vidhan-parishad.jpg',
    voterScale: 'Local Authorities / Assembly Members',
    boothScale: 'Designated Council Polling Stations',
    desc: 'Customized electoral database system for Legislative Council elections, handling preferential ballots, local authority electorate mapping, and voter verification.',
    features: [
      'Local authority electoral college database (Corporators, ZP Members)',
      'Preferential ballot algorithm & STV quota threshold modeling',
      'Voter engagement status & direct contact log tracking',
      'Confidential candidate war room coordination tools'
    ]
  },
  {
    id: 'mahanagarpalika',
    title: 'Mahanagarpalika Election Software',
    category: 'urban',
    categoryName: 'Urban Local Bodies',
    icon: Building2,
    image: '/images/elections/mahanagarpalika.jpg',
    voterScale: '50,000 to 1,50,000+ Voters per Multi-Member Ward',
    boothScale: '60 to 180+ Urban Polling Booths per Ward',
    desc: 'Engineered specifically for Maharashtra Municipal Corporations with built-in multi-member Prabhag (panel) system mapping and society-level voter organizing.',
    features: [
      'Support for multi-member panel / Prabhag election system (A, B, C, D)',
      'Housing society, high-rise apartment & slum cluster categorization',
      'Urban colony and ward boundary voter list filtering',
      'Digital voter slip generation with barcode and QR scanner integration'
    ]
  },
  {
    id: 'nagar-parishad',
    title: 'Nagar Parishad Election Software',
    category: 'urban',
    categoryName: 'Urban Local Bodies',
    icon: Landmark,
    image: '/images/elections/nagar-parishad.jpg',
    voterScale: '20,000 to 65,000+ Voters',
    boothScale: '25 to 70+ Polling Booths',
    desc: 'Comprehensive election software for semi-urban Municipal Councils, supporting direct Council President (Nagaradhyaksha) and ward councillor coordination.',
    features: [
      'Dual campaign management (Nagaradhyaksha candidate + Ward councillors)',
      'Locality-wise mohalla and galli voter grouping',
      'Door-to-door survey recording via Karyakarta Mobile App',
      'Booth-wise voter slip booklet printing in Marathi format'
    ]
  },
  {
    id: 'nagar-panchayat',
    title: 'Nagar Panchayat Election Software',
    category: 'urban',
    categoryName: 'Urban Local Bodies',
    icon: MapPin,
    image: '/images/elections/nagar-panchayat.jpg',
    voterScale: '10,000 to 25,000+ Voters',
    boothScale: '12 to 30+ Polling Booths',
    desc: 'Streamlined, rapid-deployment software for emerging town councils, offering fast voter searches, family grouping, and booth mobilization.',
    features: [
      'Lightweight offline-first voter search engine on mobile phones',
      'Ward-by-ward candidate campaign progress tracking',
      'Family head identification for consolidated outreach',
      'Instant voter slip printing and WhatsApp slip forwarding'
    ]
  },
  {
    id: 'municipal-ward',
    title: 'Municipal Ward Election Software',
    category: 'urban',
    categoryName: 'Urban Local Bodies',
    icon: Users,
    image: '/images/elections/municipal-ward.jpg',
    voterScale: '8,000 to 30,000+ Voters per Single/Multi Ward',
    boothScale: '10 to 35+ Polling Booths',
    desc: 'Granular street-by-street election management software tailored for individual ward candidates, corporators, and municipal panel aspirants.',
    features: [
      'Granular building-wise and street-wise voter mapping',
      'Micro-level karyakarta assignments for every 50-100 houses',
      'Voter loyalty marking (Favourable, Neutral, Opponent)',
      'Polling day live voting turnout tracker booth-by-booth'
    ]
  },
  {
    id: 'zilla-parishad',
    title: 'Zilla Parishad Election Software',
    category: 'rural',
    categoryName: 'Rural Governance',
    icon: Landmark,
    image: '/images/elections/zilla-parishad.jpg',
    voterScale: '30,000 to 55,000+ Voters per ZP Gat',
    boothScale: '40 to 75+ Rural Booths across Multiple Villages',
    desc: 'Purpose-built for rural District Council Gat elections, connecting candidate headquarters to village-level karyakartas across dispersed rural geographies.',
    features: [
      'Multi-village Gat mapping and Gram Panchayat cluster synchronization',
      'Dual campaign coordination (ZP Gat Member + Panchayat Samiti Gan)',
      '100% offline mobile app functionality in low-connectivity rural zones',
      'Village-wise voter roll search with Marathi phonetic search'
    ]
  },
  {
    id: 'panchayat-samiti',
    title: 'Panchayat Samiti Election Software',
    category: 'rural',
    categoryName: 'Rural Governance',
    icon: Layers,
    image: '/images/elections/panchayat-samiti.jpg',
    voterScale: '15,00,000+ to 22,00,000+ Voters per PS Gan',
    boothScale: '20 to 40+ Rural Booths',
    desc: 'Efficient election management solution for Taluka-level Panchayat Samiti Gan constituencies with village-wise voter list analysis and karyakarta networks.',
    features: [
      'Panchayat Samiti Gan boundary alignment with parent ZP Gat',
      'Village sarpanch and local influencer contact database',
      'Field survey logging with issue tracking (water, roads, power)',
      'Automated voter slip generation on mobile devices'
    ]
  },
  {
    id: 'gram-panchayat',
    title: 'Gram Panchayat Election Software',
    category: 'rural',
    categoryName: 'Rural Governance',
    icon: Vote,
    image: '/images/elections/gram-panchayat.jpg',
    voterScale: '800 to 12,000+ Voters per Village',
    boothScale: '1 to 12+ Village Polling Booths',
    desc: 'The essential grassroots tool for Gram Panchayat Ward Panel and Direct Sarpanch candidates, designed for family ties, wadi-vasti voter tracking, and live polling turnouts.',
    features: [
      'Wadi, vasti, and pada-level micro voter categorization',
      'Comprehensive family tree and bloodline relationship tagging',
      'Panel candidate ticket coordination (Ward 1, 2, 3...)',
      'Pocket-friendly, rapid deployment within 24 hours of list finalization'
    ]
  },
  {
    id: 'graduate-constituency',
    title: 'Graduate Constituency Election Software',
    category: 'special-council',
    categoryName: 'Council & Professional',
    icon: GraduationCap,
    image: '/images/elections/graduate-constituency.jpg',
    voterScale: '1,50,000 to 3,50,000+ Verified Graduate Voters',
    boothScale: 'District-wide Specialized Polling Centers',
    desc: 'Specialized electoral system engineered specifically for Graduate MLC elections across multi-district divisions (Pune, Mumbai, Nashik, Konkan, Nagpur, Amravati, Aurangabad).',
    features: [
      'Graduate voter verification & university/college degree tracking',
      'Single Transferable Vote (STV) preference 1, 2, 3 optimization',
      'Multi-district professional voter directory & phone outreach',
      'Alumni association and corporate professional constituency outreach'
    ]
  },
  {
    id: 'teachers-constituency',
    title: "Teachers' Constituency Election Software",
    category: 'special-council',
    categoryName: 'Council & Professional',
    icon: School,
    image: '/images/elections/teachers-constituency.jpg',
    voterScale: '40,000 to 90,000+ Registered Teacher Voters',
    boothScale: 'Division-wide Educational Polling Centers',
    desc: 'Tailored specifically for Legislative Council Teachers Constituency elections with school, college, and educational institution-wise voter databases.',
    features: [
      'School, junior college, and grant-in-aid institution voter directory',
      'Preferential voting quota algorithms and ballot ranking guidance',
      'Teacher association and educational trust coordinator management',
      'Direct WhatsApp and digital communication on service and pension issues'
    ]
  }
];

export const ElectionsSection = ({ onOpenDemo }) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: language === 'mr' ? 'सर्व निवडणुका (१३)' : language === 'hi' ? 'सभी चुनाव (13)' : 'All Elections (13)' },
    { id: 'parliament-assembly', label: language === 'mr' ? 'संसद व विधानसभा' : language === 'hi' ? 'संसद व विधानसभा' : 'Parliament & Assembly' },
    { id: 'urban', label: language === 'mr' ? 'महानगरपालिका व नगरपरिषद' : language === 'hi' ? 'नगर निगम व परिषद' : 'Municipal & Urban' },
    { id: 'rural', label: language === 'mr' ? 'जिल्हा परिषद व ग्रामपंचायत' : language === 'hi' ? 'जिला परिषद व ग्राम पंचायत' : 'Panchayat & Rural' },
    { id: 'special-council', label: language === 'mr' ? 'पदवीधर व शिक्षक मतदारसंघ' : language === 'hi' ? 'स्नातक व शिक्षक क्षेत्र' : 'Graduate & Teachers' }
  ];

  const content = {
    mr: {
      eyebrow: "१३+ निवडणूक प्रकारांसाठी विशेष तंत्रज्ञान",
      title: "प्रत्येक निवडणूक स्तरासाठी विशेष निवडणूक व्यवस्थापन सॉफ्टवेअर",
      desc: "लोकसभा, विधानसभा ते थेट ग्रामपंचायत आणि पदवीधर मतदारसंघांपर्यंत, मास्टरमाइंड मीडिया प्रत्येक निवडणुकीच्या नियमांनुसार सानुकूल मतदार डेटाबेस, बूथ व्यवस्थापन आणि कार्यकर्ता ॲप्स पुरवते.",
      btnText: "या निवडणुकीसाठी डेमो मागवा"
    },
    hi: {
      eyebrow: "13+ चुनाव प्रकारों हेतु विशिष्ट तकनीक",
      title: "प्रत्येक चुनाव स्तर के लिए विशेष चुनाव प्रबंधन सॉफ्टवेयर",
      desc: "लोकसभा, विधानसभा से लेकर ग्राम पंचायत और विधान परिषद तक, मास्टरमाइंड मीडिया प्रत्येक चुनाव नियमों के अनुसार कस्टम वोटर डेटाबेस, बूथ प्रबंधन और कार्यकर्ता ऐप प्रदान करता है।",
      btnText: "इस चुनाव के लिए डेमो का अनुरोध करें"
    },
    en: {
      eyebrow: "13+ ELECTION TYPES SUPPORTED",
      title: "Specialized Election Software for Every Election Level",
      desc: "From Parliamentary general elections to local Gram Panchayats and Council constituencies, Mastermind Media provides customized voter database algorithms, booth management, and karyakarta mobile applications tailored to your election rules.",
      btnText: "Request Demo for this Election"
    }
  };

  const t = content[language] || content.en;

  const filteredElections = activeCategory === 'all' 
    ? ELECTIONS_DATA 
    : ELECTIONS_DATA.filter(item => item.category === activeCategory);

  return (
    <section className="elections-showcase-section section-padding" id="elections">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '880px', margin: '0 auto 2.5rem auto' }}>
          <span className="section-eyebrow section-eyebrow-gold">
            <Sparkles size={14} />
            {t.eyebrow}
          </span>
          <h2 className="section-title">
            {t.title}
          </h2>
          <p className="section-description">
            {t.desc}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="elections-filter-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`election-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* 13 Elections Grid */}
        <div className="elections-cards-grid">
          {filteredElections.map((election) => {
            const Icon = election.icon;

            return (
              <div key={election.id} className="election-software-card">
                {/* Card Header Background Image of Respective Election Type */}
                <div 
                  className="election-card-header-bg"
                  style={{ backgroundImage: `url(${election.image})` }}
                >
                  <div className="election-header-overlay" />
                  
                  <div className="election-header-content">
                    <div className="election-icon-box">
                      <Icon size={22} />
                    </div>
                    {/* Only the English Name, strictly no Marathi name and no description badge */}
                    <h3 className="election-card-title">{election.title}</h3>
                  </div>
                </div>

                <div className="election-card-body">
                  {/* Scale Stats Row */}
                  <div className="election-scale-stats-box">
                    <div className="scale-stat-item">
                      <span className="scale-label">Voter Scale</span>
                      <span className="scale-value">{election.voterScale}</span>
                    </div>
                    <div className="scale-stat-divider" />
                    <div className="scale-stat-item">
                      <span className="scale-label">Polling Network</span>
                      <span className="scale-value">{election.boothScale}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="election-card-desc">
                    {election.desc}
                  </p>

                  {/* Key Features List */}
                  <div className="election-features-wrap">
                    <span className="features-header-label">Tailored Election Capabilities:</span>
                    <ul className="election-feature-checklist">
                      {election.features.map((feat, idx) => (
                        <li key={idx} className="election-feature-item">
                          <CheckCircle2 size={15} className="feature-check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <div className="election-card-footer">
                    <button
                      type="button"
                      onClick={onOpenDemo}
                      className="btn btn-primary election-card-demo-btn"
                    >
                      <span>{t.btnText}</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Comprehensive Advisory Banner */}
        <div className="elections-advisory-banner">
          <div className="advisory-content">
            <div className="advisory-badge">
              <ShieldCheck size={16} />
              <span>OFFICIAL ELECTION COMMISSION COMPLIANCE</span>
            </div>
            <h3 className="advisory-title">
              Contesting an Upcoming Election in Maharashtra or Across India?
            </h3>
            <p className="advisory-text">
              Mastermind Media provides complete booth-wise voter lists, phonetic Devanagari voter searching, custom voter slip printing, and dedicated war room support for candidates across all 13 election tiers.
            </p>
          </div>
          <div className="advisory-cta">
            <button
              type="button"
              onClick={onOpenDemo}
              className="btn btn-light-solid btn-lg"
            >
              <Calendar size={18} />
              <span>Schedule Free Strategy Session</span>
            </button>
            <Link to="/contact" className="btn btn-outline-white btn-lg">
              <span>Contact Pune War Room</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
