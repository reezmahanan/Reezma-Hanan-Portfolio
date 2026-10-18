export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>Reezma Hanan</h3>
          <p>Crafting Code, Building Dreams</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.9, margin: '0.25rem 0' }}>
            Passionate about creating secure, responsive, and user-centered web applications.
          </p>
          <span>© 2026 Reezma Hanan. All Rights Reserved.</span>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/reezmahanan" target="_blank" rel="noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/reezma-hanan" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.hackerrank.com/profile/reezmahanan" target="_blank" rel="noreferrer" title="HackerRank">
            <i className="fab fa-hackerrank"></i>
          </a>
          <a href="https://g.dev/reezmahanan" target="_blank" rel="noreferrer" title="Google Dev">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://x.com/HananReezma" target="_blank" rel="noreferrer" title="X (Twitter)">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:reezmahanan@gmail.com" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}