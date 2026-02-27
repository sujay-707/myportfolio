import React from "react";

function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container">

        <div className="row gy-4">

          {/* Branding */}
          <div className="col-lg-5">
            <h3 className="footer-name">Sujay M Mundaragi</h3>
            <p className="footer-tagline">
             Building clean, responsive web applications.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/sujay-707"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/sujay-mundaragi707"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div className="col-lg-3 col-6">
            <h6 className="footer-heading">Navigation</h6>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-6">
            <h6 className="footer-heading">Contact</h6>
            <p className="footer-contact">📧 sujaymundaragi7@gmail.com</p>
            <p className="footer-contact">📞 +91-8762338707</p>
            <p className="footer-contact">📍 Bangalore, India</p>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="text-center footer-bottom">
          © {new Date().getFullYear()} Sujay M Mundaragi. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;