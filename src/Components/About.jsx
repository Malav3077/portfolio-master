import { useEffect, useRef } from "react";
import profileImg from "../assets/img/malav-profile2.jpg";

export const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("active");
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="site-container">
        <div className="about-grid">
          <div className="about-image-col reveal">
            <div className="about-image-frame">
              <img src={profileImg} alt="Malav Parekh" className="about-image" />
            </div>
          </div>

          <div className="about-text-col">
            <h2 className="reveal delay-1">ABOUT ME</h2>
            <div className="reveal delay-2">
              <p>
                <strong>Malav</strong>, an Odoo developer &amp; AI enthusiast who loves building
                custom modules, integrating AI into business workflows, and crafting modern web applications.
              </p>
            </div>

            <div className="reveal delay-3">
              <p>
                Currently working at RDFlex Pvt Ltd, Gandhinagar. With a Master's in Computer
                Application (MCA) from Gujarat Technological University (8.75 CPI), I specialize
                in Odoo 14-18, Python, AI integration, PostgreSQL and full-stack MERN development.
              </p>
            </div>

            <div className="about-resume reveal delay-4">
              <a href="/Malav_Final_Resume.pdf" download className="resume-label-btn">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
