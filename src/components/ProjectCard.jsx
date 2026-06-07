import { Code2, Globe, ExternalLink } from 'lucide-react';

function ProjectCard({ title, description, tech, github, live, image }) {
  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        transition: 'var(--transition)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(99, 102, 241, 0.15)';
        const img = e.currentTarget.querySelector('.project-card-image');
        if (img) img.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
        e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
        const img = e.currentTarget.querySelector('.project-card-image');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      {/* Visual Image Header */}
      <div
        style={{
          height: '190px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          background: '#0d111c',
        }}
      >
        {image ? (
          <img 
            src={image} 
            alt={`${title} screenshot`} 
            className="project-card-image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(14, 165, 233, 0.15) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Globe size={48} style={{ color: 'var(--text-secondary)', opacity: 0.5 }} />
          </div>
        )}
        {/* Transparent Card Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent 50%, rgba(7, 9, 14, 0.95) 100%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Card Content */}
      <div 
        style={{ 
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.75rem', fontWeight: '700' }}>
            {title}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
            {description}
          </p>
        </div>

        <div>
          {/* Tech Badges List */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}
          >
            {tech.map((t, i) => (
              <span
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '5px 12px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: '#e2e8f0',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(99, 102, 241, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
              className="btn btn-glass"
              style={{
                flex: 1,
                padding: '10px 16px',
                fontSize: '0.85rem',
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
              }}
            >
              <Code2 size={16} /> Code
            </a>
            {live && live !== '#' && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live demo`}
                className="btn btn-primary"
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  fontSize: '0.85rem',
                  borderRadius: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                }}
              >
                <ExternalLink size={16} /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
