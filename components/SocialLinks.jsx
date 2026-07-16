import { profile } from "@/lib/data";

// Official brand glyphs as inline SVGs (lucide has no TikTok/WhatsApp marks)
const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M19.9 7.02a5.6 5.6 0 0 1-3.34-1.1 5.62 5.62 0 0 1-2.02-2.86A5.7 5.7 0 0 1 14.3 2h-3.03v13.06a3.06 3.06 0 1 1-2.18-2.93V9.02a6.1 6.1 0 1 0 5.21 6.04V9.65a8.55 8.55 0 0 0 5.6 2.06V8.68c0-.55-.0-1.1 0-1.66Z" />
  </svg>
);

const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.05 2a9.9 9.9 0 0 0-8.57 14.86L2 22l5.3-1.39A9.9 9.9 0 1 0 12.05 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.14.82.84-3.07-.2-.31a8.2 8.2 0 1 1 6.98 3.9Zm4.5-6.14c-.25-.13-1.46-.72-1.68-.8-.23-.08-.4-.12-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.1-.5.12-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.55-1.35-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.13.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

const YouTubeIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.4-4.8ZM10 15.2V8.8L15.6 12 10 15.2Z" />
  </svg>
);

const links = [
  { label: "WhatsApp",  href: profile.whatsapp ? `https://wa.me/${profile.whatsapp}` : "", Icon: WhatsAppIcon },
  { label: "Instagram", href: profile.socials.instagram, Icon: InstagramIcon },
  { label: "TikTok",    href: profile.socials.tiktok,    Icon: TikTokIcon },
  { label: "YouTube",   href: profile.socials.youtube,   Icon: YouTubeIcon },
].filter((l) => l.href);

export default function SocialLinks({ size = "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <div className="flex items-center gap-3">
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`${box} flex items-center justify-center rounded-full border border-line bg-white/[0.02] text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent`}
        >
          <Icon className={icon} />
        </a>
      ))}
    </div>
  );
}
