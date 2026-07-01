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
      title: "Platxa — AI Odoo Module Generator",
      desc: "AI SaaS platform that converts natural language prompts into validated and deployed Odoo ERP modules automatically using LLM orchestration.",
      tags: ["Python", "FastAPI", "Odoo", "PostgreSQL", "Docker", "Kubernetes"],
      link: "https://github.com/platxa/",
      badge: "Working",
    },
    {
      num: "_02.",
      title: "Hotel Management System",
      desc: "Custom Odoo 18 ERP with room booking, check-in/out, automated billing, and Razorpay online payment gateway integration.",
      tags: ["Odoo 18", "Python", "ORM", "PostgreSQL", "Razorpay"],
      link: "https://github.com/Malav3077/Hotel-Management--odoo18",
    },
    {
      num: "_03.",
      title: "Foodie Hub — Food Ordering App",
      desc: "Full-stack food ordering platform with real-time order tracking, JWT authentication, and multi-role support (user, restaurant, admin).",
      tags: ["React.js", "FastAPI", "Docker", "JWT Auth"],
      link: "https://github.com/Malav3077/Foodie-hub-Delivery-App",
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
                <div className="project-title">{p.title} {p.badge && <span style={{fontSize:"11px",background:"#00d2c8",color:"#000",borderRadius:"4px",padding:"2px 7px",marginLeft:"8px",fontWeight:700,verticalAlign:"middle"}}>{p.badge}</span>}</div>
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
