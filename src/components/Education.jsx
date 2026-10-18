export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-graduation-cap"></i>
              <span>Education</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Always Learning.<br />
            <span className="section-hero-accent">ALWAYS GROWING.</span>
          </h2>

          <p className="section-hero-subtitle">
            Academic foundations, engineering qualifications, and continuous knowledge expansion driving my technical craft.
          </p>
        </div>

        <div className="education-timeline fade-in">
          {/* Edu Item 1 */}
          <div className="edu-timeline-item">
            <div className="edu-timeline-dot"></div>
            <div className="edu-timeline-content card">
              <div className="edu-header-wrap">
                <img
                  src="/screenshots/Institute of Technolgy UOM Logo.jpg"
                  alt="ITUM Logo"
                  className="edu-content-logo"
                />
                <div className="edu-header-text">
                  <span className="edu-date">
                    <i className="far fa-calendar-alt"></i> Oct 2024 - Present
                  </span>
                  <h4>National Diploma in Information Technology (NDT IT)</h4>
                  <span className="edu-institution">
                    Institute of Technology, University of Moratuwa (ITUM), Sri Lanka
                  </span>
                </div>
              </div>
              <span className="edu-loc">
                <i className="fas fa-map-marker-alt"></i> Diyagama, Homagama, Sri Lanka
              </span>
              <span className="edu-grade">
                <i className="fas fa-award"></i> Latest Semester GPA: 3.72
              </span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.6rem', lineHeight: '1.5' }}>
                Coursework in Web Development, Digital Marketing, Business Intelligence, Cybersecurity, Databases, and Software Engineering principles. Hands-on training in API design and deploying secure full-stack web applications.
              </p>
            </div>
          </div>

          {/* Edu Item 2 */}
          <div className="edu-timeline-item">
            <div className="edu-timeline-dot"></div>
            <div className="edu-timeline-content card">
              <div className="edu-header-wrap">
                <img
                  src="/screenshots/Odd.central College Logo.jpg"
                  alt="Oddamavadi Central College Logo"
                  className="edu-content-logo"
                />
                <div className="edu-header-text">
                  <span className="edu-date">
                    <i className="far fa-calendar-alt"></i> 2018 - 2020
                  </span>
                  <h4>GCE Advanced Level - Physical Science Stream</h4>
                  <span className="edu-institution">
                    BT/BC Oddamavadi Central College, Batticaloa, Sri Lanka
                  </span>
                </div>
              </div>
              <span className="edu-loc">
                <i className="fas fa-map-marker-alt"></i> Oddamavadi, Batticaloa, Sri Lanka
              </span>
              <span className="edu-grade">
                <i className="fas fa-award"></i> Physical Science Stream
              </span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.6rem', lineHeight: '1.5' }}>
                Focused on Combined Mathematics, Physics, and Chemistry. Developed strong analytical thinking, quantitative problem-solving capabilities, and logical foundations.
              </p>
            </div>
          </div>

          {/* Edu Item 3 */}
          <div className="edu-timeline-item">
            <div className="edu-timeline-dot"></div>
            <div className="edu-timeline-content card">
              <div className="edu-header-wrap">
                <img
                  src="/screenshots/Odd.Fathima Balika Logo.jpg"
                  alt="Oddamavadi Fathima Balika Logo"
                  className="edu-content-logo"
                />
                <div className="edu-header-text">
                  <span className="edu-date">
                    <i className="far fa-calendar-alt"></i> 2007 - 2018
                  </span>
                  <h4>GCE Ordinary Level</h4>
                  <span className="edu-institution">
                    BT/BC Oddamavadi Fathima Balika Maha Vidyalaya
                  </span>
                </div>
              </div>
              <span className="edu-loc">
                <i className="fas fa-map-marker-alt"></i> Oddamavadi, Batticaloa, Sri Lanka
              </span>
              <span className="edu-grade">
                <i className="fas fa-award"></i> Passed with 8 A&apos;s and B&apos;s
              </span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.6rem', lineHeight: '1.5' }}>
                Completed secondary education with top honors across Information Technology, Mathematics, Science, and English, laying early interest in computing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}