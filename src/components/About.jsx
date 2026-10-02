import { Code2, MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">About Me</span>
          <h2>
            Building with <span>passion</span> and purpose.
          </h2>
          <p>
            A little more about who I am, what I do, and what I'm working
            toward.
          </p>
        </div>

        <div className="about-container">
          <div className="about-content">
            <h3>Hi, I'm Nyi Nyi Aung.</h3>

            <p>
              I'm a Junior Frontend Developer focused on building responsive,
              modern, and user-friendly web applications with React.js.
            </p>

            <p>
              I enjoy turning ideas into clean and functional interfaces.
              Through personal projects, I'm continuously improving my
              JavaScript, React, UI design, and frontend development skills.
            </p>

            <p>
              I'm currently looking for an opportunity where I can contribute
              to real-world projects, learn from experienced developers, and
              grow as a professional frontend developer.
            </p>
          </div>

          <div className="about-info">
            <div className="about-card">
              <div className="about-card-icon">
                <Code2 size={22} />
              </div>
              <div>
                <span>Focus</span>
                <strong>Frontend Development</strong>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <MapPin size={22} />
              </div>
              <div>
                <span>Location</span>
                <strong>Ipoh, Malaysia</strong>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <GraduationCap size={22} />
              </div>
              <div>
                <span>Education</span>
                <strong>English Major — Sittwe University</strong>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Briefcase size={22} />
              </div>
              <div>
                <span>Looking For</span>
                <strong>Internship / Junior Role</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;