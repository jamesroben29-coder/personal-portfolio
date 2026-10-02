
import { ArrowRight, Mail,  } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-greeting">
            <span className="status-dot"></span>
            Hello, I'm
          </span>

          <h1>
            Nyi Nyi <span>Aung</span>
          </h1>

          <h2 className="hero-role">
            <span className="role-text role-one">
                Junior Frontend Developer
            </span>

            <span className="role-divider">|</span>

            <span className="role-text role-two">
                React Developer
            </span>
          </h2>

          <p>
            I build responsive, modern, and user-friendly web applications
            with React.js. I enjoy turning ideas into clean, functional
            interfaces and continuously improving my frontend skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
              <Mail size={18} />
            </a>
          </div>

          <div className="hero-socials">

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
              <Mail size={21} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>developer.js</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-keyword">const</span>{" "}
                <span className="code-variable">developer</span> = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-string">"Nyi Nyi Aung"</span>,
              </p>

              <p className="code-indent">
                role:{" "}
                <span className="code-string">
                  "Frontend Developer"
                </span>
                ,
              </p>

              <p className="code-indent">
                stack: <span className="code-string">"React.js"</span>,
              </p>

              <p className="code-indent">
                location: <span className="code-string">"Malaysia"</span>,
              </p>

              <p className="code-indent">
                available: <span className="code-boolean">true</span>
              </p>

              <p>{"};"}</p>

              <p className="code-comment">
                // Building the web, one component at a time.
              </p>
            </div>
          </div>

          <div className="hero-floating-card">
            <span>✦</span>
            <div>
              <strong>Build</strong>
              <small>Learn • Improve • Repeat</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;