import "./globals.css";
import StickyCTA from "@/components/StickyCTA";
import CursorGlow from "@/components/CursorGlow";

// ── SEO ─────────────────────────────────────────────────────────
// Edit these fields with your real name, domain, and description.
export const metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Prosper Edits — Video Editor",
    template: "%s · Prosper Edits",
  },
  description:
    "Video editor for creators and brands. Short-form, long-form, and motion graphics. Take a look at my work and get in touch.",
  keywords: [
    "video editor",
    "youtube editor",
    "short form editor",
    "motion graphics",
    "freelance video editor",
  ],
  openGraph: {
    title: "Prosper Edits — Video Editor",
    description:
      "Video editor for creators and brands. Short-form, long-form, and motion graphics.",
    type: "website",
    url: "https://your-domain.com",
    siteName: "Prosper Edits",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosper Edits — Video Editor",
    description:
      "Edits that keep people watching. For creators and brands who want results.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0a0a0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <CursorGlow />
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
