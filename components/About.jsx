"use client";

import { tools, workflow, profile } from "@/lib/data";
import { SectionHeading, Reveal } from "@/components/Reveal";

function ProfilePhoto() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/me.jpg"
        alt={`${profile.name} — video editor`}
        className="aspect-[4/5] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-3 rounded bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
        {profile.name}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-line/60 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="About" title="A bit about me." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-muted">
                I&apos;m a video editor working with creators and small brands. I
                handle the cutting, pacing, sound, and simple motion so your
                footage turns into something clean and worth watching.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                I&apos;m still growing as an editor, and I care about getting it
                right — clear communication, honest timelines, and work I&apos;m
                happy to put my name on. Tell me the goal and I&apos;ll take it
                from there.
              </p>
            </Reveal>

            <div className="mt-12">
              <p className="eyebrow mb-6">How it works</p>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {workflow.map((w, i) => (
                  <Reveal key={w.step} delay={i * 0.05}>
                    <div className="h-full bg-panel p-6">
                      <span className="font-mono text-sm text-accent">{w.step}</span>
                      <h4 className="mt-2 font-display text-base font-semibold">{w.title}</h4>
                      <p className="mt-1.5 text-sm text-muted">{w.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.05}>
              <ProfilePhoto />
            </Reveal>
            <Reveal delay={0.1}>
              <aside className="card h-fit p-7">
                <p className="eyebrow mb-6">What I use</p>
                <div className="space-y-1">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-between border-b border-line py-4 last:border-0"
                    >
                      <span className="font-medium">{tool.name}</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-muted">
                        {tool.use}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
