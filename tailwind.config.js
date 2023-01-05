/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        running: {
          "0%": { transform: "translateX(80rem)" },
          "100%": { transform: "translateX(-50rem)" },
        },
      },
      animation: {
        running: "running 5s linear infinite",
      },
    },
  },
  plugins: [],
};
