import { useState } from 'react';
import { GraduationCap, Briefcase, Award, Terminal, ExternalLink, Eye } from 'lucide-react';

function About() {
  const [selectedImg, setSelectedImg] = useState(null);
  const contributions = [
    {
      program: 'SWOC (Social Winter of Code)',
      role: 'Open Source Contributor',
      link: 'https://github.com/archangel2006/SafeHaven',
    },
    {
      program: 'OSCG (Open Source Connect Global)',
      role: 'Open Source Contributor',
      link: 'https://github.com/Gooichand/blockchain-evidence',
    },
  ];

  const proofImages = [
    {
      title: 'SWOC Contribution',
      image: '/SWOC Contributer.jpg',
      description: 'Contribution to SafeHaven repository',
      link: 'https://github.com/archangel2006/SafeHaven'
    },
    {
      title: 'OSCG Contribution 1',
      image: '/OSCG Contributer 1.jpg',
      description: 'Contribution details in blockchain-evidence',
      link: 'https://github.com/Gooichand/blockchain-evidence'
    },
    {
      title: 'OSCG Contribution 2',
      image: '/OSCG Contributor 2.jpg',
      description: 'PR merge evidence in blockchain-evidence',
      link: 'https://github.com/Gooichand/blockchain-evidence'
    }
  ];

  const highlights = [
    {
      title: 'Education',
      icon: <GraduationCap size={24} style={{ color: 'var(--primary)' }} />,
      detail1: 'IT @ UOM (University of Moratuwa)',
      detail2: 'Cloud & Cyber Security focus',
    },
    {
      title: 'Experience',
      icon: <Briefcase size={24} style={{ color: 'var(--primary)' }} />,
      detail1: 'Academic, Personal & Open Source',
      detail2: 'Full-Stack Fundamentals & APIs',
    },
    {
      title: 'Achievements',
      icon: <Award size={24} style={{ color: 'var(--primary)' }} />,
      detail1: '20+ Professional Certificates',
      detail2: 'HackerRank Stars & Cisco Academics',
    },
  ];

  return (
    <section className="animate-fade-in" style={{ padding: '80px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Main Bio Section */}
        <div 
          className="glass-card" 
          style={{ padding: '3.5rem 2.5rem', position: 'relative' }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '3rem',
              alignItems: 'center'
            }}
            className="about-grid"
          >
            <div>
              <h2 className="gradient-text-primary" style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                About Me
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#6366f1', marginBottom: '1.5rem', fontWeight: 600 }}>
                IT Student at Institute of Technology, University of Moratuwa
              </p>
              <p style={{ marginBottom: '1.2rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                I am Reezma Hanan, currently pursuing a National Diploma in Information Technology (NDT IT) at the University of Moratuwa. I specialize in building secure, user-centered web and full-stack applications. My programming journey spans Java, Python, PHP, and JavaScript, while actively expanding into Node.js, React.js, and Spring Boot.
              </p>
              <p style={{ marginBottom: '1.2rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                With a deep interest in Cyber Security and Cloud Computing (AWS), I incorporate threat prevention and secure coding patterns into every project. I focus on designing elegant solutions that solve real-world problems while delivering excellent, responsive user interfaces.
              </p>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                Outside of coursework,I enjoy learning emerging technologies, contributing to open-source projects, and supporting aspiring developers in the tech community .
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '12px',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  maxWidth: '340px',
                  width: '100%',
                }}
              >
                <img 
                  src="/About Me.jpg" 
                  alt="Reezma Hanan working on development" 
                  style={{
                    width: '100%',
                    borderRadius: '16px',
                    display: 'block',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contributor Programs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ textAlign: 'center', color: '#fff', fontSize: '1.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Terminal size={24} style={{ color: 'var(--primary)' }} /> Contributor Programs & Contributions
          </h3>
          
          <div className="contributions-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem' }}>
            <div 
              className="glass-card" 
              style={{ padding: '1.5rem', overflowX: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <table 
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  textAlign: 'left',
                  color: 'var(--text-secondary)',
                  minWidth: '450px'
                }}
              >
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <th style={{ padding: '12px 16px', color: '#fff', fontWeight: 600 }}>Program</th>
                    <th style={{ padding: '12px 16px', color: '#fff', fontWeight: 600 }}>Role</th>
                    <th style={{ padding: '12px 16px', color: '#fff', fontWeight: 600 }}>Project Links</th>
                  </tr>
                </thead>
                <tbody>
                  {contributions.map((c, i) => (
                    <tr 
                      key={i} 
                      style={{ borderBottom: i < contributions.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                    >
                      <td style={{ padding: '16px', fontWeight: 600, color: '#fff' }}>{c.program}</td>
                      <td style={{ padding: '16px' }}>{c.role}</td>
                      <td style={{ padding: '16px' }}>
                        <a 
                          href={c.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            color: '#0ea5e9',
                            textDecoration: 'none',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}
                        >
                          View Link <ExternalLink size={14} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Proof Gallery */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div 
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  marginBottom: '0.25rem',
                  textAlign: 'center'
                }}
              >
                 Contribution Evidence
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
                {proofImages.map((proof, idx) => (
                  <div 
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: '8px',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                    onClick={() => setSelectedImg(proof.image)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      const o = e.currentTarget.querySelector('.proof-img-overlay');
                      if (o) o.style.background = 'rgba(7, 9, 14, 0)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      const o = e.currentTarget.querySelector('.proof-img-overlay');
                      if (o) o.style.background = 'rgba(7, 9, 14, 0.2)';
                    }}
                  >
                    <div style={{
                      width: '100%',
                      height: '80px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      position: 'relative',
                      background: '#0d111c'
                    }}>
                      <img 
                        src={proof.image} 
                        alt={proof.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      <div 
                        className="proof-img-overlay"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'rgba(7, 9, 14, 0.2)',
                          transition: 'var(--transition)'
                        }}
                      />
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#fff', padding: '0 4px' }}>
                      {proof.title}
                    </div>
                    <button
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                      }}
                    >
                      <Eye size={10} /> Zoom
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ textAlign: 'center', color: '#fff', fontSize: '1.8rem', fontWeight: 700 }}>
             Quick Highlights
          </h3>
          <div className="grid-3">
            {highlights.map((h, i) => (
              <div 
                key={i} 
                className="glass-card" 
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  borderTop: '3px solid var(--primary)',
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {h.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>{h.title}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500 }}>{h.detail1}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{h.detail2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-grid div {
            text-align: center;
          }
          .about-grid h2 {
            text-align: center !important;
          }
        }
        @media (max-width: 1024px) {
          .contributions-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>

      {/* Lightbox Modal for Proof Images */}
      {selectedImg && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(7, 9, 14, 0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease-out',
          }}
          onClick={() => setSelectedImg(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '12px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              ✕
            </button>
            <img
              src={selectedImg}
              alt="Contribution Proof Details"
              style={{
                width: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '16px',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default About;