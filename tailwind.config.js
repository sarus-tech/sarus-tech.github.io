/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light-green': '#428e92',
      'main-green': '#006064',
      'dark-green': '#00363a',
      'lighter-green': '#eaf3f3',
      'lightest-green': '#ffffff',
      'light-red': '#ff616f',
      'main-red': '#ff1744',
      'dark-red': '#c4001d',
      'lighter-red': '#ffaaa3',
      'lightest-red': '#ffccc2',
      'dark': '#2b303a',
    },
    fontFamily: {
      'sans': ['var(--font-red-hat-text)', 'sans'],
      'serif': ['var(--font-ovo)', 'serif'],
      'mono': ['var(--font-fira-code)', 'monospace'],
      'display': ['var(--font-red-hat-display)'],
      'body': ['var(--font-red-hat-text)', 'sans-serif'],
    },
  },
  plugins: [],
}
