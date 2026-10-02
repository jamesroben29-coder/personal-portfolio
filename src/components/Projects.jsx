
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Thwe-Store",
    category: "React E-commerce",
    description:
      "A modern responsive e-commerce web application built with React, featuring product browsing, cart, wishlist, checkout, authentication, and order management.",
    technologies: [
      "React.js",
      "Vite",
      "React Router",
      "Context API",
      "LocalStorage",
    ],
    live: "https://thwe-store.vercel.app/",
    github: "https://github.com/jamesroben29-coder/thwe-store",
    featured: true,
  },
  {
    number: "02",
    title: "NovaTech Gadget Store",
    category: "React E-commerce",
    description:
      "A responsive gadget store with product search, filtering, shopping cart, checkout, authentication, and light/dark theme.",
    technologies: ["React.js", "Vite", "React Router", "CSS3"],
    live: "https://nova-tech-gadget-store.vercel.app/",
    github:
      "https://github.com/jamesroben29-coder/nova-tech-gadget-store",
  },
  {
    number: "03",
    title: "React Todo App",
    category: "React Application",
    description:
      "A task management application built with React to practice state management, component-based development, and responsive UI.",
    technologies: ["React.js", "JavaScript", "CSS3", "Vite"],
    live: "https://nna-react-todo-app.vercel.app/",
    github: "https://github.com/jamesroben29-coder/react-todo-app",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">
          <span className="section-label">
            <Sparkles size={16} />
            Projects
          </span>

          <h2>
            Things I've <span>built</span>
            <br />
            with code.
          </h2>

          <p>
            A selection of projects I've built while developing my
            frontend development skills and learning modern React.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.number}
            >
              {/* Glow */}
              <div className="project-glow"></div>

              {/* Top */}
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-icon">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Bottom */}
              <div className="project-footer">
                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={17} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                  </a>
                </div>

                <a
                    href={project.live}
                     target="_blank"
                     rel="noreferrer"
                     className="view-project"
                    >
                    View Project
                    <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;