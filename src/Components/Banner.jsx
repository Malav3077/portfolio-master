import { useEffect, useRef } from "react";

export const Banner = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal, .line-reveal");
    if (!els) return;
    const t = setTimeout(() => els.forEach((el) => el.classList.add("active")), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      {/* Left side nav lines */}
      <nav className="hero-side-nav reveal delay-6">
        <div className="nav-line"></div>
        <div className="nav-line"></div>
        <div className="nav-line"></div>
      </nav>

      {/* Main hero content - two columns */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="word-rotator reveal delay-2">
            <div className="word-rotator-track">
              <span className="word-rotator-word">DEVELOPER</span>
              <span className="word-rotator-word">BUILDER</span>
              <span className="word-rotator-word">CREATIVE</span>
              <span className="word-rotator-word">CRAFTING</span>
              <span className="word-rotator-word">FOCUSED</span>
              <span className="word-rotator-word">DEVELOPER</span>
            </div>
          </div>
        </div>

        <div className="hero-divider reveal delay-3"></div>

        <div className="hero-right reveal delay-4">
          <span className="hero-role-title">Odoo Developer &middot; AI Enthusiast</span>
          <span className="hero-tagline">Building smart business solutions with Odoo, AI integration &amp; modern web tech</span>
          <span className="hero-location">Based in Ahmedabad &middot; Odoo &middot; Python &middot; AI &middot; MERN</span>
        </div>
      </div>

      {/* Scroll indicator - bottom left vertical */}
      <div className="hero-scroll reveal delay-6">
        <span className="scroll-text">SCROLL DOWN</span>
        <div className="scroll-line"></div>
      </div>

      {/* Social icons - bottom right */}
      <div className="hero-socials reveal delay-6">
        <a href="mailto:malavparekh97@gmail.com" className="social-circle" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 4L12 13L2 4"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/malav-parekh-937139292/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="https://github.com/Malav3077" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
          </svg>
        </a>
      </div>
    </section>
  );
};
