import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FF0055', // A vibrant, slightly rebellious pink/red
        'brand-dark': '#1a1a1a',
        'brand-light': '#f0f0f0',
      },
      fontFamily: {
        // Add a custom font here if you have one, e.g. from Google Fonts
        // sans: ['"Your Custom Font"', 'sans-serif'],
        // mono: ['"Your Mono Font"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': {
            clipPath: 'inset(50% 0 30% 0)',
            transform: 'translate(-20px, -10px)',
          },
          '20%': {
            clipPath: 'inset(10% 0 55% 0)',
            transform: 'translate(10px, 10px)',
          },
          '40%': {
            clipPath: 'inset(60% 0 10% 0)',
            transform: 'translate(-10px, 5px)',
          },
          '60%': {
            clipPath: 'inset(25% 0 40% 0)',
            transform: 'translate(15px, -5px)',
          },
          '80%': {
            clipPath: 'inset(40% 0 20% 0)',
            transform: 'translate(-10px, 10px)',
          },
        },
      },
    },
  },
} satisfies Config;
