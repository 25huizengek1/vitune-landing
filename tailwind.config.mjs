/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        jiggle: "jiggle 0.5s ease-in-out both infinite",
        tada: "tada 3s ease-in-out both",
      },
      keyframes: {
        jiggle: {
          "0%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
        tada: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(0.9) rotate(-3deg)" },
          "20%": { transform: "scale(0.9) rotate(-3deg)" },
          "30%": { transform: "scale(1.1) rotate(3deg)" },
          "40%": { transform: "scale(1.1) rotate(-3deg)" },
          "50%": { transform: "scale(1.1) rotate(3deg)" },
          "60%": { transform: "scale(1.1) rotate(-3deg)" },
          "70%": { transform: "scale(1.1) rotate(3deg)" },
          "80%": { transform: "scale(1.1) rotate(-3deg)" },
          "90%": { transform: "scale(1.1) rotate(3deg)" },
          "100%": { transform: "scale(1) rotate(0)" },
        },
      },
    },
  },
  plugins: [],
};
