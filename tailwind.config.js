/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Urbanist', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
        pop: ['Poppins', 'sans-serif'],
        syn: ['Syne', 'sans-serif'],
        general: ['General Sans', 'sans-serif'],
      },
      maxWidth: {
        base: '90rem',
      },
      fontSize: {
        28: '1.75rem',
      },
      colors: {
        brand: {
          green: {
            100: '#366C49',
            200: '#2D553B',
          },
          light: {
            100: '#FDF3E7',
            200: '#FFF5E9',
          },
          lightblue: {
            100: '#F6F9FB',
            200: '#E4F2F0',
            300: '#CBD2F6',
          },
          lightgray: '#AEAEB2',
          gary: '#808080',
          darkblue: '#1E2532',
          dark: {
            100: '#2E2E2E',
            200: '#212123',
          },
          orange: '#FF6952',
        },
      },
      backgroundImage: {
        heroBg: "url('../assets/images/shared/bg-hero.svg')",
        secondaryBg: "url('../assets/images/bgImage/sircleBg.svg')",
      },
    },
  },
  plugins: [],
};
