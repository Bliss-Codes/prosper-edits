"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function CTABanner() {
  return (
    <section className="border-t border-line/60 py-20 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-panel p-10 text-center md:p-16">
            <div className="glow left-1/2 top-0 h-[200px] w-[500px] -translate-x-1/2 bg-accent/10" />
            <h2 className="relative mx-auto max-w-[22ch] font-display text-3xl font-extrabold tracking-tight md:text-5xl">
              Good footage deserves better than a{" "}
              <span className="text-accent">rushed edit.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-[46ch] text-lg text-muted">
              If you&apos;re sitting on raw footage — or posting videos that
              don&apos;t look how you imagined — let&apos;s fix that.
            </p>
            <a href="#contact" className="btn-primary relative mt-8">
              <ArrowDown size={16} /> Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
