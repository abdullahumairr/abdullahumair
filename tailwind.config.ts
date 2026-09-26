import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      colors: {
        bg: { light: "#FAFAFA", dark: "#0A0A0A" },
        card: { light: "#FFFFFF", dark: "#141414" },
        border: { light: "#E5E5E5", dark: "#2A2A2A" },
        ink: { light: "#0A0A0A", dark: "#FFFFFF" },
        muted: { light: "#6B6B6B", dark: "#A3A3A3" },
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatY2: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        spinSlow: {
          from: { transform: "rotate(0)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        blink: "blink 1s step-end infinite",
        floatY: "floatY 4s ease-in-out infinite",
        floatY2: "floatY2 3.2s ease-in-out infinite",
        fadeUp: "fadeUp .6s cubic-bezier(0.22,1,0.36,1) both",
        fadeIn: "fadeIn .5s ease-out both",
        scaleIn: "scaleIn .5s cubic-bezier(0.22,1,0.36,1) both",
        spinSlow: "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
