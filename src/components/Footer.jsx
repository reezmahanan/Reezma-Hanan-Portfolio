import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer 
      style={{ 
        background: 'rgba(13, 17, 28, 0.6)', 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        color: 'var(--text-primary)', 
        padding: '1.5rem 0 1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div 
          className="footer-grid"
          style={{ 
            display: 'grid', 
            gap: '1.5rem', 
            marginBottom: '1.5rem' 
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.4rem', fontWeight: 800 }}>
              Reezma <span className="gradient-text-accent">Hanan</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
              Crafting Code, Building Dreams
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
              Passionate about creating secure, responsive, and user-centered web applications.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>
              Explore
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              margin: 0, 
              padding: 0, 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '0.35rem 1rem' 
            }}>
              <li><Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>About</Link></li>
              <li><Link to="/education" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Education</Link></li>
              <li><Link to="/skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Skills</Link></li>
              <li><Link to="/certificates" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Certificates</Link></li>
              <li><Link to="/projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Projects</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>
              Let's Connect
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a 
                href="https://github.com/reezmahanan" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none', 
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'var(--transition)' 
                }} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/reezma-hanan" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none', 
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'var(--transition)' 
                }} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                LinkedIn
              </a>
              <a 
                href="https://www.hackerrank.com/profile/reezmahanan" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none', 
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'var(--transition)' 
                }} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                HackerRank
              </a>
              <a 
                href="https://g.dev/reezmahanan" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none', 
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'var(--transition)' 
                }} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                Google Dev
              </a>
              <a 
                href="https://x.com/HananReezma" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none', 
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'var(--transition)' 
                }} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                X (Twitter)
              </a>
              <a 
                href="mailto:reezmahanan@gmail.com" 
                style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none', 
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'var(--transition)' 
                }} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div 
          className="footer-bottom"
          style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.25rem', 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
            fontSize: '0.75rem', 
            color: 'var(--text-muted)',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <p>© {new Date().getFullYear()} Reezma Hanan. All Rights Reserved.</p>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Made with <span style={{ color: '#ef4444', display: 'inline-block' }}>❤️</span> by Reezma Hanan
          </p>
        </div>

        <style>{`
          .footer-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
          @media (min-width: 992px) {
            .footer-grid {
              grid-template-columns: 1.2fr 0.8fr 1.5fr;
            }
          }
          @media (max-width: 600px) {
            .footer-bottom {
              flex-direction: column !important;
              text-align: center !important;
              justify-content: center !important;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}

export default Footer;