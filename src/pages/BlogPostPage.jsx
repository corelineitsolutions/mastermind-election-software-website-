import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, CheckCircle2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const BlogPostPage = ({ onOpenDemo }) => {
  const { slug } = useParams();
  const { t } = useLanguage();

  const article = blogArticles.find(a => a.slug === slug) || blogArticles[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const relatedArticles = blogArticles
    .filter(a => a.slug !== article.slug && (a.category === article.category || true))
    .slice(0, 3);

  // Format markdown headers into clean styled HTML sections
  const renderFormattedContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentKey = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      if (line.startsWith('## ')) {
        const cleanHeading = line.replace('## ', '').replace(/\{#.*?\}/, '').trim();
        elements.push(
          <h2 key={currentKey++} style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.75rem', 
            fontWeight: 800, 
            color: 'var(--color-navy-dark)', 
            marginTop: '2.5rem', 
            marginBottom: '1rem',
            lineHeight: 1.3
          }}>
            {cleanHeading}
          </h2>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={currentKey++} style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '0.6rem', 
            fontSize: '1.05rem', 
            color: '#374151', 
            lineHeight: 1.6,
            marginBottom: '0.6rem'
          }}>
            <span style={{ color: 'var(--color-orange-bright)', fontWeight: 800 }}>•</span>
            <span>{line.replace('- ', '')}</span>
          </li>
        );
      } else {
        elements.push(
          <p key={currentKey++} style={{ 
            fontSize: '1.075rem', 
            color: '#374151', 
            lineHeight: 1.8, 
            marginBottom: '1.25rem' 
          }}>
            {line}
          </p>
        );
      }
    }
    return elements;
  };

  return (
    <main style={{ paddingTop: '2rem' }}>
      {/* Breadcrumb Header */}
      <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '1.25rem 0' }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6B7280' }}>
            <Link to="/" style={{ color: 'inherit' }}>Home</Link>
            <ChevronRight size={14} />
            <Link to="/resources" style={{ color: 'inherit' }}>Resources & Blog</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-orange-red)', fontWeight: 600 }}>{article.category}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <article className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span className="blog-category-tag" style={{ fontSize: '0.8125rem', padding: '0.3rem 0.8rem' }}>
                {article.category}
              </span>
              <span style={{ fontSize: '0.875rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={15} /> {article.date}
              </span>
              <span style={{ fontSize: '0.875rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={15} /> {article.readTime}
              </span>
            </div>

            <h1 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '2.75rem', 
              fontWeight: 900, 
              color: 'var(--color-navy-dark)', 
              lineHeight: 1.2, 
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>
              {article.title}
            </h1>

            <p style={{ fontSize: '1.25rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '2rem', fontWeight: 500 }}>
              {article.excerpt}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', marginBottom: '2.5rem' }}>
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', background: 'var(--color-navy-dark)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem' }}>
                MM
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-navy-dark)' }}>{article.author}</div>
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Master Mind Medias Technical Editorial</div>
              </div>
            </div>

            {/* Layout Grid with Sticky Table of Contents & Article Body */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              {/* Table of Contents Box */}
              {article.toc && article.toc.length > 0 && (
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Table of Contents
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {article.toc.map((item, idx) => (
                      <li key={idx} style={{ fontSize: '0.9375rem' }}>
                        <a href={`#${item.id}`} style={{ color: '#2563EB', fontWeight: 600 }}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rendered Body */}
              <div style={{ fontSize: '1.1rem', color: '#374151', lineHeight: 1.8 }}>
                {renderFormattedContent(article.content)}
              </div>
            </div>

            {/* Mid-Article Demo Call to Action */}
            <div style={{ 
              marginTop: '3.5rem', 
              background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)', 
              borderRadius: '20px', 
              padding: '2.5rem', 
              border: '1.5px solid rgba(255,141,2,0.3)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
                Deploy Master Mind in Your Constituency
              </h3>
              <p style={{ color: '#4B5563', fontSize: '1rem', maxWidth: '580px', margin: '0 auto 1.5rem auto' }}>
                Speak with our election software engineers stationed in Pune, Maharashtra. We configure voter databases, train karyakartas, and set up your war room.
              </p>
              <button onClick={onOpenDemo} className="btn btn-orange btn-lg">
                <span>Book a Free Live Demonstration</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="section-padding" style={{ background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>
              Related Election Strategy Guides
            </h2>
            <Link to="/resources" style={{ color: 'var(--color-orange-red)', fontWeight: 700, fontSize: '0.875rem' }}>
              View All Articles →
            </Link>
          </div>

          <div className="blog-grid">
            {relatedArticles.map((rel) => (
              <article key={rel.slug} className="blog-card">
                <div className="blog-card-content">
                  <div className="blog-meta-row">
                    <span className="blog-category-tag">{rel.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={13} /> {rel.readTime}
                    </span>
                  </div>
                  <h3 className="blog-card-title">
                    <Link to={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="blog-card-excerpt">{rel.excerpt}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #F3F4F6' }}>
                    <Link to={`/blog/${rel.slug}`} className="blog-read-more">
                      <span>Read Guide</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
