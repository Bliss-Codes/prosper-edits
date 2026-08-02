"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import { thumbnails } from "@/lib/data";
import { SectionHeading, Reveal } from "@/components/Reveal";

export default function Thumbnails() {
  const [modal, setModal] = useState(null);

  return (
    <section id="thumbnails" className="border-t border-line/60 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Thumbnail design"
          title="Designed to earn the click."
          note="The edit keeps them watching — the thumbnail gets them there. Click any design to see it full-size."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {thumbnails.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.05}>
              <button
                onClick={() => setModal(t)}
                className="group card block w-full overflow-hidden text-left"
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                    <div className="flex h-12 w-12 scale-75 items-center justify-center rounded-full border border-white/25 bg-black/45 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <Maximize2 size={17} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted">{t.desc}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModal(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-accent hover:text-ink"
              >
                <X size={18} />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={modal.image} alt={modal.title} className="w-full" />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{modal.title}</h3>
                <p className="text-sm text-muted">{modal.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
