import { Calendar, MapPin } from 'lucide-react';

function Education() {
  const education = [
    {
      degree: 'National Diploma in Information Technology (NDT IT)',
      period: 'Oct 2024 - Present',
      institution: 'Institute of Technology, University of Moratuwa',
      location: 'Diyagama, Homagama, Sri Lanka',
      logo: '/Institute of Technolgy UOM Logo.jpg',
    },
    {
      degree: 'GCE Advanced Level - Physical Science Stream',
      period: '2018 - 2020',
      institution: 'BT/BC Oddamavadi Central College National School',
      location: 'Batticaloa, Sri Lanka',
      logo: '/Odd.central College Logo.jpg',
    },
    {
      degree: 'GCE Ordinary Level',
      period: '2007 - 2018',
      institution: 'BT/BC Oddamavadi Fathima Balika Maha Vidyalaya',
      location: 'Batticaloa, Sri Lanka',
      result: "8 A's and B's",
      logo: '/Odd.Fathima Balika Logo.jpg',
    },
  ];

  return (
    <section className="animate-fade-in" style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="gradient-text-primary" style={{ marginBottom: '0.5rem' }}>
            Academic Background
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            My educational journey and academic qualifications.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {education.map((item, index) => (
            <div 
              key={index} 
              className="glass-card animate-scale-up"
              style={{
                display: 'flex',
                gap: '1.5rem',
                padding: '2rem 1.5rem',
                borderLeft: '4px solid var(--primary)',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
            >
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.05)',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}
              >
                {item.logo ? (
                  <img 
                    src={item.logo} 
                    alt={`${item.institution} logo`} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      background: '#fff',
                    }} 
                  />
                ) : (
                  <span style={{ fontSize: '1.5rem' }}>🎓</span>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem', fontWeight: '700' }}>
                  {item.degree}
                </h3>
                <div 
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '1.25rem', 
                    marginBottom: '0.75rem', 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={14} /> {item.period}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={14} /> {item.location}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {item.institution}
                </p>
                {item.result && (
                  <p 
                    style={{ 
                      marginTop: '0.75rem', 
                      color: 'var(--secondary)', 
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      display: 'inline-block',
                      background: 'rgba(14, 165, 233, 0.1)',
                      border: '1px solid rgba(14, 165, 233, 0.2)',
                      padding: '4px 12px',
                      borderRadius: '6px',
                    }}
                  >
                    Result: {item.result}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;