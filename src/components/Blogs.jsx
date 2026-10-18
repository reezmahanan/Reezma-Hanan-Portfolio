import { useState } from 'react';
import { blogsData } from '../data/portfolioData';

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredBlogs = blogsData.filter((blog) => {
    // Check category match
    const matchesCategory =
      categoryFilter === 'all' || blog.category.toLowerCase().includes(categoryFilter.toLowerCase());

    // Check search term match
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !term ||
      blog.title.toLowerCase().includes(term) ||
      blog.desc.toLowerCase().includes(term) ||
      blog.tag.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="blogs section" id="blogs">
      <div className="container">
        {/* Hero Headline */}
        <div className="section-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-book-open"></i>
              <span>Blogs</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Sharing Knowledge,<br />
            <span className="section-hero-accent">INSPIRING GROWTH.</span>
          </h2>

          <p className="section-hero-subtitle">
            Sharing architectural breakdowns, and what I learn continuous my journey real-world engineering lessons from cloud systems, databases, and full-stack development.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="blog-search-container fade-in">
          <input
            type="text"
            id="blogSearch"
            className="blog-search-input"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search technical blog articles"
          />
          <i className="fas fa-search blog-search-icon"></i>
        </div>

        {/* Category Filter Buttons */}
        <div className="blog-filters-container fade-in">
          <button
            className={`blog-filter-btn ${categoryFilter === 'all' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('all')}
          >
            All
          </button>
          <button
            className={`blog-filter-btn ${categoryFilter === 'cloud' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('cloud')}
          >
            Cloud
          </button>
          <button
            className={`blog-filter-btn ${categoryFilter === 'devops' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('devops')}
          >
            DevOps
          </button>
          <button
            className={`blog-filter-btn ${categoryFilter === 'aws' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('aws')}
          >
            AWS
          </button>
          <button
            className={`blog-filter-btn ${categoryFilter === 'databases' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('databases')}
          >
            Databases
          </button>
          <button
            className={`blog-filter-btn ${categoryFilter === 'career' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('career')}
          >
            Engineering
          </button>
          <button
            className={`blog-filter-btn ${categoryFilter === 'other' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('other')}
          >
            Other
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-cards-grid fade-in" id="blogCardsGrid">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, idx) => (
              <article className="blog-card" data-category={blog.category} key={idx}>
                <div className="blog-thumb-wrap has-image">
                  <img
                    src={blog.img.startsWith('/') ? blog.img : `/${blog.img}`}
                    alt={blog.title}
                    className="blog-thumb-img"
                    loading="lazy"
                  />
                  {blog.overlay && (
                    <div className="blog-thumb-overlay">
                      <span className="blog-thumb-badge">{blog.overlay}</span>
                    </div>
                  )}
                </div>

                <div className="blog-card-body">
                  <div className="blog-meta-top">
                    <span className="blog-category-tag">{blog.tag}</span>
                    <span className="blog-read-time">
                      <i className="far fa-clock"></i> {blog.readTime}
                    </span>
                  </div>

                  <h4>{blog.title}</h4>
                  <p className="blog-desc">{blog.desc}</p>

                  <div className="blog-card-footer">
                    <span className="blog-date">{blog.date}</span>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      className="blog-read-btn"
                    >
                      Read on Medium <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-secondary)' }}>
              No articles found matching &quot;{searchTerm}&quot;.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
