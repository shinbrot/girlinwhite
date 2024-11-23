/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionDelay: {
        '1000': '1000ms',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};