import { useEffect, useRef } from "react";

export const Projects = () => {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      num: "_01.",
      title: "Hotel Management",
      desc: "Custom Odoo 18 module for hotel operations — room booking, guest check-in/out, invoicing, and availability tracking.",
      tags: ["Odoo 18", "Python", "PostgreSQL"],
      link: "https://github.com/Malav3077/Hotel-Management--odoo18",
    },
    {
      num: "_02.",
      title: "Job Portal MERN",
      desc: "Full-stack job portal with Job Seeker & Employer roles, real-time email automation, authentication, and recruiter dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/Malav3077/JOB_PORTAL_MERN",
    },
  ];

  return (
    <section className="projects-section" id="work" ref={ref}>
      {/* Header line: --- EACH PROJECT SHAPED HOW I WORK TODAY. --- */}
      <div className="projects-header reveal">
        <div className="projects-header-line"></div>
        <span className="projects-header-text">EACH PROJECT SHAPED HOW I WORK TODAY.</span>
        <div className="projects-header-line"></div>
      </div>

      {/* Giant staggered heading: SELECTED / PROJECTS / SHOWCASE */}
      <div className="projects-giant-heading">
        <h2 className="projects-giant-word reveal delay-1">SELECTED</h2>
        <h2 className="projects-giant-word projects-giant-indent reveal delay-2">PROJECTS</h2>
        <h2 className="projects-giant-word projects-giant-indent-2 projects-giant-solid reveal delay-3">SHOWCASE</h2>
      </div>

      {/* Project list */}
      <div className="projects-list">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-item reveal delay-${Math.min(i + 1, 4)}`}
          >
            <div className="project-index">{p.num}</div>
            <div className="project-content">
              <div className="project-title-row">
                <div className="project-title">{p.title}</div>
                <svg className="project-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((tag, j) => (
                  <span key={j} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
