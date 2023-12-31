import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        gray: '#EDF1F8',
      },
      fontFamily: {
        ...defaultTheme.fontFamily,
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        ...defaultTheme.fontFamily.sans,
      },
    },
  },
  plugins: [],
};
