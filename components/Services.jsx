"use client";

import * as Icons from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading, Reveal } from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="border-t border-line/60 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I do"
          title="What I can edit for you."
          note="A one-off video or an ongoing set of uploads — whatever you need."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Film;
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full bg-panel p-8 transition-colors hover:bg-panel2">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent transition-colors group-hover:border-accent/40">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
