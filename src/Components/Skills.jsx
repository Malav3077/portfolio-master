import { useEffect, useRef } from "react";

const skills = [
  { name: "Python", color: "#3776AB", abbr: "Py" },
  { name: "Odoo", color: "#714B67", abbr: "Od" },
  { name: "JavaScript", color: "#F7DF1E", abbr: "JS", dark: true },
  { name: "PostgreSQL", color: "#336791", abbr: "Pg" },
  { name: "React", color: "#61DAFB", abbr: "Re", dark: true },
  { name: "Node.js", color: "#339933", abbr: "Nd" },
  { name: "HTML", color: "#E34F26", abbr: "H5" },
  { name: "CSS", color: "#1572B6", abbr: "C3" },
  { name: "MongoDB", color: "#47A248", abbr: "Mg" },
  { name: "Express", color: "#666666", abbr: "Ex" },
  { name: "Git", color: "#F05032", abbr: "Gt" },
  { name: "GitHub", color: "#aaaaaa", abbr: "GH", dark: true },
  { name: "XML", color: "#0060AC", abbr: "XL" },
  { name: "REST APIs", color: "#FF6C37", abbr: "AP" },
  { name: "OWL", color: "#714B67", abbr: "OW" },
  { name: "Bootstrap", color: "#7952B3", abbr: "Bs" },
  { name: "Linux", color: "#FCC624", abbr: "Lx", dark: true },
  { name: "Postman", color: "#FF6C37", abbr: "Pm" },
];

export const Skills = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={ref}>
      {/* Large watermark background text */}
      <div className="skills-watermark">SKILLS</div>

      <h2 className="skills-title reveal">Skills</h2>

      {/* Diamond geometric icon */}
      <div className="skills-diamond reveal delay-1">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M16 2L26 16L16 30L6 16Z" />
          <path d="M16 8L22 16L16 24L10 16Z" />
        </svg>
      </div>

      {/* Flip text: I CONSTANTLY TRY TO [word] */}
      <div className="skills-flip-text reveal delay-2">
        <span className="skills-flip-static">I CONSTANTLY TRY TO</span>
        <span className="skills-flip-word">
          <span className="skills-flip-track">
            <span>IMPROVE</span>
            <span>LEARN</span>
            <span>ADAPT</span>
            <span>GROW</span>
            <span>IMPROVE</span>
          </span>
        </span>
      </div>

      {/* Skill tags with colored icons */}
      <div className="skills-tags-wrap reveal delay-3">
        {skills.map((skill, i) => (
          <div key={i} className="skill-tag">
            <span
              className="skill-icon"
              style={{
                background: skill.color,
                color: skill.dark ? '#111' : '#fff'
              }}
            >
              {skill.abbr}
            </span>
            <span className="skill-tag-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
