/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "aurora": "aurora 18s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { opacity: "0.45", transform: "translate(0, 0) scale(1)" },
          "33%": { opacity: "0.65", transform: "translate(2%, -1%) scale(1.03)" },
          "66%": { opacity: "0.5", transform: "translate(-1%, 2%) scale(0.98)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "blur(60px)" },
          "50%": { opacity: "0.75", filter: "blur(80px)" },
        },
      },
    },
  },
  plugins: [],
}
