"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Maximize2 } from "lucide-react";
import { categories, projects } from "@/lib/data";
import { SectionHeading } from "@/components/Reveal";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [modal, setModal] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative border-t border-line/60 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured work"
          title="Selected work."
          note="Long-form and short-form edits. Click any one to watch."
        />

        {/* filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                active === c
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted hover:border-accent/40 hover:text-fg"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                onClick={() => setModal(p)}
                className="group card overflow-hidden text-left"
              >
                <div className="relative aspect-video overflow-hidden">
                  {p.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.thumb}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${p.grad} transition-transform duration-500 group-hover:scale-105`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent">
                      {p.video ? (
                        <Play size={20} className="ml-0.5 fill-white text-white transition-colors group-hover:fill-white group-hover:text-white" />
                      ) : (
                        <Maximize2 size={18} className="text-white transition-colors group-hover:text-white" />
                      )}
                    </div>
                  </div>

                  {p.duration && (
                    <span className="absolute bottom-3 left-3 rounded bg-black/55 px-2 py-1 font-mono text-[11px] text-white">
                      {p.duration}
                    </span>
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {p.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.desc}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* lightbox modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`relative w-full overflow-hidden rounded-2xl border border-line bg-panel ${
                modal.category === "Short-form" ? "max-w-sm" : "max-w-4xl"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModal(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-accent hover:text-white"
              >
                <X size={18} />
              </button>

              <div className={`w-full bg-black ${modal.category === "Short-form" ? "aspect-[9/16]" : "aspect-video"}`}>
                {modal.video ? (
                  <iframe
                    src={modal.video}
                    title={modal.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : modal.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={modal.thumb} alt={modal.title} className="h-full w-full object-contain" />
                ) : (
                  <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${modal.grad}`}>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/80">
                      Add your video or image in lib/data.js
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold">{modal.title}</h3>
                  <p className="text-sm text-muted">{modal.desc}</p>
                </div>
                {modal.duration && <span className="font-mono text-xs text-accent">{modal.duration}</span>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
