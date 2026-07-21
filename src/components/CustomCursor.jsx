import { useEffect, useRef } from "react";

/**
 * Round cursor that follows the pointer with a soft lerp and uses
 * mix-blend-mode: difference, so text/elements it passes over invert
 * (the "text changes color on hover" effect). Grows over interactive
 * elements. Disabled on touch / coarse pointers and reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const dot = dotRef.current;
    if (!dot) return;

    document.documentElement.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf;
    let visible = false;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        visible = true;
        dot.classList.remove("cursor-hidden");
      }
    };
    const onLeave = () => {
      visible = false;
      dot.classList.add("cursor-hidden");
    };
    const onDown = () => dot.classList.add("cursor-grow");
    const onUp = () => syncHoverState();

    // grow when over interactive elements (event delegation → catches
    // dynamically rendered nodes too)
    const interactiveSel = "a, button, [role='button'], input, textarea, select, label";
    let overInteractive = false;
    const syncHoverState = () => {
      dot.classList.toggle("cursor-grow", overInteractive);
    };
    const onOver = (e) => {
      if (e.target.closest && e.target.closest(interactiveSel)) {
        overInteractive = true;
        dot.classList.add("cursor-grow");
      }
    };
    const onOut = (e) => {
      if (e.target.closest && e.target.closest(interactiveSel)) {
        overInteractive = false;
        dot.classList.remove("cursor-grow");
      }
    };

    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot cursor-hidden" aria-hidden="true" />;
}
