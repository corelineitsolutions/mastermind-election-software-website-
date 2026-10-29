import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Printer, 
  CheckCircle2, 
  Search, 
  FileSpreadsheet, 
  Users, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Layers,
  MapPin,
  Calendar
} from 'lucide-react';

export const VoterDatabasePage = ({ onOpenDemo }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy-deep) 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="section-eyebrow section-eyebrow-gold" style={{ marginBottom: '1rem' }}>
            VOTER DATABASE & SLIP MANAGEMENT
          </span>
          <h1 className="page-hero-title">
            Structured Voter Intelligence & Precision Voter Slips
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.65, maxWidth: '760px', margin: '0 auto 2rem auto' }}>
            Streamline voter record organization, constituency-level indexing, print-ready voter slip layouts, and distribution tracking for assembly and municipal elections.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn btn-royal btn-lg">
              <span>Book a Software Demo</span>
              <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="btn btn-outline-white btn-lg">
              <span>Contact Campaign Experts</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Part 1: Voter Database Software Deep Dive */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">CENTRALIZED ENGINE</span>
              <h2 className="section-title">Voter Database Software</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Organize voter information, manage constituency-level records, and simplify election campaign planning through a centralized software solution.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'Structured voter record management', desc: 'Centralized indexing of every elector by age, gender, family unit, and polling booth.' },
                  { title: 'Constituency and polling-part organization', desc: 'Assembly, ward, and polling-part hierarchies mapped accurately to official electoral rolls.' },
                  { title: 'Search and filtering tools', desc: 'Instant lookups by voter name in English and Marathi, EPIC ID, house number, or serial.' },
                  { title: 'Data organization and reporting', desc: 'Automated demographic reports, age group analysis, and booth summary sheets.' },
                  { title: 'Authorized data import and export', desc: 'Secure import of official voter lists with export options for Excel and PDF karyakarta kits.' },
                  { title: 'Access-controlled information management', desc: 'Strict security permissions preventing unauthorized data sharing or leaks.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} color="var(--color-royal-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <strong style={{ color: 'var(--color-navy-dark)', fontSize: '0.975rem' }}>{item.title}:</strong>{' '}
                      <span style={{ color: '#64748B', fontSize: '0.925rem' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#F8FAFC', borderRadius: '24px', padding: '2.5rem', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Database size={28} className="text-royal" />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>
                  Constituency Database Highlights
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ padding: '1rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 700 }}>EPIC & SERIAL LOOKUP SPEED</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-royal-blue)' }}>Sub-100ms Query Retrieval</div>
                  <div style={{ fontSize: '0.875rem', color: '#4B5563' }}>Search through 300,000+ records seamlessly during intense war room operations.</div>
                </li>
                <li style={{ padding: '1rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 700 }}>LOCAL LANGUAGE ENGINE</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>Bilingual English & Marathi</div>
                  <div style={{ fontSize: '0.875rem', color: '#4B5563' }}>Phonetic search handles variations in Marathi and Hindi voter name spellings.</div>
                </li>
                <li style={{ padding: '1rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 700 }}>BOOTH VOLUNTEER SYNC</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10B981' }}>Live Karyakarta Tagging</div>
                  <div style={{ fontSize: '0.875rem', color: '#4B5563' }}>Track voter outreach status and mark contacted electors in real time.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Voter Slip Management & Printing */}
      <section className="section-padding" id="slip-management" style={{ background: '#F5F7FB', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Printer size={28} className="text-royal" />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>
                  Print-Ready Slip Formats
                </h3>
              </div>
              <p style={{ color: '#4B5563', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Whether printing pre-election voter slips in bulk at your central campaign office or printing on demand at polling day helpdesks, Mastermind Media supports all standard formats:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ color: 'var(--color-navy-dark)' }}>A4 Multi-Slip Sheet:</strong>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', margin: '0.25rem 0 0 0' }}>8 slips or 10 slips per A4 page with clear cut-lines, voter photo placement (where authorized), and booth QR codes.</p>
                </div>
                <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ color: 'var(--color-navy-dark)' }}>Thermal Bluetooth Slips:</strong>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', margin: '0.25rem 0 0 0' }}>Instant 2-inch and 3-inch roll printing directly from mobile phones at election booth helpdesks.</p>
                </div>
              </div>
            </div>

            <div>
              <span className="section-eyebrow">FIELD LOGISTICS</span>
              <h2 className="section-title">Voter Slip Management & Campaigning</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Streamline voter slip preparation, printing, distribution, and campaign coordination with efficient voter management tools.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { title: 'Voter slip preparation', desc: 'Automated batch layout generation formatted with serial numbers, booth addresses, and polling part numbers.' },
                  { title: 'Print-ready layouts', desc: 'Pre-formatted, ink-efficient print layouts optimized for rapid commercial printing or local desk printers.' },
                  { title: 'Booth-wise and part-wise organization', desc: 'Organize slips sequentially by room and part so karyakartas can distribute them house by house.' },
                  { title: 'Distribution tracking', desc: 'Log delivered slips versus undelivered households to ensure no voter is missed before polling day.' },
                  { title: 'Campaign task coordination', desc: 'Assign ward and booth targets to volunteer groups with live status reporting.' },
                  { title: 'Configurable printing formats', desc: 'Customizable headers with helpline contacts, polling date reminders, and candidate details.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} color="var(--color-royal-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <strong style={{ color: 'var(--color-navy-dark)', fontSize: '0.975rem' }}>{item.title}:</strong>{' '}
                      <span style={{ color: '#64748B', fontSize: '0.925rem' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={onOpenDemo} className="btn btn-royal btn-lg">
                <span>Book a Consultation for Your Constituency</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
