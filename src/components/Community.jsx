import { communityData } from '../data/portfolioData';

export default function Community() {
  return (
    <section className="gallery section" id="community">
      <div className="container">
        <div className="section-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-hands-helping"></i>
              <span>Volunteering &amp; Community</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Collaborating &amp; Giving Back.<br />
            <span className="section-hero-accent">COMMUNITY GALLERY.</span>
          </h2>

          <p className="section-hero-subtitle">
            Apart from my technical learning path, here is my collaborating and volunteering journey supporting student groups, cloud communities, and tech summits.
          </p>
        </div>

        <div className="community-gallery-grid fade-in">
          {communityData.map((item, idx) => (
            <div className="gallery-card card" key={idx}>
              <div className="gallery-img-frame">
                <img
                  src={item.img.startsWith('/') ? item.img : `/${item.img}`}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <a
                    href={item.img.startsWith('/') ? item.img : `/${item.img}`}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-zoom-btn"
                    title="View Full Document"
                  >
                    <i className="fas fa-expand-alt"></i> View Full Image
                  </a>
                </div>
              </div>

              <div className="gallery-content">
                <div className="gallery-meta">
                  <span className="gallery-badge">
                    <i className="fab fa-aws"></i> {item.badge}
                  </span>
                  <span className="gallery-role-tag">
                    <i className="fas fa-user-check"></i> {item.role}
                  </span>
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>

                <div className="gallery-card-footer">
                  <a
                    href={item.img.startsWith('/') ? item.img : `/${item.img}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-mini-os"
                  >
                    <i className="fas fa-image"></i> View Document
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
