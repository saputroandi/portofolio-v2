/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        runningLogo: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
      animation: {
        running: "runningLogo 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
