"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[18ch] font-display text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>
        </Reveal>
      </div>
      {note && (
        <Reveal delay={0.1}>
          <p className="max-w-sm text-sm text-muted">{note}</p>
        </Reveal>
      )}
    </div>
  );
}
