import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide a valid name (at least 2 letters).';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/reezmahanan@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Could not submit form directly. Opening your default mail client as fallback.');
        window.location.href = `mailto:reezmahanan@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(formData.message)}`;
      }
    } catch {
      window.location.href = `mailto:reezmahanan@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Let&apos;s Connect.<br />
            <span className="section-hero-accent">BUILD TOGETHER.</span>
          </h2>

          <p className="section-hero-subtitle">
            Open for software engineering opportunities, impactful collaborations, and innovative conversations. Let&apos;s build something remarkable.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-in">
            <h3>Get in Touch</h3>
            <p>
              I&apos;m always open to discussing projects, web development collaborations, or just having a chat about technology and innovation.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:reezmahanan@gmail.com">reezmahanan@gmail.com</a>
                </div>
              </div>

              <div className="detail-item">
                <i className="fab fa-linkedin"></i>
                <div>
                  <strong>LinkedIn</strong>
                  <a href="https://linkedin.com/in/reezma-hanan" target="_blank" rel="noreferrer">
                    linkedin.com/in/reezma-hanan
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <i className="fab fa-github"></i>
                <div>
                  <strong>GitHub</strong>
                  <a href="https://github.com/reezmahanan" target="_blank" rel="noreferrer">
                    github.com/reezmahanan
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <i className="fab fa-hackerrank"></i>
                <div>
                  <strong>HackerRank</strong>
                  <a href="https://www.hackerrank.com/profile/reezmahanan" target="_blank" rel="noreferrer">
                    hackerrank.com/reezmahanan
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <i className="fab fa-medium"></i>
                <div>
                  <strong>Medium</strong>
                  <a href="https://medium.com/@reezmahanan" target="_blank" rel="noreferrer">
                    medium.com/@reezmahanan
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-globe"></i>
                <div>
                  <strong>Portfolio Site</strong>
                  <a href="https://portfolio-website-7mdi.vercel.app" target="_blank" rel="noreferrer">
                    portfolio-website-7mdi.vercel.app
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Location</strong>
                  <span>Batticaloa, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Connect Interests */}
            <div className="open-for-box card fade-in" style={{ marginTop: '2rem', padding: '1.75rem' }}>
              <h4
                style={{
                  marginBottom: '1.25rem',
                  color: 'var(--text-color)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderLeft: '3px solid var(--primary-color)',
                  paddingLeft: '0.5rem',
                }}
              >
                Open For
              </h4>

              <div className="open-for-grid">
                <div className="open-for-item card-item collaborations">
                  <span className="ofi-icon">
                    <i className="fas fa-users"></i>
                  </span>
                  <span className="ofi-text">Collaborations</span>
                </div>

                <div className="open-for-item card-item internships">
                  <span className="ofi-icon">
                    <i className="fas fa-briefcase"></i>
                  </span>
                  <span className="ofi-text">Internship Opportunities</span>
                </div>

                <div className="open-for-item card-item learning">
                  <span className="ofi-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </span>
                  <span className="ofi-text">Learning Together</span>
                </div>

                <div className="open-for-item card-item ideas">
                  <span className="ofi-icon">
                    <i className="fas fa-lightbulb"></i>
                  </span>
                  <span className="ofi-text">Project Ideas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card contact-form fade-in">
            <h3>Send Me a Message</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            {isSubmitted && (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  color: '#34d399',
                  padding: '1rem',
                  borderRadius: '10px',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
                {errors.name && <small className="form-error" style={{ color: '#ef4444' }}>{errors.name}</small>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
                {errors.email && <small className="form-error" style={{ color: '#ef4444' }}>{errors.email}</small>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                ></textarea>
                {errors.message && (
                  <small className="form-error" style={{ color: '#ef4444' }}>
                    {errors.message}
                  </small>
                )}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    Send Message <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>

              <p style={{ fontSize: '0.75rem', textAlign: 'center', color: 'var(--text-secondary)', marginTop: '1rem', opacity: 0.8 }}>
                Your information is safe with me.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}