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
    extend: {},
    // colors: {
    //   'purple': '#62287d',
    //   'orange': '#ef7f1a',
    //   'white': '#FFFFFF',
    //   'slate': '#f1f5f9',
    //   'emerald':'#32c18d',
    //   'em':  'rgb(14 165 233 / 0.08)',
    //   'cyan': '#06b6d4',
    //   'cyan2': '#0891b2',
    //   'cyan3': '#67e8f9',
    //   'cyan4':'#0ea5e9',
    //   'black': 'rgb(0 0 0)',
    // 'netural':"#262626"
    // },
  },
  plugins: [],
};
