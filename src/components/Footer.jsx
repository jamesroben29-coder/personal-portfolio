import { ArrowUpRight, Mail, ArrowUp } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
                Nyi Nyi <span>Aung</span>
            </a>

            <p>
                Junior Frontend Developer focused on building modern,
                responsive, and user-friendly web applications with React.js.
            </p>

            <div className="footer-socials">
                <a
                 href="https://github.com/jamesroben29-coder"
                 target="_blank"
                 rel="noreferrer"
                aria-label="GitHub"
                >
                <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                 href="https://www.linkedin.com/in/nyi-nyi-aung-536419433"
                 target="_blank"
                 rel="noreferrer"
                 aria-label="LinkedIn"
                >
                <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a
                href="mailto:jamesroben29@gmail.com"
                aria-label="Email"
                >
                <Mail size={18} />
                </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>

              <a
                href="https://github.com/jamesroben29-coder"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/nyi-nyi-aung-536419433"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={15} />
              </a>

              <a href="mailto:jamesroben29@gmail.com">
                Email
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Nyi Nyi Aung. All rights reserved.
          </p>

          <span className="footer-built">
            Built with React.js
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 