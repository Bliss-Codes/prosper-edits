"use client";

import { useEffect, useRef } from "react";

// A soft light that trails the cursor — eased, GPU-cheap, and disabled
// on touch devices and for reduced-motion users.
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !ref.current) return;

    const el = ref.current;
    let tx = innerWidth / 2, ty = innerHeight / 3; // target
    let x = tx, y = ty;                            // eased position
    let raf;

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; el.style.opacity = "1"; };
    const onLeave = () => { el.style.opacity = "0"; };

    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle, rgba(234,255,0,0.028) 0%, rgba(234,255,0,0.012) 35%, transparent 70%)",
      }}
    />
  );
}
