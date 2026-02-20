import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    // Check if mobile
    if (window.innerWidth < 768) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Dot follows immediately
      dot.style.left = `${e.clientX - 4}px`;
      dot.style.top = `${e.clientY - 4}px`;
    };

    // Outline follows with smooth lag (like divyang.tech)
    const animateOutline = () => {
      const dx = mousePos.current.x - outlinePos.current.x;
      const dy = mousePos.current.y - outlinePos.current.y;
      outlinePos.current.x += dx * 0.12;
      outlinePos.current.y += dy * 0.12;
      outline.style.left = `${outlinePos.current.x - 18}px`;
      outline.style.top = `${outlinePos.current.y - 18}px`;
      rafRef.current = requestAnimationFrame(animateOutline);
    };

    const onMouseOver = (e) => {
      const t = e.target;
      if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button") ||
        t.classList.contains("project-card") ||
        t.closest(".project-card") ||
        t.classList.contains("skill-tag")
      ) {
        outline.classList.add("hover");
      }
    };

    const onMouseOut = () => {
      outline.classList.remove("hover");
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    rafRef.current = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
};
