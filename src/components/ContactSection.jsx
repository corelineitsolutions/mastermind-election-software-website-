import React from 'react';
import { DemoForm } from './DemoForm';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="contact-lead-section section-padding" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            CONNECT WITH OUR SPECIALISTS
          </span>
          <h2 className="section-title">
            Let's Plan Your Next Campaign
          </h2>
          <p className="section-description">
            Connect with Mastermind Media for election software demonstrations, voter database solutions, and campaign management enquiries.
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
                  <div className="action-sublabel">Primary Helpline (Click to Call)</div>
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
                  <div className="action-sublabel">Campaign Support (Click to Call)</div>
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
                  <div className="action-sublabel">Direct WhatsApp Desk</div>
                  <div className="action-main-val">+91 96040 01344</div>
                </div>
              </a>
            </div>

            {/* Office Address Card */}
            <div className="contact-detail-card">
              <div className="detail-card-header">
                <MapPin size={22} className="text-royal" />
                <h3 className="detail-card-title">Corporate Headquarters</h3>
              </div>
              <p className="detail-card-address">
                <strong>Mastermind Media</strong><br />
                404, 4th Floor, B Wing, City Vista,<br />
                Kharadi, Pune – 411014, Maharashtra.
              </p>

              <a 
                href="https://maps.google.com/?q=City+Vista+Kharadi+Pune+411014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="location-map-link"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Business Hours & Support */}
            <div className="contact-detail-card">
              <div className="detail-card-header">
                <Clock size={20} className="text-royal" />
                <h3 className="detail-card-title">Business & Support Hours</h3>
              </div>
              <ul className="hours-bullet-list">
                <li>
                  <span className="days">Monday – Saturday:</span>
                  <span className="hours">10:00 AM – 7:30 PM IST</span>
                </li>
                <li>
                  <span className="days">Active Campaign / War Room:</span>
                  <span className="hours highlight">24/7 Priority Helpline</span>
                </li>
                <li>
                  <span className="days">Official Email:</span>
                  <a href="mailto:contact@mastermindmedias.com" className="email-link">contact@mastermindmedias.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Lead Enquiry Form */}
          <div className="contact-form-panel">
            <div className="form-panel-header">
              <h3 className="form-panel-title">Request a Consultation</h3>
              <p className="form-panel-subtitle">
                Fill out the details below. Our technical and campaign directors will get in touch promptly.
              </p>
            </div>

            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
};
