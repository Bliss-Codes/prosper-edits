/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:    "#0a0a0d",
        panel:  "#111116",
        panel2: "#16161d",
        line:   "#26262f",
        fg:     "#f4f4f7",
        muted:  "#8b8b98",
        accent: {
          DEFAULT: "#3B82F6",
          soft:    "#60A5FA",
          dim:     "#1E3A5F",
        },
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans:    ["Inter", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: { content: "1200px" },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".3" } },
        drift1: {
          "0%,100%": { transform: "translate(-50%, 0) scale(1)" },
          "33%":     { transform: "translate(-42%, 6%) scale(1.15)" },
          "66%":     { transform: "translate(-58%, -4%) scale(0.95)" },
        },
        drift2: {
          "0%,100%": { transform: "translate(0, 0) scale(1)" },
          "50%":     { transform: "translate(22%, -14%) scale(1.25)" },
        },
        drift3: {
          "0%,100%": { transform: "translate(0, 0) scale(1)", opacity: ".35" },
          "50%":     { transform: "translate(-18%, 10%) scale(1.1)", opacity: ".55" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink:   "blink 1.6s ease-in-out infinite",
        drift1:  "drift1 22s ease-in-out infinite",
        drift2:  "drift2 26s ease-in-out infinite",
        drift3:  "drift3 30s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
