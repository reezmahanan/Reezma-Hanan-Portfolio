import { useState } from 'react';
import { openSourceData } from '../data/portfolioData';

export default function OpenSource() {
  const [activeFilter, setActiveFilter] = useState('all');
  // Store current slide index per program card
  const [slideIndices, setSlideIndices] = useState({});

  const filteredPrograms = openSourceData.filter((prog) => {
    if (activeFilter === 'all') return true;
    return prog.program === activeFilter;
  });

  const setSlideForCard = (cardIdx, slideIdx) => {
    setSlideIndices((prev) => ({
      ...prev,
      [cardIdx]: slideIdx,
    }));
  };

  return (
    <section className="opensource section" id="opensource">
      <div className="container">
        <div className="section-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-code-branch"></i>
              <span>Open Source</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Building Ideas.<br />
            <span className="section-hero-accent">SOLVING PROBLEMS.</span>
          </h2>

          <p className="section-hero-subtitle">
            Collaborating with global open-source codebases, building impactful software, and solving real-world challenges.
          </p>
        </div>

        {/* Program Switcher Tabs */}
        <div className="os-program-nav-tabs fade-in">
          <button
            className={`os-nav-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Programs (5)
          </button>
          <button
            className={`os-nav-tab ${activeFilter === 'swoc' ? 'active' : ''}`}
            onClick={() => setActiveFilter('swoc')}
          >
            SWOC &apos;26
          </button>
          <button
            className={`os-nav-tab ${activeFilter === 'oscg' ? 'active' : ''}`}
            onClick={() => setActiveFilter('oscg')}
          >
            OSCG &apos;26
          </button>
          <button
            className={`os-nav-tab ${activeFilter === 'ssoc' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ssoc')}
          >
            SSOC &apos;26
          </button>
          <button
            className={`os-nav-tab ${activeFilter === 'gssoc' ? 'active' : ''}`}
            onClick={() => setActiveFilter('gssoc')}
          >
            GSSOC &apos;26
          </button>
          <button
            className={`os-nav-tab ${activeFilter === 'osci' ? 'active' : ''}`}
            onClick={() => setActiveFilter('osci')}
          >
            OSCI &apos;26
          </button>
        </div>

        {/* Open Source Cards Grid */}
        <div className="opensource-cards-grid fade-in">
          {filteredPrograms.map((prog, idx) => {
            const currentSlide = slideIndices[idx] || 0;
            const slides = prog.slides || [];
            const activeSlideObj = slides[currentSlide] || slides[0];

            return (
              <div className="os-card card" data-program={prog.program} key={idx}>
                <div className="os-card-header">
                  <span className="os-badge collaborations">{prog.badge}</span>
                  <span className="os-doc-count-badge">
                    <i className="fas fa-file-contract"></i> {prog.docCount}
                  </span>
                </div>

                <h4>{prog.title}</h4>
                <p className="os-role">{prog.role}</p>

                {/* Evidence Viewer Slider */}
                {slides.length > 0 && (
                  <div className="os-evidence-slider">
                    {slides.length > 1 && (
                      <div className="os-slide-tabs-nav" style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        {slides.map((s, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            className={`os-slide-tab-btn ${currentSlide === sIdx ? 'active' : ''}`}
                            onClick={() => setSlideForCard(idx, sIdx)}
                          >
                            {s.label || `Doc ${sIdx + 1}`}
                          </button>
                        ))}
                      </div>
                    )}

                    {activeSlideObj && (
                      <div className="os-slide active" data-title={activeSlideObj.title}>
                        <img
                          src={
                            activeSlideObj.img.startsWith('/')
                              ? activeSlideObj.img
                              : `/${activeSlideObj.img}`
                          }
                          alt={activeSlideObj.label || 'Open Source Verification Evidence'}
                          className="os-evidence-img"
                          loading="lazy"
                        />
                        <div className="os-slide-footer">
                          <span className="os-slide-label">
                            <i className="fas fa-id-card"></i> {activeSlideObj.label}
                          </span>
                          <a
                            href={
                              activeSlideObj.img.startsWith('/')
                                ? activeSlideObj.img
                                : `/${activeSlideObj.img}`
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="os-expand-link"
                            title="Open Full Evidence"
                          >
                            <i className="fas fa-expand-alt"></i>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Orgs */}
                {prog.orgs && prog.orgs.length > 0 && (
                  <div className="os-orgs" style={{ margin: '0.75rem 0' }}>
                    <span className="os-orgs-label" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Assigned Repos / Orgs:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.3rem' }}>
                      {prog.orgs.map((org, oIdx) => (
                        <span className="os-tag" key={oIdx}>
                          {org}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="os-desc">{prog.desc}</p>

                {prog.bullets && prog.bullets.length > 0 && (
                  <ul className="os-bullets">
                    {prog.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}

                <div className="os-tech">
                  {prog.tech &&
                    prog.tech.map((t, tIdx) => (
                      <span className="tech-tag" key={tIdx}>
                        {t}
                      </span>
                    ))}
                </div>

                <div className="os-card-actions">
                  {prog.repo && (
                    <a
                      href={prog.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-mini-os"
                    >
                      <i className="fab fa-github"></i> Contributions
                    </a>
                  )}
                  {prog.verify && (
                    <a
                      href={prog.verify}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-mini-os verify-btn"
                    >
                      <i className="fas fa-shield-alt"></i> Verify
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
