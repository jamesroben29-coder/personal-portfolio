import {
  Code2,
  Palette,
  Wrench,
  GitBranch,
} from "lucide-react";



const skillGroups = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Vite",
      "React Router",
      "Context API",
    ],
  },
  {
    icon: Palette,
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "Figma",
      "Lucide React",
    ],
  },
  {
    icon: Wrench,
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "LocalStorage",
    ],
  },
  {
    icon: GitBranch,
    title: "Deployment",
    skills: [
      "Vercel",
      "GitHub Pages",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-header">
          <span className="section-label">Skills</span>

          <h2>
            Tools I use to <span>build</span> modern
            <br />
            web experiences.
          </h2>

          <p>
            A growing set of technologies and tools I use to build
            responsive and user-friendly web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div className="skill-card" key={group.title}>
                <div className="skill-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;