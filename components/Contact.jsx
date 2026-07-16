"use client";

import { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "Long-form editing", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildText = () =>
    `Hi, I'm ${form.name} (${form.email}).\nI need: ${form.type}.\n\n${form.message}`;

  // Primary: WhatsApp — works on every device, no mail app needed.
  const sendWhatsApp = () => {
    if (!form.name || !form.message) return;
    window.open(
      `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(buildText())}`,
      "_blank",
      "noopener"
    );
    setSent(true);
  };

  // Secondary: email — opens the visitor's mail app pre-filled.
  const sendEmail = () => {
    if (!form.name || !form.message) return;
    const subject = encodeURIComponent(`Video editing — ${form.type}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(buildText())}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-fg placeholder:text-muted/60 outline-none transition focus:border-accent/60 focus:ring-1 focus:ring-accent/40";

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line/60 py-24 md:py-32">
      <div className="glow left-1/2 top-0 h-[280px] w-[560px] -translate-x-1/2 bg-accent/10" />

      <div className="container-x relative grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Contact</p>
            <h2 className="max-w-[14ch] font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Let&apos;s <span className="text-accent">work together.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted">
              Send me what you&apos;re working on, the style you like, and your
              deadline. I&apos;ll get back to you and we&apos;ll take it from there.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                <Mail size={16} /> Email me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <SocialLinks />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="card p-7 md:p-9">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 size={44} className="text-accent" />
                <h3 className="mt-4 font-display text-xl font-semibold">Almost there</h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  Your message is on its way — hit send in the tab that just opened and it&apos;ll reach me.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs text-muted">Name</label>
                    <input className={inputCls} value={form.name} onChange={update("name")} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs text-muted">Email</label>
                    <input type="email" className={inputCls} value={form.email} onChange={update("email")} placeholder="you@email.com" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs text-muted">What do you need?</label>
                  <select className={inputCls} value={form.type} onChange={update("type")}>
                    <option>Long-form editing</option>
                    <option>Short-form</option>
                    <option>Motion graphics</option>
                    <option>Thumbnail design</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs text-muted">Tell me about it</label>
                  <textarea
                    rows={4}
                    className={`${inputCls} resize-none`}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="What you're making, the style, and your deadline."
                  />
                </div>
                <button onClick={sendWhatsApp} className="btn-primary mt-1 w-full">
                  <MessageCircle size={16} /> Send via WhatsApp
                </button>
                <button onClick={sendEmail} className="btn-ghost w-full">
                  <Send size={16} /> Send via Email
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
