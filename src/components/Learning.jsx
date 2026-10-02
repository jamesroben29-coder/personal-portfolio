import {
  BookOpen,
  Code2,
  Server,
  PanelsTopLeft,
  GitBranch,
} from "lucide-react";

const learningItems = [
  {
    title: "React.js",
    status: "Currently Learning",
    description:
      "Deepening my knowledge of React, component architecture, state management, hooks, reusable components, and modern frontend patterns.",
    icon: Code2,
  },
  {
    title: "Next.js",
    status: "Next Step",
    description:
      "Learning modern React development with Next.js, including routing, server-side rendering, optimization, and production-ready applications.",
    icon: BookOpen,
  },
  {
    title: "Node.js",
    status: "Next Step",
    description:
      "Planning to learn backend fundamentals with Node.js, REST APIs, authentication, and connecting frontend applications with backend services.",
    icon: Server,
  },
  {
    title: "UI/UX & Figma",
    status: "Improving",
    description:
      "Improving my ability to design clean, responsive, and user-friendly interfaces with better layout, spacing, visual hierarchy, and Figma.",
    icon: PanelsTopLeft,
  },
  {
    title: "Git & GitHub",
    status: "Continuous",
    description:
      "Continuously improving version control, Git workflows, GitHub collaboration, repository management, and professional development practices.",
    icon: GitBranch,
  },
];

function Learning() {
  return (
    <section className="learning-section" id="learning">
      <div className="learning-container">
        <header className="learning-header">
          <span className="section-label">MY LEARNING JOURNEY</span>
          <h2>Always Learning, Always Improving</h2>
          <p>
            I’m continuously improving my frontend development skills by
            building projects, exploring modern technologies, and learning
            better ways to create fast, accessible, and user-friendly web
            experiences.
          </p>
        </header>

        <div className="learning-grid">
          {learningItems.map(({ title, status, description, icon: Icon }) => (
            <article className="learning-card" key={title}>
              <div className="learning-card-top">
                <div className="learning-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <span className="learning-status">{status}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learning;
