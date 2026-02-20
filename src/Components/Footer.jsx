import { useState, useEffect } from "react";

export const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(now);
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { label: "GITHUB", href: "https://github.com/Malav3077" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/malav-parekh-937139292/" },
    { label: "EMAIL", href: "mailto:malavparekh97@gmail.com" },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-socials">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="footer-social-link"
          >
            <span className="footer-bracket">[</span>
            <span className="footer-roll-word">
              <span className="footer-roll-word-track">
                <span className="footer-roll-word-item">{s.label}</span>
                <span className="footer-roll-word-item">{s.label}</span>
              </span>
            </span>
            <span className="footer-bracket">]</span>
          </a>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left"></div>
        <div className="footer-bottom-center">
          <span className="footer-name-text">Malav Parekh</span>
        </div>
        <div className="footer-bottom-right">
          <span>&copy; All Rights Reserved.</span>
          <span>AHMEDABAD, INDIA: (GMT+5:30) {time}</span>
        </div>
      </div>
    </footer>
  );
};
