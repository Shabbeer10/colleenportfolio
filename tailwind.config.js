/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#4f46e5',
        accent: '#22c55e',
        'text-primary': '#374151',
        'text-secondary': '#6b7280',
        'bg-light': '#f3f4f6',
      },
    },
  },
  plugins: [],
}