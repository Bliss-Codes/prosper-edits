"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "Work", href: "#work" },
  { label: "What I do", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`container-x flex h-[62px] items-center justify-between rounded-full px-5 transition-all duration-300 md:px-7 ${
          scrolled
            ? "border border-line bg-ink/75 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.85)] backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !rounded-full !px-5 !py-2.5">Get in touch</a>
        </div>

        <button
          className="md:hidden text-fg"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="container-x mt-2 overflow-hidden rounded-3xl border border-line bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-fg"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 !rounded-full">
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
