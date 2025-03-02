/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Add the custom color #7F19E9
        '7F19E9': '#7F19E9',
      },
      fontFamily: {
        lalezar: ["Lalezar", "sans-serif"], // Add Lalezar font
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-in-out forwards", // Fade-in animation
        "fade-out": "fadeOut 0.2s ease-in-out forwards", // Fade-out animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};