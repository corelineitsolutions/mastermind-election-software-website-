import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const ResourcesPage = ({ onOpenDemo }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'UP Elections',
    'Maharashtra Elections',
    'Booth Management',
    'Voter Database',
    'Data Analytics',
    'Local Elections',
    'Constituency Guides',
    'Digital Marketing',
    'Software Guide'
  ];

  const filteredArticles = blogArticles.filter(art => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesQuery = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const featuredArticle = blogArticles[0];

  return (
    <main style={{ paddingTop: '2rem' }}>
      {/* Blog Hub Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #111827 0%, #1E293B 100%)', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,120,0,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px' }}>
          <span className="section-eyebrow" style={{ background: 'rgba(255,179,66,0.15)', color: 'var(--color-amber-warm)', border: '1px solid rgba(255,179,66,0.3)' }}>
            <BookOpen size={14} />
            ELECTION KNOWLEDGE HUB & BLOG
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.25rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Election Strategy, Booth Operations & Voter Analytics
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#D1D5DB', lineHeight: 1.65 }}>
            Practical guides, constituency playbooks, and technology insights from Maharashtra's leading election software engineers.
          </p>
        </div>
      </section>

      {/* Featured Article Banner */}
      {selectedCategory === 'All' && !searchQuery && (
        <section style={{ padding: '3rem 0', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ 
              background: '#FFFFFF', 
              borderRadius: '24px', 
              border: '1px solid #E5E7EB', 
              overflow: 'hidden', 
              display: 'grid', 
              gridTemplateColumns: '1.2fr 0.8fr', 
              boxShadow: 'var(--shadow-lg)' 
            }}>
              <div style={{ padding: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ background: 'rgba(255,141,2,0.1)', color: 'var(--color-orange-red)', fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 0.8rem', borderRadius: '9999px', textTransform: 'uppercase' }}>
                    Featured Article
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} /> {featuredArticle.date}
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} /> {featuredArticle.readTime}
                  </span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-navy-dark)', lineHeight: 1.25, marginBottom: '1rem' }}>
                  <Link to={`/blog/${featuredArticle.slug}`} style={{ color: 'inherit' }}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {featuredArticle.excerpt}
                </p>

                <Link to={`/blog/${featuredArticle.slug}`} className="btn btn-orange">
                  <span>Read Complete Strategy Guide</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #FF8D02, #FF1E00)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2.5rem', color: '#FFFFFF', textAlign: 'center' }}>
                <div>
                  <div style={{ width: '4.5rem', height: '4.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <Sparkles size={36} color="#FFFFFF" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Field-Tested Electoral Strategy
                  </h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>
                    Actionable blueprints designed for Gram Panchayat, Nagar Parishad, ZP, and Vidhan Sabha leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Filter & Listing */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="blog-filter-bar">
            {/* Category Pills */}
            <div className="blog-category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="blog-search-wrap">
              <Search size={16} className="blog-search-icon" />
              <input
                type="text"
                placeholder="Search election articles..."
                className="blog-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#F9FAFB', borderRadius: '16px' }}>
              <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
                No articles found matching "{searchQuery}". Try a different search term or category.
              </p>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredArticles.map((art) => (
                <article key={art.slug} className="blog-card">
                  <div className="blog-card-content">
                    <div className="blog-meta-row">
                      <span className="blog-category-tag">{art.category}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={13} /> {art.readTime}
                      </span>
                    </div>

                    <h3 className="blog-card-title">
                      <Link to={`/blog/${art.slug}`}>{art.title}</Link>
                    </h3>

                    <p className="blog-card-excerpt">{art.excerpt}</p>

                    <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #F3F4F6' }}>
                      <Link to={`/blog/${art.slug}`} className="blog-read-more">
                        <span>Read Full Guide</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
