import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        deepGreen: "#0F3D2E",
        forestGreen: "#166534",
        freshGreen: "#22C55E",
        softCream: "#F8F5EC",
        goldAccent: "#D6A94A",
        darkText: "#17201A",
        mutedText: "#647067"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(15, 61, 46, 0.14)",
        soft: "0 16px 45px rgba(23, 32, 26, 0.08)",
        glow: "0 18px 60px rgba(214, 169, 74, 0.22)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top right, rgba(214, 169, 74, 0.26), transparent 28%), radial-gradient(circle at bottom left, rgba(34, 197, 94, 0.22), transparent 34%)",
        "cream-grid":
          "linear-gradient(rgba(15, 61, 46, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 61, 46, 0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
