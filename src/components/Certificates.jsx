import { useState } from 'react';
import { topCertificates, certListRows, badgesData } from '../data/portfolioData';

export default function Certificates() {
  const [activeTab, setActiveTab] = useState('certificates');
  const [certFilter, setCertFilter] = useState('all');

  const filteredCertRows = certListRows.filter((item) => {
    if (certFilter === 'all') return true;
    return item.category === certFilter;
  });

  return (
    <section className="certs section" id="certs">
      <div className="container">
        <div className="section-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-certificate"></i>
              <span>Certificates</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Continuous Learning.<br />
            <span className="section-hero-accent">CONTINUOUS GROWTH.</span>
          </h2>

          <p className="section-hero-subtitle">
            A collection of certifications and learning milestones that reflect my continuous growth, expanding knowledge, and commitment to staying current with technology.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="certs-tabs-buttons fade-in">
          <button
            className={`cert-tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            Certificates
          </button>
          <button
            className={`cert-tab-btn ${activeTab === 'badges' ? 'active' : ''}`}
            onClick={() => setActiveTab('badges')}
          >
            Badges
          </button>
        </div>

        <div className="certs-tabs-content fade-in">
          {/* Certificates Pane */}
          {activeTab === 'certificates' && (
            <div className="certs-tab-pane active" id="certificates-pane">
              {/* Highlighted Top Certs */}
              <div className="top-certs-gallery">
                <h3>Highlighted Top Certifications</h3>
                <div className="top-certs-grid">
                  {topCertificates.map((cert, idx) => (
                    <div className="cert-card card" key={idx}>
                      <div className="cert-image-frame">
                        <img
                          src={cert.img.startsWith('/') ? cert.img : `/${cert.img}`}
                          alt={cert.title}
                          loading="lazy"
                        />
                      </div>
                      <div className="cert-content">
                        <h4>{cert.title}</h4>
                        <span className="cert-issuer">{cert.issuer}</span>

                        {cert.skillsLinks && cert.skillsLinks.length > 0 ? (
                          <div style={{ fontSize: '0.75rem', marginTop: '0.35rem' }}>
                            {cert.skillsLinks.map((sl, sIdx) => (
                              <span key={sIdx}>
                                <a
                                  href={sl.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="verify-link"
                                >
                                  {sl.name}
                                </a>
                                {sIdx < cert.skillsLinks.length - 1 ? ' • ' : ''}
                              </span>
                            ))}
                          </div>
                        ) : (
                          cert.verify && (
                            <a
                              href={cert.verify}
                              target="_blank"
                              rel="noreferrer"
                              className="verify-link"
                              style={{ marginTop: '0.5rem' }}
                            >
                              Verify
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collapsible Certifications List */}
              <div className="extra-certs-wrapper fade-in text-center" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                <details className="certs-details" style={{ textAlign: 'center' }}>
                  <summary className="btn-see-more">
                    <i className="fas fa-chevron-down"></i> View Additional Foundations &amp; Credentials
                  </summary>

                  <div className="skills-subfilters" style={{ marginTop: '2rem' }}>
                    <button
                      className={`subfilter-btn ${certFilter === 'all' ? 'active' : ''}`}
                      onClick={() => setCertFilter('all')}
                    >
                      All Certificates
                    </button>
                    <button
                      className={`subfilter-btn ${certFilter === 'prog' ? 'active' : ''}`}
                      onClick={() => setCertFilter('prog')}
                    >
                      Programming
                    </button>
                    <button
                      className={`subfilter-btn ${certFilter === 'web' ? 'active' : ''}`}
                      onClick={() => setCertFilter('web')}
                    >
                      Web &amp; Design
                    </button>
                    <button
                      className={`subfilter-btn ${certFilter === 'db' ? 'active' : ''}`}
                      onClick={() => setCertFilter('db')}
                    >
                      Databases
                    </button>
                    <button
                      className={`subfilter-btn ${certFilter === 'cloud' ? 'active' : ''}`}
                      onClick={() => setCertFilter('cloud')}
                    >
                      Cloud
                    </button>
                    <button
                      className={`subfilter-btn ${certFilter === 'sec' ? 'active' : ''}`}
                      onClick={() => setCertFilter('sec')}
                    >
                      Security
                    </button>
                    <button
                      className={`subfilter-btn ${certFilter === 'tools' ? 'active' : ''}`}
                      onClick={() => setCertFilter('tools')}
                    >
                      Tools &amp; AI
                    </button>
                  </div>

                  <div className="certs-list-grid" style={{ marginTop: '1.5rem' }}>
                    {filteredCertRows.map((row, idx) => (
                      <div className="cert-list-row card" data-cat={row.category} key={idx}>
                        <strong>{row.title}</strong>
                        <span>{row.issuer}</span>
                        <div className="cert-row-links">
                          {row.viewLink && (
                            <a
                              href={row.viewLink.startsWith('/') ? row.viewLink : `/${row.viewLink}`}
                              target="_blank"
                              rel="noreferrer"
                              className="cert-view-btn"
                            >
                              <i className="fas fa-image"></i> View
                            </a>
                          )}
                          {row.verifyLink && (
                            <a
                              href={row.verifyLink}
                              target="_blank"
                              rel="noreferrer"
                              className="verify-link"
                            >
                              Verify <i className="fas fa-external-link-alt"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          )}

          {/* Badges Pane */}
          {activeTab === 'badges' && (
            <div className="certs-tab-pane active" id="badges-pane">
              <div className="top-certs-grid">
                {badgesData.map((badge, idx) => (
                  <div className="badge-item card" key={idx}>
                    <div className="badge-img-frame">
                      <img
                        src={badge.img.startsWith('/') ? badge.img : `/${badge.img}`}
                        alt={badge.title}
                        loading="lazy"
                      />
                    </div>
                    <h4>{badge.title}</h4>
                    <span className="badge-issuer">{badge.issuer}</span>
                    {badge.verify && (
                      <a
                        href={badge.verify}
                        target="_blank"
                        rel="noreferrer"
                        className="verify-link"
                        style={{ marginTop: '0.4rem' }}
                      >
                        Verify Credential
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}