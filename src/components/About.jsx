import { useState, useEffect } from 'react';

export default function About() {
  const [visitorCount, setVisitorCount] = useState(1);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('portfolio_visitor_count');
      let count = stored ? parseInt(stored, 10) : 0;
      count += 1;
      localStorage.setItem('portfolio_visitor_count', count.toString());
      setVisitorCount(count);
    } catch {
      setVisitorCount(1);
    }
  }, []);

  return (
    <section className="about section" id="about">
      <div className="container">
        {/* Hero Heading */}
        <div className="about-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-user"></i>
              <span>About Me</span>
            </span>
          </div>

          <h2 className="about-hero-title">
            Building Solutions,<br />
            <span className="about-hero-accent">ENGINEERING SCALABLE SYSTEMS.</span>
          </h2>
        </div>

        {/* Story Journey Card */}
        <div className="about-story-card fade-in">
          <p className="about-story-p">
            I’m <strong>Reezma Hanan</strong>, an Information Technology undergraduate at the Institute of Technology,
            University of Moratuwa (ITUM) from Batticaloa, Sri Lanka, with a strong interest in full-stack software
            engineering, REST API architecture, and machine learning.
          </p>

          <p className="about-story-p">
            I enjoy building practical solutions, learning modern technologies, and turning ideas into useful digital
            experiences. My journey is focused on improving my technical skills, exploring real-world engineering
            practices, and continuously growing as a software engineer in the tech industry.
          </p>

          <p className="about-story-p">
            Beyond standalone development, I actively contribute to open-source software repositories, publish in-depth
            architectural guides on Medium exploring cloud systems and databases, and collaborate on production-ready
            code. I believe that engineering excellence is built on continuous learning, clean architecture, and practical
            execution.
          </p>

          {/* Quote Callout Box */}
          <div className="about-quote-box">
            <div className="about-quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="about-quote-text">
              My goal is to keep learning, keep building, and engineer scalable software solutions that deliver
              real-world impact.
            </p>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="highlights-grid about-highlights-centered fade-in">
          <div className="highlight-card">
            <div className="hl-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h4>Education</h4>
            <p>
              NDT IT @ ITUM (Uni of Moratuwa)
              <br />
              Latest Semester GPA: 3.72
            </p>
          </div>

          <div className="highlight-card">
            <div className="hl-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <h4>Full-Stack &amp; ML</h4>
            <p>
              React, Spring Boot, Node.js
              <br />
              LightGBM &amp; Scikit-Learn
            </p>
          </div>

          <div className="highlight-card">
            <div className="hl-icon">
              <i className="fas fa-award"></i>
            </div>
            <h4>Credentials &amp; Impact</h4>
            <p>
              SWOC &apos;26 • GSSOC &apos;26 • SSOC &apos;26
              <br />
              25+ Verified Certifications
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="about-stats-bar fade-in">
          <div className="stat-item">
            <span className="stat-num">15+</span>
            <span className="stat-label">Technologies &amp; Tools</span>
          </div>

          <div className="stat-item">
            <span className="stat-num">12+</span>
            <span className="stat-label">Real-World Projects</span>
          </div>

          <div className="stat-item">
            <span className="stat-num">25+</span>
            <span className="stat-label">Certifications Earned</span>
          </div>

          <div className="stat-item">
            <span className="stat-num" id="visitorCount">
              {visitorCount}
            </span>
            <span className="stat-label">Profile Visitors</span>
          </div>
        </div>
      </div>
    </section>
  );
}