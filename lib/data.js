// ════════════════════════════════════════════════════════════════
//  EDIT YOUR CONTENT HERE
//  Everything the site shows lives in this one file.
//  Swap in your real projects and links. No fake claims — just fill
//  in what's true and leave the rest.
// ════════════════════════════════════════════════════════════════

export const profile = {
  name: "Prosper Edits",
  role: "Video Editor",
  email: "contact.prosperedits@gmail.com",
  whatsapp: "233593615590", // country code + number, no + or spaces
  socials: {
    instagram: "https://www.instagram.com/prosperedits/",
    youtube: "",  // add when ready — icon appears automatically
    tiktok: "",   // add when ready — icon appears automatically
  },
};

// PORTFOLIO ───────────────────────────────────────────────────────
// This is the important part — put your real edits here.
// `thumb`: path to an image in /public (e.g. "/work/1.jpg"). Leave "" for a placeholder.
// `video`: YouTube/Vimeo EMBED url, shown in the popup. Leave "" to just show the thumbnail.
// `desc`:  one short, honest line about the project.
export const categories = ["All", "Long-form", "Short-form"];

export const projects = [
  { id: 1, title: "YouTube edit",        category: "Long-form",  duration: "", desc: "Premier Pro Edit",
    thumb: "https://img.youtube.com/vi/GFM37lZgxt4/hqdefault.jpg",
    video: "https://www.youtube.com/embed/GFM37lZgxt4",
    grad: "from-[#3a2a55] to-[#7b4dc0]" },
  { id: 2, title: "After effects | Animation",      category: "Long form", duration: "", desc: "Animation showcase",
    thumb: "https://img.youtube.com/vi/Ry1R1koVsXo/hqdefault.jpg",
    video: "https://www.youtube.com/embed/Ry1R1koVsXo",
    grad: "from-[#1d3b4d] to-[#2f8fb3]" },
  { id: 3, title: "SaaS Ad",             category: "Short-form", duration: "", desc: "SaaS ad with heavy motion design",
    thumb: "https://img.youtube.com/vi/ZXz3Oc_pfW8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/ZXz3Oc_pfW8",
    grad: "from-[#4d2a2a] to-[#c0764d]" },
  { id: 4, title: "Cinematic short-film", category: "Short-form", duration: "", desc: "Cinematic short-film editing style",
    thumb: "https://img.youtube.com/vi/GsDSocLvprk/hqdefault.jpg",
    video: "https://www.youtube.com/embed/GsDSocLvprk",
    grad: "from-[#3d2a4d] to-[#8f4d7b]" },
  { id: 5, title: "Talking-head short",  category: "Short-form", duration: "", desc: "Clean talking-head edit",
    thumb: "https://img.youtube.com/vi/QD4tbGJWhYA/hqdefault.jpg",
    video: "https://www.youtube.com/embed/QD4tbGJWhYA",
    grad: "from-[#2a4d3a] to-[#4d8f6b]" },
  { id: 6, title: "Long-form edit",      category: "Long-form",  duration: "", desc: "Full-length YouTube Edit",
    thumb: "https://img.youtube.com/vi/OUbxX2u56D4/hqdefault.jpg",
    video: "https://www.youtube.com/embed/OUbxX2u56D4",
    grad: "from-[#2a3d4d] to-[#4d6b8f]" },
];

// THUMBNAIL DESIGNS ───────────────────────────────────────────────
// Shown in their own gallery section. `image` is a file in /public/work.
export const thumbnails = [
  { id: 1, title: "Funded vs Blown",      desc: "Story told in one split frame", image: "/work/thumb-funded-blown.jpg" },
  { id: 2, title: "$0 to $10K Goal",      desc: "Before/after concept design",   image: "/work/thumb-0-to-10k.jpg" },
  { id: 3, title: "Live Scalping XAUUSD", desc: "Livestream thumbnail design",   image: "/work/thumb-live-scalping.jpg" },
  { id: 4, title: "Revealing The Secret", desc: "Curiosity-driven design",       image: "/work/thumb-revealing-secret.jpg" },
  { id: 5, title: "FundingPips Prime",    desc: "Account scaling concept",       image: "/work/thumb-fundingpips.jpg" },
  { id: 6, title: "Simplified Strategy",  desc: "Annotated chart breakdown",     image: "/work/thumb-simplified-strategy.jpg" },
];

// WHAT I DO ────────────────────────────────────────────────────────
export const services = [
  { icon: "Film",       title: "Long-form editing", desc: "Full YouTube videos and interviews — cuts, pacing, b-roll, captions, and sound." },
  { icon: "Smartphone", title: "Short-form",        desc: "Reels, TikToks, and Shorts cut to hold attention from the first second." },
  { icon: "Sparkles",   title: "Motion graphics",   desc: "After Effects intros, titles, and simple animations to lift a video." },
  { icon: "Image",      title: "Thumbnails",        desc: "YouTube thumbnails designed to earn the click — clean, bold, and on-brand." },
];

// TOOLS (About) ────────────────────────────────────────────────────
export const tools = [
  { name: "Premiere Pro",  use: "Editing" },
  { name: "After Effects", use: "Motion" },
  { name: "Photoshop",     use: "Graphics" },
];

// HOW IT WORKS (About) ─────────────────────────────────────────────
export const workflow = [
  { step: "01", title: "Tell me the goal", desc: "What you're making, the style, and the deadline." },
  { step: "02", title: "Send the footage", desc: "Drop your files in a shared folder — any service works." },
  { step: "03", title: "First draft",      desc: "You get a cut to review and give notes on." },
  { step: "04", title: "Revise & deliver", desc: "A couple of rounds of tweaks, then the final file." },
];
