import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Search, 
  Users, 
  MapPin, 
  ClipboardCheck, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowRight,
  Filter,
  Download,
  Eye,
  Sparkles
} from 'lucide-react';

export const ProductShowcase = ({ onOpenDemo }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGender, setFilterGender] = useState('all');

  // Anonymized sample records for live demonstration
  const sampleVoters = [
    { name: 'Prakash R. Deshmukh', epic: 'MH/42/109823', age: 48, gender: 'M', booth: '104', status: 'favorable', statusText: 'Supporter' },
    { name: 'Sunita A. Patil', epic: 'MH/42/109824', age: 42, gender: 'F', booth: '104', status: 'favorable', statusText: 'Supporter' },
    { name: 'Rahul V. Shinde', epic: 'MH/42/110452', age: 29, gender: 'M', booth: '105', status: 'neutral', statusText: 'Undecided' },
    { name: 'Meena K. Kulkarni', epic: 'MH/42/110453', age: 34, gender: 'F', booth: '105', status: 'favorable', statusText: 'Supporter' },
    { name: 'Anand G. More', epic: 'MH/42/111089', age: 56, gender: 'M', booth: '106', status: 'neutral', statusText: 'Undecided' },
    { name: 'Kavita S. Gaikwad', epic: 'MH/42/111090', age: 23, gender: 'F', booth: '106', status: 'favorable', statusText: 'Youth Lead' }
  ];

  const filteredVoters = sampleVoters.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.epic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.booth.includes(searchQuery);
    const matchesGender = filterGender === 'all' || v.gender === filterGender;
    return matchesSearch && matchesGender;
  });

  const tabs = [
    { id: 'search', label: t('showcase.tabs.search'), icon: Search },
    { id: 'lists', label: t('showcase.tabs.lists'), icon: Users },
    { id: 'booths', label: t('showcase.tabs.booths'), icon: MapPin },
    { id: 'surveys', label: t('showcase.tabs.surveys'), icon: ClipboardCheck },
    { id: 'exports', label: t('showcase.tabs.exports'), icon: FileSpreadsheet }
  ];

  return (
    <section className="section-padding" id="product-showcase" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} />
            {t('showcase.eyebrow')}
          </span>
          <h2 className="section-title">{t('showcase.title')}</h2>
          <p className="section-description">{t('showcase.subtitle')}</p>
        </div>

        <div className="showcase-wrapper">
          {/* Tab Selection Bar */}
          <div className="showcase-tab-bar" role="tablist">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`showcase-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="showcase-content-grid">
            {/* Left: Detailed Text Explanations */}
            <div className="showcase-text-col">
              {activeTab === 'search' && (
                <>
                  <h3>{t('showcase.searchTab.title')}</h3>
                  <p>{t('showcase.searchTab.desc')}</p>
                  <ul className="showcase-feature-points">
                    {t('showcase.searchTab.points').map((pt, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} color="var(--color-orange-bright)" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'lists' && (
                <>
                  <h3>{t('showcase.listsTab.title')}</h3>
                  <p>{t('showcase.listsTab.desc')}</p>
                  <ul className="showcase-feature-points">
                    {t('showcase.listsTab.points').map((pt, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} color="var(--color-orange-bright)" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'booths' && (
                <>
                  <h3>{t('showcase.boothsTab.title')}</h3>
                  <p>{t('showcase.boothsTab.desc')}</p>
                  <ul className="showcase-feature-points">
                    {t('showcase.boothsTab.points').map((pt, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} color="var(--color-orange-bright)" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'surveys' && (
                <>
                  <h3>{t('showcase.surveysTab.title')}</h3>
                  <p>{t('showcase.surveysTab.desc')}</p>
                  <ul className="showcase-feature-points">
                    {t('showcase.surveysTab.points').map((pt, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} color="var(--color-orange-bright)" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'exports' && (
                <>
                  <h3>{t('showcase.exportsTab.title')}</h3>
                  <p>{t('showcase.exportsTab.desc')}</p>
                  <ul className="showcase-feature-points">
                    {t('showcase.exportsTab.points').map((pt, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} color="var(--color-orange-bright)" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <button 
                onClick={onOpenDemo}
                className="btn btn-orange"
                style={{ marginTop: '1rem' }}
              >
                <span>{t('showcase.cta')}</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right: Live Interactive Simulation / Product Preview */}
            <div className="showcase-live-panel">
              {activeTab === 'search' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-navy-dark)' }}>
                        Live Search Console (Sample Anonymized Data)
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', background: '#E0F2FE', color: '#0369A1', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontWeight: 600 }}>
                      {filteredVoters.length} Matches Found
                    </span>
                  </div>

                  <div className="simulated-search-box">
                    <input
                      type="text"
                      className="simulated-input"
                      placeholder={t('showcase.searchTab.searchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <select
                      className="simulated-input"
                      style={{ maxWidth: '140px' }}
                      value={filterGender}
                      onChange={(e) => setFilterGender(e.target.value)}
                    >
                      <option value="all">All Genders</option>
                      <option value="M">Male Only</option>
                      <option value="F">Female Only</option>
                    </select>
                  </div>

                  <div className="simulated-table-wrap">
                    <table className="simulated-table">
                      <thead>
                        <tr>
                          <th>{t('showcase.searchTab.colName')}</th>
                          <th>{t('showcase.searchTab.colEpic')}</th>
                          <th>{t('showcase.searchTab.colAge')}</th>
                          <th>{t('showcase.searchTab.colBooth')}</th>
                          <th>{t('showcase.searchTab.colStatus')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredVoters.map((voter, i) => (
                          <tr key={i}>
                            <td style={{ fontWeight: 600 }}>{voter.name}</td>
                            <td style={{ fontFamily: 'monospace', color: '#4B5563' }}>{voter.epic}</td>
                            <td>{voter.age} yrs / {voter.gender}</td>
                            <td>Booth #{voter.booth}</td>
                            <td>
                              <span className={`status-badge ${voter.status === 'favorable' ? 'status-favorable' : 'status-neutral'}`}>
                                {voter.statusText}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'lists' && (
                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #F3F4F6', paddingBottom: '0.75rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy-dark)' }}>Household Family Register</h4>
                      <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>House No. 42/B, Shivaji Nagar, Ward 14</p>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange-red)', background: 'rgba(255, 141, 2, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>
                      5 Family Electors
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {[
                      { role: 'Head of Family', name: 'Rameshwar D. Kulkarni', age: 62, epic: 'MH/42/100412' },
                      { role: 'Spouse', name: 'Shobha R. Kulkarni', age: 58, epic: 'MH/42/100413' },
                      { role: 'Son', name: 'Aditya R. Kulkarni', age: 31, epic: 'MH/42/100414' },
                      { role: 'Daughter-in-law', name: 'Pooja A. Kulkarni', age: 28, epic: 'MH/42/100415' }
                    ].map((m, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.8rem', background: '#F9FAFB', borderRadius: '6px', fontSize: '0.8125rem' }}>
                        <div>
                          <strong style={{ color: '#111827' }}>{m.name}</strong>
                          <span style={{ color: '#6B7280', marginLeft: '0.5rem' }}>({m.role}, {m.age} yrs)</span>
                        </div>
                        <span style={{ fontFamily: 'monospace', color: '#2563EB', fontWeight: 600 }}>{m.epic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'booths' && (
                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy-dark)' }}>Booth Prabhari Deployment</h4>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', background: '#D1FAE5', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                      98.4% Staffed
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '6px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>284</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>Total Polling Booths</div>
                    </div>
                    <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '6px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-orange-bright)' }}>2,840</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>Page Pramukhs</div>
                    </div>
                    <div style={{ background: '#F8FAFC', padding: '0.85rem', borderRadius: '6px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10B981' }}>2.94 L</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>Verified Electors</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.8125rem', padding: '0.75rem', background: '#FFFBEB', borderRadius: '6px', border: '1px solid #FDE68A', color: '#92400E' }}>
                    <strong>Instant Booth Dispatch:</strong> Send designated booth lists directly to authorized booth worker's WhatsApp in 1-click.
                  </div>
                </div>
              )}

              {activeTab === 'surveys' && (
                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy-dark)' }}>Live Voter Sentiment Survey</h4>
                    <span style={{ fontSize: '0.75rem', background: '#ECFDF5', color: '#059669', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontWeight: 700 }}>
                      GPS Verified
                    </span>
                  </div>

                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1F2937', marginBottom: '0.75rem' }}>
                    Q: What is the most critical infrastructure priority in Ward 08?
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                    {[
                      { option: 'Drinking Water Pipeline & Pressure', pct: '48%', color: '#FF7800' },
                      { option: 'Internal Road Concreting & Drainage', pct: '32%', color: '#3B82F6' },
                      { option: 'Primary Health Clinic & Doctors', pct: '14%', color: '#10B981' },
                      { option: 'Street Lighting & Public Safety', pct: '6%', color: '#6B7280' }
                    ].map((s, i) => (
                      <div key={i} style={{ background: '#F9FAFB', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                          <span>{s.option}</span>
                          <span style={{ color: s.color }}>{s.pct}</span>
                        </div>
                        <div style={{ height: '6px', background: '#E5E7EB', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: s.pct, height: '100%', background: s.color, borderRadius: '3px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'exports' && (
                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy-dark)' }}>Export Manager</h4>
                    <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>PDF & Excel Ready</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ border: '1px solid #E5E7EB', borderRadius: '6px', padding: '0.85rem', background: '#F9FAFB' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FileSpreadsheet size={20} color="#10B981" />
                        <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>Excel Roster</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#6B7280', marginBottom: '0.75rem' }}>
                        Multi-filtered spreadsheet with booth, serial, and contact columns.
                      </p>
                      <button 
                        onClick={() => alert('Sample Excel Report generated for Booth #104 (Protected Demo)')}
                        className="btn btn-secondary" 
                        style={{ width: '100%', padding: '0.4rem', fontSize: '0.75rem' }}
                      >
                        <Download size={14} /> Download Sample
                      </button>
                    </div>

                    <div style={{ border: '1px solid #E5E7EB', borderRadius: '6px', padding: '0.85rem', background: '#F9FAFB' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FileSpreadsheet size={20} color="#EF4444" />
                        <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>Printable Slips</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#6B7280', marginBottom: '0.75rem' }}>
                        Official Matdar Chitti format with candidate photo & QR code.
                      </p>
                      <button 
                        onClick={() => alert('Sample Printable Voter Slip Preview generated (Protected Demo)')}
                        className="btn btn-secondary" 
                        style={{ width: '100%', padding: '0.4rem', fontSize: '0.75rem' }}
                      >
                        <Eye size={14} /> Preview Slips
                      </button>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: '#6B7280', textAlign: 'center' }}>
                    Encrypted downloads protected with authorized war room login credentials.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
