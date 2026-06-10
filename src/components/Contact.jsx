import { useState } from 'react';
import { Mail, MapPin, User, Tag, MessageSquare, Lock, Calendar, Check, Send, X, Code } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSending(true);
      fetch("https://formsubmit.co/ajax/reezmahanan@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.success === "true") {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({});
            setIsSending(false);
            setTimeout(() => setSubmitted(false), 5000);
          } else {
            console.error("FormSubmit error:", data);
            setIsSending(false);
          }
        })
        .catch(error => {
          console.error("Form submission error:", error);
          setIsSending(false);
        });
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const contactInfo = [
    { 
      icon: <Mail size={18} style={{ color: '#38bdf8' }} />, 
      label: 'Email', 
      value: 'reezmahanan@gmail.com', 
      link: 'mailto:reezmahanan@gmail.com' 
    },
    { 
      icon: <MapPin size={18} style={{ color: '#38bdf8' }} />, 
      label: 'Location', 
      value: 'Batticaloa, Sri Lanka', 
      link: null 
    },
    { 
      icon: <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
        alt="LinkedIn" 
        style={{ width: '18px', height: '18px', objectFit: 'contain' }} 
      />, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/reezma-hanan', 
      link: 'https://linkedin.com/in/reezma-hanan' 
    },
    { 
      icon: <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
        alt="GitHub" 
        style={{ width: '18px', height: '18px', objectFit: 'contain', filter: 'invert(1) brightness(1.5)' }} 
      />, 
      label: 'GitHub', 
      value: 'github.com/reezmahanan', 
      link: 'https://github.com/reezmahanan' 
    },
    { 
      icon: <Code size={18} style={{ color: '#38bdf8' }} />, 
      label: 'Google Dev', 
      value: 'g.dev/reezmahanan', 
      link: 'https://g.dev/reezmahanan' 
    },
    { 
      icon: <X size={18} style={{ color: '#38bdf8' }} />, 
      label: 'X (Twitter)', 
      value: 'x.com/HananReezma', 
      link: 'https://x.com/HananReezma' 
    },
  ];

  return (
    <section className="animate-fade-in" style={{ padding: '80px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        
        {/* Main Grid: Left Details & Right Form */}
        <div 
          className="contact-main-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.1fr', 
            gap: '4rem',
            alignItems: 'start'
          }}
        >
          {/* Left Side: Text and Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Let's Connect Badge */}
            <div style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              padding: '6px 14px',
              borderRadius: '20px',
              color: '#3b82f6',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              <Mail size={12} /> Let's Connect
            </div>

            <h2 style={{
              textAlign: 'left',
              fontSize: '3rem',
              fontWeight: '800',
              lineHeight: '1.15',
              margin: '0 0 2rem 0',
              color: '#fff',
              letterSpacing: '-1px'
            }}>
              Let's Build <br />
              <span style={{ 
                color: '#3b82f6', 
                fontFamily: 'inherit',
                fontWeight: '900',
                textTransform: 'uppercase',
                display: 'inline-block',
                margin: '4px 0'
              }}>Something Amazing</span> <br />
              Together!
            </h2>

            <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 0.5rem 0' }}>
              Get in Touch
            </h4>

            {/* List of Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="glass-card"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.25rem',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    background: 'rgba(13, 17, 28, 0.4)',
                    boxShadow: 'none',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.background = 'rgba(13, 17, 28, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.background = 'rgba(13, 17, 28, 0.4)';
                  }}
                >
                  <div 
                    style={{ 
                      width: 40, 
                      height: 40, 
                      background: 'rgba(56, 189, 248, 0.08)', 
                      border: '1px solid rgba(56, 189, 248, 0.15)',
                      borderRadius: '10px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#38bdf8',
                      flexShrink: 0
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                      {info.label}
                    </strong>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ 
                          color: '#fff', 
                          textDecoration: 'none', 
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '600', margin: 0 }}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Message Form Card */}
          <div 
            className="glass-card"
            style={{ 
              padding: '2.5rem',
              background: 'rgba(10, 15, 30, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '24px',
              boxShadow: 'var(--glass-shadow)',
              backdropFilter: 'var(--glass-blur)'
            }}
          >
            {/* Form Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(37, 99, 235, 0.12)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                color: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Send size={20} />
              </div>
              <div>
                <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 4px 0' }}>
                  Send Me a Message
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>
                  Fill out the form and I'll get back to you as soon as possible.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form 
              onSubmit={handleSubmit} 
              aria-label="Contact form" 
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {submitted && (
                <div 
                  role="alert" 
                  style={{ 
                    background: 'rgba(16, 185, 129, 0.15)', 
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#34d399', 
                    padding: '14px', 
                    borderRadius: '12px', 
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}
                >
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* Name & Email Row */}
              <div 
                className="form-row-2"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.25rem'
                }}
              >
                {/* Name Input */}
                <div style={{ position: 'relative' }}>
                  <span style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <User size={16} />
                  </span>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    aria-label="Your Name"
                    style={{ 
                      width: '100%', 
                      padding: '14px 14px 14px 42px', 
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${errors.name ? 'var(--error)' : 'rgba(255, 255, 255, 0.08)'}`, 
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition)'
                    }} 
                    onFocus={(e) => {
                      if (!errors.name) e.target.style.borderColor = 'var(--primary)';
                    }}
                    onBlur={(e) => {
                      if (!errors.name) e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    placeholder="Your Name" 
                    required
                  />
                  {errors.name && <span style={{ color: 'var(--error)', fontSize: '0.75rem', display: 'block', marginTop: '0.25rem' }}>{errors.name}</span>}
                </div>

                {/* Email Input */}
                <div style={{ position: 'relative' }}>
                  <span style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Mail size={16} />
                  </span>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    aria-label="Your Email"
                    style={{ 
                      width: '100%', 
                      padding: '14px 14px 14px 42px', 
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${errors.email ? 'var(--error)' : 'rgba(255, 255, 255, 0.08)'}`, 
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition)'
                    }} 
                    onFocus={(e) => {
                      if (!errors.email) e.target.style.borderColor = 'var(--primary)';
                    }}
                    onBlur={(e) => {
                      if (!errors.email) e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    placeholder="Your Email" 
                    required
                  />
                  {errors.email && <span style={{ color: 'var(--error)', fontSize: '0.75rem', display: 'block', marginTop: '0.25rem' }}>{errors.email}</span>}
                </div>
              </div>

              {/* Subject Input */}
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Tag size={16} />
                </span>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  aria-label="Subject"
                  style={{ 
                    width: '100%', 
                    padding: '14px 14px 14px 42px', 
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${errors.subject ? 'var(--error)' : 'rgba(255, 255, 255, 0.08)'}`, 
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'var(--transition)'
                  }} 
                  onFocus={(e) => {
                    if (!errors.subject) e.target.style.borderColor = 'var(--primary)';
                  }}
                  onBlur={(e) => {
                    if (!errors.subject) e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                  placeholder="Subject" 
                  required
                />
                {errors.subject && <span style={{ color: 'var(--error)', fontSize: '0.75rem', display: 'block', marginTop: '0.25rem' }}>{errors.subject}</span>}
              </div>

              {/* Message Textarea */}
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: '14px',
                  top: '16px',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <MessageSquare size={16} />
                </span>
                <textarea 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange}
                  aria-label="Your Message"
                  style={{ 
                    width: '100%', 
                    padding: '14px 14px 14px 42px', 
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${errors.message ? 'var(--error)' : 'rgba(255, 255, 255, 0.08)'}`, 
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'var(--transition)'
                  }} 
                  onFocus={(e) => {
                    if (!errors.message) e.target.style.borderColor = 'var(--primary)';
                  }}
                  onBlur={(e) => {
                    if (!errors.message) e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                  placeholder="Your Message"
                  required
                ></textarea>
                {errors.message && <span style={{ color: 'var(--error)', fontSize: '0.75rem', display: 'block', marginTop: '0.25rem' }}>{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSending}
                style={{ 
                  marginTop: '0.5rem',
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
                  opacity: isSending ? 0.7 : 1,
                  cursor: isSending ? 'not-allowed' : 'pointer'
                }}
              >
                <Send size={16} /> {isSending ? 'Sending Message...' : 'Send Message'}
              </button>

              {/* Bottom security text */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                marginTop: '0.5rem'
              }}>
                <Lock size={12} /> Your information is safe with me.
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Card: Let's Connect & Available For (no image layout) */}
        <div 
          className="glass-card"
          style={{ 
            padding: '2.5rem 3rem',
            background: 'rgba(10, 15, 30, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '24px',
            boxShadow: 'var(--glass-shadow)',
            backdropFilter: 'var(--glass-blur)'
          }}
        >
          <div 
            className="bottom-connect-grid"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1.2fr', 
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            {/* Left Side: Let's Connect Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <div 
                style={{ 
                  width: 44, 
                  height: 44, 
                  background: 'rgba(59, 130, 246, 0.1)', 
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#3b82f6'
                }}
              >
                <Calendar size={22} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '800', margin: '0.25rem 0 0 0' }}>
                Let's Connect!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                I'm always open to discussing projects, web development collaborations, or just having a chat about technology and innovation.
              </p>
            </div>

            {/* Right Side: Available For List */}
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.25rem',
                borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                paddingLeft: '3rem'
              }}
              className="available-list-wrapper"
            >
              <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>
                 Open For
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Collaborations',
                  'Internship Opportunities',
                  'Learning Together',
                  'Project Ideas'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      color: '#3b82f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .bottom-connect-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .available-list-wrapper {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
            padding-top: 2rem !important;
          }
        }
        @media (max-width: 550px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;