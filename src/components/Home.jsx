export default function Home() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <div className="hero-text fade-in">
          <h1 className="hero-impact-title">
            <span className="hero-impact-first">REEZMA</span>{' '}
            <span className="hero-impact-accent">HANAN</span>
          </h1>

          <h2 className="hero-impact-role">Full-Stack &amp; AI / ML Engineer</h2>

          <p className="hero-impact-desc">
            I build scalable full-stack web applications, develop intelligent AI/ML models, and turn ideas into real-world impact.
          </p>

          {/* Career Growth & Opportunity Target */}
          <div className="hero-growth-card">
            <div className="growth-dot-pulse"></div>
            <span className="growth-statement-text">
              Looking forward to a <strong className="growth-role">Software Engineering Intern</strong> or{' '}
              <strong className="growth-role">Full-Stack Developer</strong> role where I can learn, contribute, and grow.
            </span>
          </div>

          {/* Connect With Me */}
          <div className="hero-connect-wrap">
            <span className="connect-label">Connect with me</span>
            <div className="hero-social-boxes">
              <a href="https://github.com/reezmahanan" target="_blank" rel="noreferrer" className="social-box" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/reezma-hanan" target="_blank" rel="noreferrer" className="social-box" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:reezmahanan@gmail.com" className="social-box" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> HIRE ME
            </a>
            <a href="Reezma_Hanan_Resume.pdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
              <i className="fas fa-file-download"></i> DOWNLOAD CV
            </a>
          </div>
        </div>

        <div className="hero-image-wrap fade-in">
          <div className="hero-portrait-stage">
            {/* Concentric Ambient Glow Background */}
            <div className="portrait-ambient-glow"></div>
            <div className="portrait-ambient-arc arc-outer"></div>
            <div className="portrait-ambient-arc arc-inner"></div>

            {/* Main Portrait Circle */}
            <div className="hero-portrait-frame">
              <img src="/profile.jpg" alt="Reezma Hanan" className="hero-portrait-photo" />
            </div>

            {/* Floating Badge 1: Top-Left (AI & ML) */}
            <div className="hero-floating-card badge-top-left">
              <div className="floating-card-icon icon-aiml">
                <i className="fas fa-brain"></i>
              </div>
              <div className="floating-card-text">
                <strong className="floating-card-title">AI &amp; ML</strong>
                <span className="floating-card-sub">Learner</span>
              </div>
            </div>

            {/* Floating Badge 2: Top-Right (Cloud & DevOps) */}
            <div className="hero-floating-card badge-top-right">
              <div className="floating-card-icon icon-devops">
                <i className="fas fa-infinity"></i>
              </div>
              <div className="floating-card-text">
                <strong className="floating-card-title">Cloud &amp; DevOps</strong>
                <span className="floating-card-sub">Learner</span>
              </div>
            </div>

            {/* Floating Badge 3: Bottom-Left (Full-Stack) */}
            <div className="hero-floating-card badge-bottom-left">
              <div className="floating-card-icon icon-stack">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="floating-card-text">
                <strong className="floating-card-title">Full-Stack</strong>
                <span className="floating-card-sub">Developer</span>
              </div>
            </div>

            {/* Floating Badge 4: Bottom-Right (Software) */}
            <div className="hero-floating-card badge-bottom-right">
              <div className="floating-card-icon icon-software">
                <i className="fas fa-code"></i>
              </div>
              <div className="floating-card-text">
                <strong className="floating-card-title">Software</strong>
                <span className="floating-card-sub">Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero-scroll-wrap fade-in">
        <a href="#about" className="hero-scroll-btn" aria-label="Scroll down to About section">
          <span className="scroll-text">Scroll Down</span>
          <i className="fas fa-chevron-down scroll-chevron"></i>
        </a>
      </div>
    </section>
  );
}