/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        background: {
          100: "var(--bg-100)",
          200: "var(--bg-200)",
          300: "var(--bg-300)",
        },
        accent: {
          100: "var(--accent-100)",
          200: "var(--accent-200)",
        },
        accentLight: {
          100: "var(--accent-lighter-100)",
          200: "var(--accent-lighter-200)",
        },
        accentDark: {
          100: "var(--accent-darker-100)",
          200: "var(--accent-darker-200)",
        },
      },
      fontFamily: {
        glory: ["Glory", "sans-serif"],
        saira: ["Saira Condensed", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    boxShadow: {
      "boxContainer": "4px 4px 0px rgba(255, 255, 255, 1)",
    }
  },
  plugins: [],
};