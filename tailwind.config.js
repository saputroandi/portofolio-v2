/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        running: "runningLogo 50s linear infinite",
        ["running-extend"]: "runningLogoExtend 50s linear infinite",
        ["running-reverse"]: "runningLogoReverse 50s linear infinite",
        ["running-extend-reverse"]: "runningLogoExtendReverse 50s linear infinite",
      },
      keyframes: {
        runningLogo: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        runningLogoExtend: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-200%)" },
        },
        runningLogoReverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        runningLogoExtendReverse: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops) 90%)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
