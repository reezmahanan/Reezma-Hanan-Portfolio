import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
      {
          title: 'Event Hub - Student Event Management',
          description: 'An academic event scheduling and coordination web application. Supports user authentication, event registration, organizer controls, administrative dashboards, and email notifications.',
          tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
          github: 'https://github.com/reezmahanan/Student-Event-Management-Web-Application',
          live: '#',
          image: '/Event Hub.png'
      },
      {
          title: 'Reezma Hanan - Personal Portfolio Website',
          description: 'A modern, interactive, and responsive personal portfolio website showcasing software engineering projects, academic coursework, professional certifications, and technical skills.',
          tech: ['React'],
          github: 'https://github.com/reezmahanan/Reezma-Hanan-Portfolio',
          live: 'https://spectacular-narwhal-9eb659.netlify.app/',
          image: '/Portfolio Website.png'
      },
    {
      title: 'SCM - Inventory Management System(Group Project)',
      description: 'A full-stack supply chain and stock management system with interactive inventory tracking dashboards, supplier control, user roles, invoice publishing, and database backup features.',
      tech: ['React', 'Spring Boot', 'MySQL', 'REST APIs', 'Java'],
      github: 'https://github.com/reezmahanan/SCM-IMS',
      live: '#',
      image: '/Inventory Management System.png'
    },

    {
      title: 'Book Nest - Bookstore E-Commerce(Group Project)',
      description: 'An online bookstore e-commerce platform. Features include a dynamic book catalog, custom search, multi-level category navigation, user shopping carts, checkout invoices, and client dashboards.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/reezmahanan/BookNest',
      live: '#',
      image: '/Book Nest.png'
    },
      {
          title: 'Reezma Tech Services - IT Agency Website(Frontend)',
          description: 'A commercial marketing landing page for a freelance IT support and software agency. Showcases technical services offerings, dynamic pricing tiers, and client quotation requests.',
          tech: ['HTML5', 'CSS3', 'JavaScript'],
          github: 'https://github.com/reezmahanan/Reezma-Tech-Services',
          live: 'https://reezmahanan.github.io/Reezma-tech-services/',
          image: '/Reezma Tech.png'
      },
    {
      title: 'ReciPick - Recipe Discovery Application',
      description: 'A responsive cooking recipe explorer. Built with React and Vite, utilizing public culinary APIs to search, filter, and discover food recipes by ingredients and cuisine types.',
      tech: ['React', 'Vite', 'CSS3', 'API Integration', 'JavaScript'],
      github: 'https://github.com/reezmahanan/RECIPICK',
      live: 'https://recipick-wine.vercel.app/',
      image: '/ReciPick.png'
    },
      {
          title: 'TasteVerse Restaurant Website(Frontend)',
          description: 'A visually stunning and fully responsive restaurant landing page presenting menus, dining experiences, and table booking requests with modern design.',
          tech: ['HTML5', 'CSS3', 'JavaScript'],
          github: 'https://github.com/reezmahanan/Taste-Verse',
          live: 'https://reezmahanan.github.io/Taste-Verse/',
          image: '/Tasteverse.png'
      },
    {
      title: 'CareerBridge - Job Placement Platform(Frontend)',
      description: 'A responsive web portal designed to connect graduating students and interns with recruiters, featuring categorical search filters, placement application records, and job details panels.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/reezmahanan/CareerBridge',
      live: 'https://reezmahanan.github.io/CareerBridge/',
      image: '/Career Bridge.png'
    },
  ];

  return (
    <section 
      className="animate-fade-in" 
      style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="gradient-text-primary" style={{ marginBottom: '0.5rem' }}>
            Featured Projects
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Selected full-stack systems and frontend web applications illustrating clean code and user-centered design.
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
            gap: '2.5rem' 
          }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 500px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;