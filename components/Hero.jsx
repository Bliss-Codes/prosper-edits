"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Mail } from "lucide-react";

// Loops 0 -> 90s like a playing timeline
function useTimeline(durationSec = 90, loopSec = 24) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setT(0.34); return; }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      setT(((now - start) / 1000 % loopSec) / loopSec);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationSec, loopSec]);
  const secs = Math.floor(t * durationSec);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  return { progress: t * 100, timecode: `00:${mm}:${ss}` };
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-16">
      {/* Background — drop a showreel.mp4 in /public and uncomment for a
          moving cinematic background. */}
      <div className="absolute inset-0 -z-10">
        {/*
        <video autoPlay muted loop playsInline
          className="h-full w-full object-cover opacity-40" poster="/hero-poster.jpg">
          <source src="/showreel.mp4" type="video/mp4" />
        </video>
        */}
        {/* drifting light — slow, cinematic, transform-only (GPU cheap) */}
        <div className="glow left-1/2 top-[-10%] h-[420px] w-[620px] animate-drift1 bg-accent/15" />
        <div className="glow left-[8%] top-[45%] h-[280px] w-[280px] animate-drift2 bg-[#5b3fb0]/20" />
        <div className="glow right-[5%] top-[15%] h-[240px] w-[240px] animate-drift3 bg-accent/10" />
        {/* faint editor grid, like an NLE canvas */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff12 1px, transparent 1px), linear-gradient(to bottom, #ffffff12 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#0a0a0d_72%)]" />
      </div>

      <div className="container-x relative">
        <motion.p variants={fade} initial="hidden" animate="show" custom={0} className="eyebrow mb-6">
          <span className="h-2 w-2 rounded-full bg-accent animate-blink" />
          Video Editor · Open for work
        </motion.p>

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="max-w-[22ch] font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl"
        >
          I don&apos;t just edit videos.
          <br />
          <span className="text-accent">I craft viewer attention.</span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-7 max-w-[50ch] text-lg text-muted md:text-xl"
        >
          High-retention video editing for creators, businesses, and personal
          brands that want to stand out. Take a look below — if it&apos;s a fit,
          get in touch.
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="btn-primary">
            <Play size={16} /> View my work
          </a>
          <a href="#contact" className="btn-ghost">
            <Mail size={16} /> Get in touch
          </a>
        </motion.div>

        {/* Signature: a playhead that actually plays */}
        <Scrubber />
      </div>
    </section>
  );
}

function Scrubber() {
  const { progress, timecode } = useTimeline(90, 24);
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      animate="show"
      custom={4}
      className="mt-12"
      aria-hidden="true"
    >
      <div className="relative h-[2px] w-full rounded-full bg-line">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-accent"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(234,255,0,0.16)]"
          style={{ left: `${progress}%` }}
        />
      </div>
      <div className="mt-3.5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted/70">
        <span className="tabular-nums text-accent/80">{timecode}</span>
        <span className="hidden sm:inline">Premiere Pro · After Effects</span>
        <span>00:01:30</span>
      </div>
    </motion.div>
  );
}
