/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,tsx,ts,jsx}',
    './components/**/*.{js,tsx,ts,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0A0F',
        'card-bg': '#1A1A2E',
        'card-border': '#2A2A3E',
        'primary-purple': '#6366F1',
        'accent-purple': '#8B5CF6',
        'text-primary': '#FFFFFF',
        'text-secondary': '#9CA3AF',
      },
    },
  },
  plugins: [],
};
