import { useState, useEffect } from "react";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-transition");
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    setTimeout(() => document.documentElement.classList.remove("theme-transition"), 400);
  };

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Malav_Final_Resume.pdf";
    link.download = "Malav_Final_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
        <div className="site-container">
          <div className="navbar-inner">
            <a href="#home" className="nav-logo" onClick={() => handleNavClick("home")}>
              <span className="nav-logo-first">Malav</span> <span className="nav-logo-last">Parekh</span>
            </a>

            <ul className="nav-links nav-links-center">
              <li className="nav-item">
                <a href="#about" onClick={() => handleNavClick("about")}>About</a>
                <span className="nav-underline"></span>
              </li>
              <li className="nav-item">
                <a href="#work" onClick={() => handleNavClick("work")}>Projects</a>
                <span className="nav-underline"></span>
              </li>
              <li className="nav-item">
                <a href="#contact" onClick={() => handleNavClick("contact")}>Contact</a>
                <span className="nav-underline"></span>
              </li>
            </ul>

            <div className="nav-right">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <span className="theme-toggle-track">
                  {/* Moon icon */}
                  <svg className="theme-icon theme-icon-moon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                  </svg>
                  {/* Sun icon */}
                  <svg className="theme-icon theme-icon-sun" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                  <span className="theme-toggle-thumb"></span>
                </span>
              </button>
              <button className="resume-btn" onClick={handleDownload}>Resume</button>
            </div>

            <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
              Menu
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>
          Close
        </button>
        <a href="#about" onClick={() => handleNavClick("about")}>About</a>
        <a href="#work" onClick={() => handleNavClick("work")}>Projects</a>
        <a href="#contact" onClick={() => handleNavClick("contact")}>Contact</a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" style={{ marginTop: '8px' }}>
          <span className="theme-toggle-track">
            <svg className="theme-icon theme-icon-moon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
            <svg className="theme-icon theme-icon-sun" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <span className="theme-toggle-thumb"></span>
          </span>
        </button>
        <button className="resume-btn" onClick={() => { handleDownload(); setMenuOpen(false); }}>
          Resume
        </button>
      </div>
    </>
  );
};
