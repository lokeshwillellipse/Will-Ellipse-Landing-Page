import { useEffect, useRef } from "react";

// Subtle trailing cursor/follower. Small, accessible, and GPU-accelerated.
export default function MouseFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // only enable on fine pointer devices (desktop with mouse)
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(pointer: fine)");
      if (!mq.matches) return;
    }

    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // position dot immediately on first move to avoid jump
      if (pos.current.x === 0 && pos.current.y === 0) {
        pos.current.x = mouse.current.x;
        pos.current.y = mouse.current.y;
        if (dotRef.current) {
          dotRef.current.style.left = `${pos.current.x}px`;
          dotRef.current.style.top = `${pos.current.y}px`;
          dotRef.current.style.opacity = "1";
        }
      }
    };

    const handleLeave = () => {
      // hide when leaving window
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const handleEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseenter", handleEnter);

    const ease = 0.15;
    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;
      if (dotRef.current) {
        // set left/top and rely on CSS translate(-50%, -50%) to center
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full bg-primary/90 shadow-md transition-opacity duration-200 transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: 0, top: 0, opacity: 0 }}
    />
  );
}
