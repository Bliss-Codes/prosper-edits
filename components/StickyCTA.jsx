"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgba(59,130,246,0.5)] transition-transform hover:scale-105"
        >
          <Mail size={16} /> Get in touch
        </motion.a>
      )}
    </AnimatePresence>
  );
}
