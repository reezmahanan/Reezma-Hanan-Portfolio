import { useState } from 'react';
import { Award, ShieldCheck, Code, Layout, Database, Wrench, Cpu, Cloud, Terminal, CheckSquare, ExternalLink, Eye } from 'lucide-react';

function Certificates() {
  const [activeTab, setActiveTab] = useState('certs'); // 'certs' or 'badges'
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const certificates = [
    { 
      name: 'Python for Beginners', 
      issuer: 'UOM CODL', 
      category: 'programming', 
      icon: <Code size={24} />, 
      image: '/Python for beginners.png',
      verifyUrl: 'https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1' 
    },
    { 
      name: 'Web Design for Beginners', 
      issuer: 'UOM CODL', 
      category: 'web', 
      icon: <Layout size={24} />, 
      image: '/web design for beginners.png',
      verifyUrl: 'https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1' 
    },
    { 
      name: 'Introduction to Python',
      issuer: 'SoloLearn', 
      category: 'programming', 
      icon: <Code size={24} />, 
      image: '/indrouction to python.png',
      verifyUrl: 'https://api2.sololearn.com/v2/certificates/CC-ZZGGBJBM/image/png?t=638965751414194114' 
    },
    { 
      name: 'SQL', 
      issuer: 'SoloLearn', 
      category: 'database', 
      icon: <Database size={24} />, 
      image: '/introduction to sql.png',
      verifyUrl: 'https://api2.sololearn.com/v2/certificates/CC-ZZGGBJBM/image/png?t=638965751414194114' 
    },
    { 
      name: 'HTML', 
      issuer: 'SoloLearn', 
      category: 'web', 
      icon: <Layout size={24} />, 
      image: '/introduction to html.png',
      verifyUrl: 'https://api2.sololearn.com/v2/certificates/CC-RBU2XEQB/image/png?t=638857708473986790' 
    },
    { 
      name: 'Java', 
      issuer: 'SoloLearn', 
      category: 'programming', 
      icon: <Code size={24} />, 
      image: '/introduction to java.png',
      verifyUrl: 'https://api2.sololearn.com/v2/certificates/CC-SQOTIPNO/image/png?t=638900670629150830' 
    },
    { 
      name: 'Introduction to Git', 
      issuer: 'Microsoft', 
      category: 'tools', 
      icon: <Wrench size={24} />, 
      image: '/Introduction to git.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/reezmahanan-2643/achievements/print/uar62j53' 
    },
    { 
      name: 'Introduction to Github Copilot', 
      issuer: 'Microsoft', 
      category: 'tools', 
      icon: <Terminal size={24} />, 
      image: '/introduction to github co pilot.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/reezmahanan-2643/achievements/print/3a5apq2h' 
    },
    { 
      name: 'Cyber Security', 
      issuer: 'Cisco Networking Academy', 
      category: 'security', 
      icon: <ShieldCheck size={24} />, 
      image: '/introductio to cybersecurity-cisco.png',
      verifyUrl: 'https://www.credly.com/badges/e39f3377-2df8-409a-a9ed-42e869c1d511' 
    },
    { 
      name: 'Agile Scrum Foundation', 
      issuer: 'Simplilearn', 
      category: 'tools', 
      icon: <CheckSquare size={24} />, 
      image: '/agile scrum fountation.png',
      verifyUrl: 'https://simpli-web.app.link/e/pxITlA1Tb0b' 
    },
    { 
      name: 'UI/UX for Beginners', 
      issuer: 'Great Learning Academy', 
      category: 'web', 
      icon: <Layout size={24} />, 
      image: '/ui ux for beginners.png',
      verifyUrl: 'https://www.mygreatlearning.com/certificate/QYCNOODA' 
    },
    { 
      name: 'HTML', 
      issuer: 'Great Learning Academy', 
      category: 'web', 
      icon: <Layout size={24} />, 
      image: '/frontend development-html.png',
      verifyUrl: 'https://www.mygreatlearning.com/certificate/DKSYPPAZ' 
    },
    { 
      name: 'MySQL Tutorial', 
      issuer: 'Great Learning Academy', 
      category: 'database', 
      icon: <Database size={24} />, 
      image: '/my sql tutorial.png',
      verifyUrl: 'https://www.mygreatlearning.com/certificate/YADZEDEN' 
    },
    { 
      name: 'Programming Basics', 
      issuer: 'Great Learning Academy', 
      category: 'programming', 
      icon: <Code size={24} />, 
      image: '/programing basics.png',
      verifyUrl: 'https://www.mygreatlearning.com/certificate/JDWSMZKM' 
    },
    { 
      name: 'Python Fundamentals for Beginners', 
      issuer: 'Great Learning Academy', 
      category: 'programming', 
      icon: <Code size={24} />, 
      image: '/Pythonfuntamentals for beginners.png',
      verifyUrl: 'https://www.mygreatlearning.com/certificate/UBKRGSMR' 
    },
    { 
      name: 'Python Project for Beginners', 
      issuer: 'Great Learning Academy', 
      category: 'programming', 
      icon: <Code size={24} />, 
      image: '/python project for beginners.png',
      verifyUrl: 'https://www.mygreatlearning.com' 
    },
    { 
      name: 'OOPs in Java', 
      issuer: 'Simplilearn', 
      category: 'programming', 
      icon: <Code size={24} />, 
      image: '/oops in java.png',
      verifyUrl: 'https://simpli-web.app.link/e/1kLFevcUb0b' 
    },
    { 
      name: 'Introduction to Cyber Security', 
      issuer: 'Simplilearn', 
      category: 'security', 
      icon: <ShieldCheck size={24} />, 
      image: '/introduction to cyber security.png',
      verifyUrl: 'https://simpli-web.app.link/e/by5AkWPTb0b' 
    },
    { 
      name: 'CSS (Basic)', 
      issuer: 'HackerRank', 
      category: 'web', 
      icon: <Layout size={24} />, 
      image: '/css basic.png',
      verifyUrl: 'https://www.hackerrank.com/certificates/3c7f4b161fcf' 
    },
    { 
      name: 'Introduction to Cloud Computing', 
      issuer: 'Simplilearn', 
      category: 'cloud', 
      icon: <Cloud size={24} />, 
      image: '/introduction to cloud computing.png',
      verifyUrl: 'https://simpli-web.app.link/e/Sw0FuE7Tb0b' 
    },
    { 
      name: 'Describe Cloud Computing', 
      issuer: 'Microsoft', 
      category: 'cloud', 
      icon: <Cloud size={24} />, 
      image: '/describe cloud computing.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/reezmahanan-2643/achievements/print/nvub3e4f' 
    },
    { 
      name: 'Introduction to AI Concepts', 
      issuer: 'Microsoft', 
      category: 'tools', 
      icon: <Cpu size={24} />, 
      image: '/introduction to ai concepts.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/reezmahanan-2643/achievements/print/3a5apq2h' 
    },
    { 
      name: 'Introduction to CSS', 
      issuer: 'SoloLearn', 
      category: 'web', 
      icon: <Layout size={24} />, 
      image: '/introduction to css.png',
      verifyUrl: 'https://www.sololearn.com/certificates/CC-8BTBXIXY' 
    },
    { 
      name: 'Java (Basic)', 
      issuer: 'HackerRank', 
      category: 'programming', 
      icon: <Code size={24} />, 
      image: '/java basic.png',
      verifyUrl: 'https://www.hackerrank.com/certificates/eed1e604468e' 
    },
    { 
      name: 'SQL (Basic)', 
      issuer: 'HackerRank', 
      category: 'database', 
      icon: <Database size={24} />, 
      image: '/sql basic.png',
      verifyUrl: 'https://www.hackerrank.com/certificates/eed1e604468e' 
    },
    { 
      name: 'Front-End Web Development', 
      issuer: 'UOM CODL', 
      category: 'web', 
      icon: <Layout size={24} />, 
      image: '/front end web develoment.png',
      verifyUrl: 'https://open.uom.lk/lms/mod/customcert/view.php?id=839&downloadown=1' 
    },
    { 
      name: 'Cyber Security Essential(LFC108)', 
      issuer: 'The Linux Foundation', 
      category: 'security', 
      icon: <ShieldCheck size={24} />, 
      image: '/cyber security essentials.png',
      verifyUrl: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/0508ad4c-dfe7-4044-b2f4-145bc0c3aad5-reezma-hanan-1fee3867-40b6-4d53-a0d2-c7e97ccb3f29-certificate.pdf' 
    },
    { 
      name: 'Hands-On Introduction to Git with GitHub', 
      issuer: 'Udemy', 
      category: 'tools', 
      icon: <Wrench size={24} />, 
      image: '/introductiom to git with github.png',
      verifyUrl: 'https://www.udemy.com/certificate/UC-4fca5676-ab20-4973-89c1-77ad87df7e8f/' 
    },
    { 
      name: 'Docker for Absolute Beginner', 
      issuer: 'KodeKloud', 
      category: 'tools', 
      icon: <Cpu size={24} />, 
      image: '/docker for beginners.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/reezmahanan-2643/achievements/print/uar62j53' 
    },
  ];

  const badges = [
    { 
      name: 'Cyber Security', 
      platform: 'Cisco Networking Academy', 
      icon: <ShieldCheck size={32} />, 
      color: 'rgba(0, 180, 216, 0.15)', 
      border: '#00b4d8', 
      image: '/cisco introduction to cyber security badge.png',
      verifyUrl: 'https://www.credly.com/badges/e39f3377-2df8-409a-a9ed-42e869c1d511'
    },
    { 
      name: 'Cyber Security Essential(LFC108)', 
      platform: 'The Linux Foundation', 
      icon: <ShieldCheck size={32} />, 
      color: 'rgba(233, 30, 99, 0.15)', 
      border: '#e91e63', 
      image: '/cyber securty essential badges.png',
      verifyUrl: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/0508ad4c-dfe7-4044-b2f4-145bc0c3aad5-reezma-hanan-1fee3867-40b6-4d53-a0d2-c7e97ccb3f29-certificate.pdf'
    },
    { 
      name: 'Introduction to Generative AI', 
      platform: 'Google Cloud', 
      icon: <Cpu size={32} />, 
      color: 'rgba(255, 153, 0, 0.15)', 
      border: '#ff9900', 
      image: '/introduction to genarative AI badge.png',
      verifyUrl: 'https://cdn.qwiklabs.com/dkQVGBYS8HvCJHFPxPExnP3JVKTEoe6CpEKnTq8o2fo%3D'
    },
    { 
      name: 'Github for Beginners', 
      platform: 'Github', 
      icon: <Code size={32} />, 
      color: 'rgba(155, 89, 182, 0.15)', 
      border: '#9b59b6', 
      image: '/github for beginners badge.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/reezmahanan-2643/achievements/print/b99l8rgd'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Certificates' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web & Design' },
    { id: 'database', label: 'Databases' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'security', label: 'Security' },
    { id: 'tools', label: 'Tools & AI' }
  ];

  const filteredCerts = filter === 'all' 
    ? certificates 
    : certificates.filter(c => c.category === filter);

  return (
    <section className="animate-fade-in" style={{ padding: '80px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        <div style={{ textAlign: 'center' }}>
          <h2 className="gradient-text-primary" style={{ marginBottom: '0.5rem' }}>
            Certifications & Badges
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            My record of professional achievements, structured learning, and live skill verifications.
          </p>
        </div>

        {/* Primary Tabs */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <button
            onClick={() => { setActiveTab('certs'); setFilter('all'); }}
            style={{
              padding: '12px 28px',
              borderRadius: '16px',
              border: activeTab === 'certs' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
              background: activeTab === 'certs' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              color: activeTab === 'certs' ? '#fff' : 'var(--text-secondary)',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'var(--transition)',
              backdropFilter: activeTab === 'certs' ? 'var(--glass-blur)' : 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Award size={18} /> Certificates ({certificates.length})
          </button>
          <button
            onClick={() => setActiveTab('badges')}
            style={{
              padding: '12px 28px',
              borderRadius: '16px',
              border: activeTab === 'badges' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
              background: activeTab === 'badges' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              color: activeTab === 'badges' ? '#fff' : 'var(--text-secondary)',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'var(--transition)',
              backdropFilter: activeTab === 'badges' ? 'var(--glass-blur)' : 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <ShieldCheck size={18} /> Badges ({badges.length})
          </button>
        </div>

        {/* Sub-Filters for Certificates */}
        {activeTab === 'certs' && (
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '1rem',
              borderRadius: '20px',
            }}
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: '8px 18px',
                  border: '1px solid',
                  borderColor: filter === cat.id ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
                  background: filter === cat.id ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                  color: filter === cat.id ? '#fff' : 'var(--text-secondary)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  if (filter !== cat.id) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (filter !== cat.id) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Certificates Grid View */}
        {activeTab === 'certs' && (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
            className="certs-grid"
          >
            {filteredCerts.map((cert, index) => (
              <div 
                key={index} 
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '290px',
                  justifyContent: 'space-between',
                  cursor: cert.image ? 'pointer' : 'default',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  if (cert.image) {
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    const overlay = e.currentTarget.querySelector('.cert-img-overlay');
                    if (overlay) overlay.style.background = 'rgba(7, 9, 14, 0)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (cert.image) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    const overlay = e.currentTarget.querySelector('.cert-img-overlay');
                    if (overlay) overlay.style.background = 'rgba(7, 9, 14, 0.2)';
                  }
                }}
                onClick={() => cert.image && setSelectedImg(cert.image)}
              >
                {/* Floating category background indicator */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--primary)',
                }}>
                  {cert.icon}
                </div>

                {/* Certificate Preview Image */}
                {cert.image ? (
                  <div style={{
                    width: '100%',
                    height: '110px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    position: 'relative',
                    background: '#0d111c',
                  }}>
                    <img 
                      src={cert.image} 
                      alt={`${cert.name} preview`} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }} 
                    />
                    <div 
                      className="cert-img-overlay"
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
                ) : (
                  <div style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                    {cert.icon}
                  </div>
                )}

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '0.25rem', fontWeight: '700', lineHeight: '1.4' }}>
                    {cert.name}
                  </h3>
                  <span 
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      fontWeight: '600',
                      display: 'inline-block',
                      marginBottom: '1rem',
                    }}
                  >
                    {cert.issuer}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', width: '100%', justifyContent: 'center' }}>
                  {cert.image && (
                    <button
                      style={{
                        color: 'var(--text-secondary)',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'var(--transition)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImg(cert.image);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      }}
                    >
                      <Eye size={14} /> Preview
                    </button>
                  )}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'white',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'var(--transition)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <ExternalLink size={14} /> Verify
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Badges Grid View */}
        {activeTab === 'badges' && (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '2rem'
            }}
            className="badges-grid"
          >
            {badges.map((badge, index) => (
              <div 
                key={index} 
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderTop: `4px solid ${badge.border}`,
                  boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.3), 0 0 15px ${badge.color}`,
                  cursor: badge.image ? 'pointer' : 'default',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  if (badge.image) {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    const overlay = e.currentTarget.querySelector('.cert-img-overlay');
                    if (overlay) overlay.style.background = 'rgba(7, 9, 14, 0)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (badge.image) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    const overlay = e.currentTarget.querySelector('.cert-img-overlay');
                    if (overlay) overlay.style.background = 'rgba(7, 9, 14, 0.2)';
                  }
                }}
                onClick={() => badge.image && setSelectedImg(badge.image)}
              >
                {badge.image ? (
                  /* Badge Preview Image */
                  <div style={{
                    width: '100%',
                    height: '110px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '1.25rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    position: 'relative',
                    background: '#0d111c',
                  }}>
                    <img 
                      src={badge.image} 
                      alt={`${badge.name} badge`} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }} 
                    />
                    <div 
                      className="cert-img-overlay"
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
                ) : (
                  <div 
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: badge.color,
                      border: `2px solid ${badge.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: badge.border,
                      marginBottom: '1.5rem',
                      boxShadow: `0 0 20px ${badge.color}`,
                    }}
                  >
                    {badge.icon}
                  </div>
                )}
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem', fontWeight: '700' }}>
                  {badge.name}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '500', marginBottom: '1rem' }}>
                  {badge.platform}
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', width: '100%', justifyContent: 'center' }}>
                  {badge.image && (
                    <button
                      style={{
                        color: 'var(--text-secondary)',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'var(--transition)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImg(badge.image);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      }}
                    >
                      <Eye size={14} /> Preview
                    </button>
                  )}
                  {badge.verifyUrl && (
                    <a
                      href={badge.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'white',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'var(--transition)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <ExternalLink size={14} /> Verify
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Modal for Verification */}
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
              alt="Certificate Verification Details"
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

export default Certificates;