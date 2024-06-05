/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'second': 'var(--second-family)',
        'family': 'var(--font-family)',
        'third': 'var(--third-family)',
      },
      screens: {
        sm: '320px',
        md: '480px',
        lg: '768px',
        xl: '1000px',
        '2xl': '1220px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '320px',
          md: '480px',
          lg: '768px',
          xl: '1000px',
          '2xl': '1220px',
        },
      },
    },
  },
  plugins: [],
}