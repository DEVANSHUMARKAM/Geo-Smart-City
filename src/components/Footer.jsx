import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid="xxl" className="px-4">

        <div className="footer__inner">

          {/* Left — logo + tagline */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span>GeoSmart<span className="footer__logo-dot">.City</span></span>
            </div>
            <p className="footer__tagline">
              Where satellite data meets civic responsibility —<br />
              intelligence for the city of tomorrow.
            </p>
          </div>

          {/* Center — links */}
          <div className="footer__links">
            <div className="footer__links-group">
              <span className="footer__links-heading">Platform</span>
              <a href="#modules">Modules</a>
              <a href="#about">About</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer__links-group">
              <span className="footer__links-heading">Modules</span>
              <a href="#modules">UrbanGrowth</a>
              <a href="#modules">CrimeOps</a>
              <a href="#modules">TaxVision</a>
            </div>
          </div>

          {/* Right — GitHub */}
          <div className="footer__github">
            <p className="footer__github-label">Open Source</p>
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME/geosmart-city"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__github-btn"
            >
              {/* GitHub SVG icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View Source Code
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <p className="footer__github-sub">
              Full source code for all three modules — MIT Licensed
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span>© 2025 GeoSmart.City · Built at MRSAC, Nagpur</span>
          <span className="footer__bottom-right">
            Made with ♥ by Devanshu, Divyanshu & Ayush
          </span>
        </div>

      </Container>
    </footer>
  )
}

export default Footer