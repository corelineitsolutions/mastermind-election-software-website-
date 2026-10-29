import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users,
  CheckCircle2,
  MapPin
} from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="about-overview-section section-padding" id="about-us">
      <div className="container">
        <div className="about-two-column-layout">
          {/* Left Column: Heading, Content, Mission & Vision, CTA */}
          <div className="about-text-column">
            <span className="section-eyebrow">
              ABOUT OUR COMPANY
            </span>
            <h2 className="section-title">
              Mastermind Media — Election Experts
            </h2>

            <div className="about-body-narrative">
              <p className="narrative-lead">
                At Mastermind Media, we combine technology, communication, and strategic planning to deliver comprehensive election management solutions.
              </p>
              <p>
                Trusted by 500+ political leaders, we specialize in election management software, voter database solutions, and integrated campaign services across Maharashtra.
              </p>
              <blockquote className="about-quote-box">
                <p className="quote-text">
                  “We don't just build apps; we engineer election victories.”
                </p>
                <span className="quote-disclaimer">
                  *Statement reflects our engineering standard and strategic dedication; not an electoral guarantee.
                </span>
              </blockquote>
              <p>
                Our mission is to simplify campaign operations, improve coordination, and empower political teams with reliable digital tools.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="mv-card-header">
                  <div className="mv-icon-box mission">
                    <Target size={20} />
                  </div>
                  <h3 className="mv-card-title">Our Mission</h3>
                </div>
                <p className="mv-card-desc">
                  Simplify election operations through reliable technology, organized workflows, and professional campaign support.
                </p>
              </div>

              <div className="vision-card">
                <div className="mv-card-header">
                  <div className="mv-icon-box vision">
                    <Compass size={20} />
                  </div>
                  <h3 className="mv-card-title">Our Vision</h3>
                </div>
                <p className="mv-card-desc">
                  Become a trusted election technology and campaign solutions partner for political teams across India.
                </p>
              </div>
            </div>

            <div className="about-cta-row">
              <Link to="/about" className="btn btn-royal btn-lg">
                <span>Learn More About Us</span>
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
                  <div className="floating-card-title">Headquartered in Pune</div>
                  <div className="floating-card-sub">City Vista, Kharadi, Maharashtra</div>
                </div>
              </div>

              {/* Floating Verified Trust Card */}
              <div className="about-floating-card trust-badge-card">
                <Award size={20} className="text-gold" />
                <div>
                  <div className="floating-card-title">500+ Political Leaders</div>
                  <div className="floating-card-sub">Served Across Assemblies & Councils</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
