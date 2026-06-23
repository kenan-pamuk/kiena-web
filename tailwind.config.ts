import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Arial', 'sans-serif'] },
      colors: { ink: '#050614', panel: '#0a0d22', line: 'rgba(255,255,255,.10)' },
      boxShadow: { neon: '0 0 35px rgba(198,54,255,.55), 0 0 80px rgba(31,111,255,.25)' }
    }
  },
  plugins: []
};
export default config;
