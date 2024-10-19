/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {},
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(-100)" },
          "100%": { transform: "translateX(calc(-100% - 10px))" },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      animation: {
        "infinite-scroll": "infinite-scroll 5s linear infinite",
        shimmer: "shimmer 2s linear infinite"
      },
    },
  },
};
