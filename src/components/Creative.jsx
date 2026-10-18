import { creativeData } from '../data/portfolioData';

export default function Creative() {
  return (
    <section className="creative-section section" id="creative">
      <div className="container">
        {/* Section Header */}
        <div className="section-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-palette"></i>
              <span>Creative Works</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Visual Art &amp; Design.<br />
            <span className="section-hero-accent">PHOTOSHOP CREATIONS.</span>
          </h2>

          <p className="section-hero-subtitle">
            Apart from my technical software engineering journey, exploring visual creativity through surreal photo manipulation, digital brush drawing, and cinematic poster compositing.
          </p>
        </div>

        <div className="creative-grid fade-in">
          {creativeData.map((item, idx) => (
            <div className="creative-card card" key={idx}>
              <div className="creative-img-frame">
                <img
                  src={item.img.startsWith('/') ? item.img : `/${item.img}`}
                  alt={item.title}
                  className="creative-img"
                  loading="lazy"
                />
                <div className="creative-overlay">
                  <a
                    href={item.img.startsWith('/') ? item.img : `/${item.img}`}
                    target="_blank"
                    rel="noreferrer"
                    className="creative-zoom-btn"
                    title="View Full Artwork"
                  >
                    <i className="fas fa-expand-alt"></i> View Full Artwork
                  </a>
                </div>
              </div>

              <div className="creative-content">
                <div className="creative-meta">
                  <span className="creative-badge">
                    <i className="fas fa-magic"></i> {item.badge}
                  </span>
                  <span className="creative-tool-tag">
                    <i className="fas fa-layer-group"></i> {item.tool}
                  </span>
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>

                <div className="creative-tags-row">
                  {item.tags.map((t, tIdx) => (
                    <span className="badge badge-personal" key={tIdx}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="creative-card-footer">
                  <a
                    href={item.img.startsWith('/') ? item.img : `/${item.img}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-mini-os"
                  >
                    <i className="fas fa-external-link-alt"></i> Full Resolution
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
