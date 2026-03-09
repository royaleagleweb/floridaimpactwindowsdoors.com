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
        // Soflo Windows Brand Colors - Florida inspired
        palm: {
          50: "#edfff4",
          100: "#d5ffe6",
          200: "#aeffcf",
          300: "#6fffa8",
          400: "#2bfa7a",
          500: "#00e05a",
          600: "#00b848",
          700: "#00903b",
          800: "#007132",
          900: "#005d2b",
          950: "#003417",
        },
        sun: {
          50: "#fffbeb",
          100: "#fff3c6",
          200: "#ffe588",
          300: "#ffd34a",
          400: "#ffc020",
          500: "#f99d07",
          600: "#dd7602",
          700: "#b75206",
          800: "#943f0c",
          900: "#7a340d",
          950: "#461a02",
        },
        ocean: {
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bee2ff",
          300: "#92d1fe",
          400: "#5eb6fc",
          500: "#3996f8",
          600: "#2378ed",
          700: "#1b62da",
          800: "#1c50b0",
          900: "#1c458b",
          950: "#162b54",
        },
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, rgba(0,144,59,0.9) 0%, rgba(27,98,218,0.9) 50%, rgba(0,184,72,0.8) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #00b848 0%, #1b62da 50%, #00e05a 100%)",
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
          "0%": { boxShadow: "0 0 20px rgba(0,184,72,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0,184,72,0.6)" },
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
