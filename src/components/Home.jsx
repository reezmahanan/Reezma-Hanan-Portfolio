import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Briefcase, Target, MapPin, Download, Send } from 'lucide-react';

function Home() {
  const [techCount, setTechCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [certCount, setCertCount] = useState(0);

  const words = ["IT Undergraduate", "Aspiring Software Engineer", "Full-Stack Developer"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullWord = words[currentWordIdx];
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        if (currentText === fullWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  useEffect(() => {
    // Staggered animated counts
    const intervalTech = setInterval(() => {
      setTechCount(c => (c < 15 ? c + 1 : c));
    }, 50);

    const intervalProj = setInterval(() => {
      setProjectCount(c => (c < 8 ? c + 1 : c));
    }, 40);

    const intervalCert = setInterval(() => {
      setCertCount(c => (c < 20 ? c + 1 : c));
    }, 30);

    return () => {
      clearInterval(intervalTech);
      clearInterval(intervalProj);
      clearInterval(intervalCert);
    };
  }, []);

  return (
    <section 
      className="animate-fade-in"
      style={{
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 0',
      }}
    >
      <div 
        className="container"
        style={{
          width: '100%',
          maxWidth: '1100px',
          position: 'relative',
        }}
      >
        {/* Subtle Decorative Gradient Orb */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '0',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            <div>
              {/* Pulse Open-To-Work Status */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  color: '#34d399',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#10b981',
                  borderRadius: '50%',
                  display: 'inline-block',
                  boxShadow: '0 0 10px #10b981',
                  animation: 'pulse 2s infinite',
                }} />
                Open for Internship Opportunities
              </div>

              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '500' }}>
                 HELLO, I'M
              </div>
              <h1 className="gradient-text-primary" style={{ fontSize: '3.6rem', marginBottom: '0.5rem' }}>
                Reezma Hanan
              </h1>
              <h2 
                className="gradient-text-accent"
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  textAlign: 'left',
                  marginBottom: '1.5rem',
                  minHeight: '2.7rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>{currentText}</span>
                <span className="typewriter-cursor">|</span>
              </h2>

              {/* Status Badges Row (from user's profile README) */}
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                }}
              >
                <div style={{
                  background: 'rgba(236, 72, 153, 0.1)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  color: '#f472b6',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <Briefcase size={14} /> ROLE: SOFTWARE ENGINEER IN TRAINING
                </div>
                <div style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  border: '1px solid rgba(14, 165, 233, 0.2)',
                  color: '#38bdf8',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <Target size={14} /> GOAL: SEEKING INTERNSHIP
                </div>
                <div style={{
                  background: 'rgba(52, 211, 153, 0.1)',
                  border: '1px solid rgba(52, 211, 153, 0.2)',
                  color: '#34d399',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <MapPin size={14} /> LOCATION: SRI LANKA
                </div>
              </div>

              <blockquote 
                style={{
                  borderLeft: '4px solid var(--primary)',
                  paddingLeft: '1rem',
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  marginBottom: '2.5rem',
                  lineHeight: '1.5',
                }}
              >
                "Code with passion, build with purpose, innovate with impact"
              </blockquote>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                <Link 
                  to="/contact" 
                  className="btn btn-primary" 
                  aria-label="Hire me page"
                  style={{ gap: '0.5rem' }}
                >
                  <Send size={18} /> HIRE ME
                </Link>
                <a 
                  href="/Reezma_Hanan_CV.pdf" 
                  download="Reezma_Hanan_CV.pdf"
                  className="btn btn-glass"
                  aria-label="Download CV PDF"
                  style={{ gap: '0.5rem' }}
                >
                  <Download size={18} /> DOWNLOAD CV
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-image-wrapper">
              <div 
                className="image-float"
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  position: 'relative',
                  padding: '6px',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))',
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.25)',
                }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Reezma Hanan Profile Photo" 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    background: '#0d111c',
                    display: 'block',
                  }} 
                />

                {/* Floating Badge 1 - Top Left */}
                <div 
                  className="floating-badge floating-badge-1"
                  style={{
                    position: 'absolute',
                    top: '15%',
                    left: '-60px',
                    background: 'rgba(7, 9, 14, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(217, 70, 239, 0.25)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    fontFamily: 'monospace',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(217, 70, 239, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    zIndex: 2,
                    animation: 'floatBadge1 5s ease-in-out infinite'
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>&lt;</span>
                  <span>Full-Stack</span>
                  <span style={{ color: 'var(--accent)' }}>/&gt;</span>
                </div>

                {/* Floating Badge 2 - Top Right */}
                <div 
                  className="floating-badge floating-badge-2"
                  style={{
                    position: 'absolute',
                    top: '25%',
                    right: '-75px',
                    background: 'rgba(7, 9, 14, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(14, 165, 233, 0.25)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    fontFamily: 'monospace',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(14, 165, 233, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    zIndex: 2,
                    animation: 'floatBadge2 6s ease-in-out infinite 0.5s'
                  }}
                >
                  <span style={{ color: 'var(--secondary)' }}>&#123;</span>
                  <span>Cyber Security</span>
                  <span style={{ color: 'var(--secondary)' }}>&#125;</span>
                </div>

                {/* Floating Badge 3 - Bottom Left */}
                <div 
                  className="floating-badge floating-badge-3"
                  style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '-50px',
                    background: 'rgba(7, 9, 14, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    fontFamily: 'monospace',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(99, 102, 241, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    zIndex: 2,
                    animation: 'floatBadge3 5.5s ease-in-out infinite 1s'
                  }}
                >
                  <span style={{ color: 'var(--primary)' }}>&lt;</span>
                  <span>Java &amp; Python</span>
                  <span style={{ color: 'var(--primary)' }}>/&gt;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'center',
            }}
            className="stats-grid"
          >
            <div>
              <h3 
                className="gradient-text-accent"
                style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.25rem' }}
              >
                {techCount}+
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.95rem' }}>
                Technologies & Tools
              </p>
            </div>
            <div>
              <h3 
                className="gradient-text-accent"
                style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.25rem' }}
              >
                {projectCount}+
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.95rem' }}>
                Real-World Projects
              </p>
            </div>
            <div>
              <h3 
                className="gradient-text-accent"
                style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.25rem' }}
              >
                {certCount}+
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.95rem' }}>
                Certificates Earned
              </p>
            </div>
          </div>
        </div>

      <style>{`
        @keyframes floatBadge1 {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes floatBadge2 {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes floatBadge3 {
          0%, 100% { transform: translateY(0) rotate(-0.5deg); }
          50% { transform: translateY(-7px) rotate(0.5deg); }
        }

        .typewriter-cursor {
          animation: blink 0.75s step-end infinite;
          margin-left: 4px;
          color: var(--secondary);
          font-weight: 400;
        }
        @keyframes blink {
          from, to { color: transparent }
          50% { color: var(--secondary); }
        }

        @media (max-width: 850px) {
          .hero-grid h2 {
            text-align: center !important;
            justify-content: center !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2rem !important;
          }
          .hero-grid blockquote {
            border-left: none !important;
            border-top: 2px solid var(--primary);
            padding-left: 0 !important;
            padding-top: 1rem;
          }
          .hero-grid div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .hero-image-wrapper {
            order: -1;
          }
          .floating-badge-1 {
            left: -20px !important;
          }
          .floating-badge-2 {
            right: -30px !important;
          }
          .floating-badge-3 {
            left: -15px !important;
          }
        }
        @media (max-width: 550px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .floating-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;