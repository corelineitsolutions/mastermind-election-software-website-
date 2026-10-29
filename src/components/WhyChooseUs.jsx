import React from 'react';
import { 
  Users, 
  Database, 
  Layers, 
  Cpu, 
  Sliders, 
  Headphones, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      num: '01',
      title: '500+ Political Leaders Served',
      desc: 'Experience supporting political leaders and campaign teams, subject to verification of the company\'s actual records.',
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
      desc: 'Reduce manual administrative effort through organized tools and workflows.',
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
      desc: 'Receive assistance with software demonstrations, implementation, onboarding, and project enquiries.',
      icon: Headphones
    }
  ];

  return (
    <section className="why-choose-section section-padding" id="why-choose-us">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            PROVEN ADVANTAGES
          </span>
          <h2 className="section-title">
            Why Political Teams Choose Mastermind Media
          </h2>
          <p className="section-description">
            Combining data security, local Maharashtra election experience, and full-spectrum campaign coordination under one accountable roof.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="benefits-grid">
          {benefits.map((b) => {
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
