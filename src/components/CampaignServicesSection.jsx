import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  Target, 
  Video, 
  Truck, 
  MessageSquare, 
  PhoneCall, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const CampaignServicesSection = ({ onOpenDemo }) => {
  const campaignServices = [
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
  ];

  return (
    <section className="campaign-services-section section-padding" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            OUR INTEGRATED SERVICES
          </span>
          <h2 className="section-title">
            Integrated Political Campaign Solutions
          </h2>
          <p className="section-description">
            Tailored political communication, creative production, and digital war room services designed for parliamentary, assembly, and local governance elections.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="services-showcase-grid">
          {campaignServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-solution-card">
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
                      onClick={onOpenDemo}
                      className="service-enquire-link"
                    >
                      <span>Enquire About This Service</span>
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
              CONSTITUENCY-WIDE STRATEGY
            </span>
            <h3 className="banner-title">
              Looking for a Complete Campaign Solution?
            </h3>
            <p className="banner-text">
              Tell us about your constituency, campaign requirements, and communication needs. Our team will help you identify suitable solutions.
            </p>
          </div>
          <div className="banner-action">
            <button 
              type="button"
              onClick={onOpenDemo}
              className="btn btn-royal btn-lg"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
