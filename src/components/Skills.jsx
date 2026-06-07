import { Code, Cloud, Wrench, Layers, Laptop, Star, BookOpen, Cpu, Shield, Brain, Users, MessageSquare, Clock } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      icon: <Code size={20} style={{ color: '#6366f1' }} />,
      skills: [
        { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'MATLAB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
      ]
    },
    {
      category: 'Web Development',
      icon: <Laptop size={20} style={{ color: '#10b981' }} />,
      skills: [
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'React.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      ]
    },
    {
      category: 'Backend & Databases',
      icon: <Layers size={20} style={{ color: '#f59e0b' }} />,
      skills: [
        { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'REST APIs', lucideIcon: <Code size={18} /> },
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: <Cloud size={20} style={{ color: '#00b4d8' }} />,
      skills: [
        { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Cloud Fundamentals', lucideIcon: <Cloud size={18} /> }
      ]
    },
    {
      category: 'Developer Tools',
      icon: <Wrench size={20} style={{ color: '#0ea5e9' }} />,
      skills: [
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', isDark: true },
        { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'IntelliJ IDEA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
        { name: 'Postman', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'NPM', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
      ]
    },
    {
      category: 'Design & Other Competencies',
      icon: <Star size={20} style={{ color: '#ec4899' }} />,
      skills: [
        { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Canva', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
        { name: 'Adobe Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
        { name: 'Adobe Illustrator', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
        { name: 'Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Cyber Security', lucideIcon: <Shield size={18} /> },
        { name: 'Embedded Systems', lucideIcon: <Cpu size={18} /> },
      ]
    },
    {
      category: 'Soft Skills',
      icon: <Brain size={20} style={{ color: '#a855f7' }} />,
      skills: [
        { name: 'Problem Solving', lucideIcon: <Brain size={18} /> },
        { name: 'Team Collaboration', lucideIcon: <Users size={18} /> },
        { name: 'Communication', lucideIcon: <MessageSquare size={18} /> },
        { name: 'Time Management', lucideIcon: <Clock size={18} /> }
      ]
    }
  ];

  const learningPlatforms = [
    { name: 'HackerRank', lucideIcon: <Code size={16} />, profileLink: 'https://www.hackerrank.com/profile/reezmahanan' },
    { name: 'Cisco Networking Academy', lucideIcon: <Shield size={16} /> },
    { name: 'Microsoft Learn', lucideIcon: <BookOpen size={16} /> },
    { name: 'CODL LMS UOM', lucideIcon: <BookOpen size={16} /> },
    { name: 'W3Schools', lucideIcon: <BookOpen size={16} /> },
    { name: 'SoloLearn', lucideIcon: <BookOpen size={16} /> },
    { name: 'GeeksforGeeks', lucideIcon: <Code size={16} /> },
    { name: 'AWS Educate', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Simplilearn', lucideIcon: <BookOpen size={16} /> },
  ];

  return (
    <section className="animate-fade-in" style={{ padding: '80px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        <div style={{ textAlign: 'center' }}>
          <h2 className="gradient-text-primary" style={{ marginBottom: '0.5rem' }}>
            Programming & Development Skills
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Expertise across languages, frameworks, cloud, dev tools, and learning paths.
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div 
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}
        >
          {skillCategories.map((cat, index) => (
            <div 
              key={index} 
              className="glass-card" 
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                background: 'rgba(10, 15, 30, 0.45)',
                backdropFilter: 'blur(20px) saturate(140%)',
                borderRadius: '24px',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px rgba(99, 102, 241, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 
                style={{
                  fontSize: '1.25rem',
                  color: '#fff',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '0.75rem',
                }}
              >
                {cat.icon}
                {cat.category}
              </h3>
              
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '0.75rem',
                }}
              >
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      color: '#f1f5f9',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      transition: 'all 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {skill.iconUrl ? (
                      <img 
                        src={skill.iconUrl} 
                        alt={`${skill.name} logo`} 
                        style={{ 
                          width: '22px', 
                          height: '22px', 
                          objectFit: 'contain',
                          filter: skill.isDark ? 'invert(1) brightness(1.5)' : 'none'
                        }} 
                        onError={(e) => {
                          // Fallback if image does not load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
                        {skill.lucideIcon}
                      </span>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            marginTop: '2rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <h3 
            style={{ 
              textAlign: 'center', 
              color: '#fff', 
              fontSize: '1.6rem', 
              fontWeight: 700, 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.5rem' 
            }}
          >
            📚 Learning Platforms & Academic Environments
          </h3>
          
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {learningPlatforms.map((platform, idx) => {
              const content = (
                <>
                  {platform.iconUrl ? (
                    <img src={platform.iconUrl} alt={platform.name} style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                  ) : (
                    <span style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
                      {platform.lucideIcon}
                    </span>
                  )}
                  {platform.name}
                </>
              );

              const cardStyles = {
                padding: '10px 18px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'rgba(255, 255, 255, 0.02)',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'var(--transition)',
                cursor: platform.profileLink ? 'pointer' : 'default',
                textDecoration: 'none'
              };

              if (platform.profileLink) {
                return (
                  <a
                    key={idx}
                    href={platform.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    style={cardStyles}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.05)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={cardStyles}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.05)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;