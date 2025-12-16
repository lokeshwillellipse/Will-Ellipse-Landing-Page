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

    let hoveredEl: Element | null = null;

    const isInteractive = (el: Element | null) => {
      if (!el) return false;
      return (
        (el instanceof HTMLElement && (el.closest('a,button,input,textarea,select,[role="button"]') !== null)) ||
        el.tagName === 'A' ||
        el.tagName === 'BUTTON'
      );
    };

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

      // detect interactive element under pointer and only enlarge (no color sampling)
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el !== hoveredEl) {
        hoveredEl = el;
        if (isInteractive(el) && dotRef.current) {
          dotRef.current.style.transition = 'transform 180ms cubic-bezier(.2,.9,.2,1)';
          dotRef.current.style.transform = `translate(-50%,-50%) scale(1.9)`;
        } else if (dotRef.current) {
          dotRef.current.style.transition = 'transform 220ms cubic-bezier(.2,.9,.2,1)';
          dotRef.current.style.transform = `translate(-50%,-50%) scale(1)`;
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
    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as Element | null;
      if (isInteractive(target) && dotRef.current && target) {
        hoveredEl = target;
        dotRef.current.style.transition = 'transform 180ms cubic-bezier(.2,.9,.2,1)';
        dotRef.current.style.transform = `translate(-50%,-50%) scale(1.9)`;
        dotRef.current.style.opacity = '1';
      }
    };

    const onFocusOut = () => {
      hoveredEl = null;
      if (dotRef.current) {
        dotRef.current.style.transition = 'transform 220ms cubic-bezier(.2,.9,.2,1)';
        dotRef.current.style.transform = `translate(-50%,-50%) scale(1)`;
      }
    };

    window.addEventListener('focusin', onFocusIn);
    window.addEventListener('focusout', onFocusOut);

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
      window.removeEventListener('focusin', onFocusIn);
      window.removeEventListener('focusout', onFocusOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed z-[9999] w-8 h-8 text-primary transition-transform duration-200 transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: 0, top: 0, opacity: 0 }}
    >
      {/* Drone SVG - clearer top-down quadcopter silhouette */}
      <svg viewBox="0 0 48 48" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <style>{`
          .mf-prop { transform-box: fill-box; transform-origin: center; animation: mf-spin 800ms linear infinite; }
          @keyframes mf-spin { to { transform: rotate(360deg); } }
        `}</style>
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* thick arms */}
          <path d="M24 24 L8 12" strokeWidth="3.2" />
          <path d="M24 24 L40 12" strokeWidth="3.2" />
          <path d="M24 24 L8 36" strokeWidth="3.2" />
          <path d="M24 24 L40 36" strokeWidth="3.2" />

          {/* rotor housings: ring + rotating blades */}
          <g className="mf-prop" style={{ animationDelay: '0ms' }}>
            <circle cx="8" cy="12" r="4.2" fill="white" stroke="currentColor" />
            <g fill="currentColor">
              <path d="M8 9.6c1.2 0 2 1.2 2 1.2s-0.8 1.2-2 1.2-2-1.2-2-1.2 0.8-1.2 2-1.2z" />
              <path d="M8 14.4c1.2 0 2-1.2 2-1.2s-0.8-1.2-2-1.2-2 1.2-2 1.2 0.8 1.2 2 1.2z" transform="rotate(60 8 12)" />
            </g>
          </g>

          <g className="mf-prop" style={{ animationDelay: '100ms' }}>
            <circle cx="40" cy="12" r="4.2" fill="white" stroke="currentColor" />
            <g fill="currentColor">
              <path d="M40 9.6c1.2 0 2 1.2 2 1.2s-0.8 1.2-2 1.2-2-1.2-2-1.2 0.8-1.2 2-1.2z" />
              <path d="M40 14.4c1.2 0 2-1.2 2-1.2s-0.8-1.2-2-1.2-2 1.2-2 1.2 0.8 1.2 2 1.2z" transform="rotate(60 40 12)" />
            </g>
          </g>

          <g className="mf-prop" style={{ animationDelay: '50ms' }}>
            <circle cx="8" cy="36" r="4.2" fill="white" stroke="currentColor" />
            <g fill="currentColor">
              <path d="M8 33.6c1.2 0 2 1.2 2 1.2s-0.8 1.2-2 1.2-2-1.2-2-1.2 0.8-1.2 2-1.2z" />
              <path d="M8 38.4c1.2 0 2-1.2 2-1.2s-0.8-1.2-2-1.2-2 1.2-2 1.2 0.8 1.2 2 1.2z" transform="rotate(60 8 36)" />
            </g>
          </g>

          <g className="mf-prop" style={{ animationDelay: '150ms' }}>
            <circle cx="40" cy="36" r="4.2" fill="white" stroke="currentColor" />
            <g fill="currentColor">
              <path d="M40 33.6c1.2 0 2 1.2 2 1.2s-0.8 1.2-2 1.2-2-1.2-2-1.2 0.8-1.2 2-1.2z" />
              <path d="M40 38.4c1.2 0 2-1.2 2-1.2s-0.8-1.2-2-1.2-2 1.2-2 1.2 0.8 1.2 2 1.2z" transform="rotate(60 40 36)" />
            </g>
          </g>

          {/* central fuselage */}
          <rect x="18" y="18" width="12" height="12" rx="3" fill="currentColor" stroke="none" />
          {/* camera / gimbal */}
          <circle cx="24" cy="24" r="2" fill="#fff" />
          <circle cx="24" cy="24" r="0.9" fill="#0f172a" />
          {/* small landing skids */}
          <path d="M19 31 L17 34" strokeWidth="1.4" />
          <path d="M29 31 L31 34" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}
