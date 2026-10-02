import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedinIn, } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <span className="section-label">
            <Send size={16} />
            Contact
          </span>

          <h2>
            Let's build something
            <span> great.</span>
          </h2>

          <p>
            Have a project idea, internship opportunity, or just want to
            connect? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          {/* Left */}
          <div className="contact-info">

            <div className="contact-info-header">
              <h3>Get in touch</h3>
              <p>
                I'm currently open to frontend development internships,
                junior opportunities, and interesting projects.
              </p>
            </div>

            <a
              href="mailto:jamesroben29@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>Email</span>
                <strong>jamesroben29@gmail.com</strong>
              </div>

              <ArrowUpRight size={20} />
            </a>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>Location</span>
                <strong>Ipoh, Malaysia</strong>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/nyi-nyi-aung-536419433"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </div>

              <div>
                <span>LinkedIn</span>
                <strong>Connect with me</strong>
              </div>

              <ArrowUpRight size={20} />
            </a>

            <a
              href="https://github.com/jamesroben29-coder"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </div>

              <div>
                <span>GitHub</span>
                <strong>View my projects</strong>
              </div>

              <ArrowUpRight size={20} />
            </a>

          </div>

          {/* Right */}
          <form className="contact-form">

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <ArrowUpRight size={19} />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;