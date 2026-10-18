import { flagshipProjects, extraProjects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-laptop-code"></i>
              <span>Projects</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Turning Ideas.<br />
            <span className="section-hero-accent">BUILDING SOLUTIONS.</span>
          </h2>

          <p className="section-hero-subtitle">
            A collection of projects where I turn ideas into practical solutions, apply my technical skills, and solve real-world problems.
          </p>
        </div>

        {/* Flagship Projects Grid */}
        <div className="projects-grid fade-in">
          {flagshipProjects.map((project, idx) => (
            <div className="card project-card" key={idx}>
              {project.img ? (
                <div className="project-banner-visual project-banner-image-mode">
                  <img
                    src={project.img.startsWith('/') ? project.img : `/${project.img}`}
                    alt={project.title}
                    className="project-banner-real-img"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className="project-banner-visual"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(22, 101, 52, 0.4) 0%, rgba(15, 23, 42, 0.95) 100%)',
                  }}
                >
                  <div className="project-banner-icon" style={{ color: '#10b981' }}>
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div className="project-banner-title">{project.bannerTitle}</div>
                  <div className="project-banner-sub">{project.bannerSub}</div>
                  {project.bannerStat && (
                    <div className="project-banner-stat" style={{ color: '#34d399' }}>
                      <i className="fas fa-chart-line"></i> {project.bannerStat}
                    </div>
                  )}
                </div>
              )}

              <div className="project-body">
                <div className="project-meta-tags">
                  {project.meta.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className={`badge ${
                        m.toLowerCase().includes('flagship')
                          ? 'badge-flagship'
                          : m.toLowerCase().includes('university')
                          ? 'badge-academic'
                          : m.toLowerCase().includes('machine')
                          ? 'badge-ml'
                          : 'badge-personal'
                      }`}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desc}</p>

                <div className="project-tech">
                  {project.tags.map((tag, tIdx) => (
                    <span className="tech-tag" key={tIdx}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.repo && (
                    <a
                      href={project.repo}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i> Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Projects Grid */}
        <div className="extra-projects-wrapper fade-in" style={{ marginTop: '3.5rem' }}>
          <details className="projects-details">
            <summary className="btn-see-more">
              <i className="fas fa-chevron-down"></i> View Additional Repositories, Prototypes &amp; Team Projects (13+)
            </summary>

            <div className="extra-projects-grid">
              {extraProjects.map((mini, idx) => (
                <div className="card project-card mini-project" key={idx}>
                  {mini.img ? (
                    <img
                      src={mini.img.startsWith('/') ? mini.img : `/${mini.img}`}
                      alt={mini.title}
                      className="mini-project-img"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="mini-project-visual"
                      style={{
                        background:
                          'radial-gradient(circle at center, rgba(147, 51, 234, 0.4) 0%, rgba(15, 23, 42, 0.95) 100%)',
                      }}
                    >
                      <div className="mini-banner-icon" style={{ color: '#c084fc' }}>
                        <i className="fas fa-brain"></i>
                      </div>
                      <div className="mini-banner-title">{mini.bannerTitle || mini.title}</div>
                      {mini.bannerStat && (
                        <div className="mini-banner-stat" style={{ color: '#e9d5ff' }}>
                          <i className="fas fa-chart-line"></i> {mini.bannerStat}
                        </div>
                      )}
                    </div>
                  )}

                  <h4>{mini.title}</h4>
                  <p>{mini.desc}</p>
                  <span className="mini-tech">{mini.tech}</span>
                  <div>
                    {mini.link && (
                      <a
                        href={mini.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mini-link"
                      >
                        Code <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}