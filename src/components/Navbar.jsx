import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Sync theme attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest('#mobileMenuToggle')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={handleLinkClick}>
          Reezma Hanan
        </a>

        <ul
          className={`nav-menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}
          id="navMenu"
          ref={mobileMenuRef}
        >
          <li>
            <a href="#about" className="nav-link" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link" onClick={handleLinkClick}>
              Education
            </a>
          </li>
          <li>
            <a href="#certs" className="nav-link" onClick={handleLinkClick}>
              Certificates
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={handleLinkClick}>
              Projects
            </a>
          </li>

          {/* More Dropdown */}
          <li className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
            <button
              type="button"
              className="nav-link dropdown-toggle"
              id="moreDropdownBtn"
              onClick={() => setIsDropdownOpen(prev => !prev)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>More</span>
              <i className={`fas fa-chevron-down dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`}></i>
            </button>

            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} id="moreDropdownMenu">
              <li>
                <a href="#leadership" className="dropdown-link" onClick={handleLinkClick}>
                  <i className="fas fa-crown dropdown-icon"></i>
                  <span>Leadership</span>
                </a>
              </li>
              <li>
                <a href="#opensource" className="dropdown-link" onClick={handleLinkClick}>
                  <i className="fas fa-code-branch dropdown-icon"></i>
                  <span>Open Source</span>
                </a>
              </li>
              <li>
                <a href="#blogs" className="dropdown-link" onClick={handleLinkClick}>
                  <i className="fas fa-book-open dropdown-icon"></i>
                  <span>Blogs</span>
                </a>
              </li>
              <li>
                <a href="#creative" className="dropdown-link" onClick={handleLinkClick}>
                  <i className="fas fa-palette dropdown-icon"></i>
                  <span>Creative Designs</span>
                </a>
              </li>
              <li>
                <a href="#community" className="dropdown-link" onClick={handleLinkClick}>
                  <i className="fas fa-hands-helping dropdown-icon"></i>
                  <span>Volunteering</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="dropdown-link" onClick={handleLinkClick}>
                  <i className="fas fa-envelope dropdown-icon"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            id="themeToggle"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle visual theme"
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          <a href="Reezma_Hanan_Resume.pdf" className="btn btn-cv-nav" target="_blank" rel="noreferrer">
            <i className="fas fa-file-pdf"></i> View CV
          </a>

          <button
            className="mobile-menu-toggle"
            id="mobileMenuToggle"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}