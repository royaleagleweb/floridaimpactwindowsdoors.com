import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark palette with warm amber accents
        palm: {
          50: "#fffbf0",
          100: "#fef0d5",
          200: "#fddaa5",
          300: "#fcc06e",
          400: "#f5a623",
          500: "#e8920a",
          600: "#d17d04",
          700: "#a86207",
          800: "#884d0e",
          900: "#6e3e10",
          950: "#3d1f05",
        },
        sun: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        ocean: {
          50: "#eaf1fa",
          100: "#d0e1f5",
          200: "#a0c3ea",
          300: "#6a9fd8",
          400: "#3a7cc4",
          500: "#2060a8",
          600: "#184a8a",
          700: "#10366e",
          800: "#0a2856",
          900: "#05183f",
          950: "#03112e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, rgba(209,125,4,0.9) 0%, rgba(20,18,17,0.9) 50%, rgba(245,166,35,0.8) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #d17d04 0%, #141211 50%, #f5a623 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(245,166,35,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(245,166,35,0.6)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
