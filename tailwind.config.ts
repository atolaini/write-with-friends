/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#e74c3c',
        background: '#f5f5f5',
        btnPrimary: '#3498db',
        btnSecondary: '#2ecc71',
        btnCta: '#e74c3c',
        textPrimary: '#333333',
        textSecondary: '#666666',
      },
    },
  },
  plugins: [],
};
