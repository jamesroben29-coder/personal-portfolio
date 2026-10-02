import {
  GraduationCap,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="education-header">
          <span className="section-label">Education</span>

          <h2>
            My <span>learning</span> journey.
          </h2>

          <p>
            My academic background and the foundation that supports my
            journey into frontend development.
          </p>
        </div>
        <div className="education-card">

          <div className="education-card-top">
            <div className="education-icon">
              <GraduationCap size={28} />
            </div>

            <ArrowUpRight
              className="education-arrow"
              size={25}
            />
          </div>

          <div className="education-content">

            <div className="education-top">
              <span className="education-status">
                Undergraduate
              </span>

              <span className="education-date">
                <CalendarDays size={16} />
                Started 2019
              </span>
            </div>

            <h3>Sittwe University</h3>

            <p className="education-major">
              English Major
            </p>

            <p className="education-description">
              Currently pursuing my undergraduate studies while developing
              practical frontend development skills through personal projects
              and continuous learning.
            </p>

            <div className="education-meta">
              <span>
                <MapPin size={16} />
                Rakhine State, Myanmar
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;