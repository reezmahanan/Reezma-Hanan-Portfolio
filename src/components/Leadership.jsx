import { leadershipData } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section className="leadership-section section" id="leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-crown"></i>
              <span>Leadership Journey</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Empowering Teams.<br />
            <span className="section-hero-accent">ENGINEERING THROUGH COLLABORATION.</span>
          </h2>

          <p className="section-hero-subtitle">
            Beyond individual engineering, I take pride in leading student engineering teams, architecting system foundations, establishing Git workflows, and driving projects through evaluations and faculty viva defenses.
          </p>
        </div>

        {/* Leadership Highlights Metric Bar */}
        <div className="leadership-metrics-bar fade-in">
          <div className="leadership-metric-item">
            <div className="leadership-metric-icon">
              <i className="fas fa-users-cog"></i>
            </div>
            <div className="leadership-metric-content">
              <strong>3+ Engineering Teams Led</strong>
              <span>Full-Stack, Microcontrollers &amp; Supply Chain</span>
            </div>
          </div>

          <div className="leadership-metric-item">
            <div className="leadership-metric-icon">
              <i className="fas fa-code-branch"></i>
            </div>
            <div className="leadership-metric-content">
              <strong>Architectural Direction</strong>
              <span>System Schemas, REST APIs &amp; Git Workflows</span>
            </div>
          </div>

          <div className="leadership-metric-item">
            <div className="leadership-metric-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="leadership-metric-content">
              <strong>Successful Evaluations</strong>
              <span>Faculty Viva Defenses, Demos &amp; Module CAs</span>
            </div>
          </div>
        </div>

        {/* Leadership Projects Grid */}
        <div className="leadership-grid fade-in">
          {leadershipData.map((project, idx) => (
            <div className="leadership-card card" key={idx}>
              <div className="lead-card-media">
                <img
                  src={project.img.startsWith('/') ? project.img : `/${project.img}`}
                  alt={project.title}
                  className="lead-media-img"
                  loading="lazy"
                />
              </div>

              <div className="lead-card-body">
                <div className="lead-meta-row">
                  <span className="lead-badge">
                    <i className="fas fa-crown"></i> {project.badge}
                  </span>
                  <span className="lead-team-size">
                    <i className="fas fa-users"></i> {project.teamSize}
                  </span>
                  <span className="lead-role-title">
                    <i className="fas fa-shield-alt"></i> {project.role}
                  </span>
                </div>

                <h4>{project.title}</h4>
                <p className="lead-project-desc">{project.desc}</p>

                <div className="lead-key-contributions">
                  <strong>Key Leadership &amp; Engineering Contributions:</strong>
                  <ul>
                    {project.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="lead-tech-stack">
                  {project.tech.map((t, tIdx) => (
                    <span className="tech-tag" key={tIdx}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="lead-actions-row">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-lead-link"
                    >
                      <i className="fab fa-github"></i> Repository
                    </a>
                  )}
                  {project.post && (
                    <a
                      href={project.post}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-lead-post"
                    >
                      <i className="fab fa-linkedin"></i> LinkedIn Post
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
