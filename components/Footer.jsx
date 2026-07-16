import { profile } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="flex items-center gap-2.5 font-display text-base font-bold">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {profile.name}
        </p>
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          © {year} {profile.name} · Video Editor
        </p>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}
