import { useEffect, useRef } from "react";

export const Statement = () => {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="statement-section" id="statement" ref={ref}>
      <div className="statement-container">
        <p className="statement-quote reveal">
          This portfolio is a showcase of my problem-solving mindset, code architecture,
          and the way I turn ideas into reliable interfaces.
        </p>
      </div>
      <div className="statement-divider reveal delay-1">
        <div className="statement-line"></div>
        <div className="statement-line"></div>
      </div>
    </section>
  );
};
