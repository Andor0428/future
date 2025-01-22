import type { Config } from "tailwindcss";

/** @type {import('next').NextConfig} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(200%)' }
        },
        spin3d: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(15deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg) rotateX(15deg)' }
        },
        float: {
          '0%, 100%': { transform: 'perspective(1000px) rotateX(15deg) scale(1)' },
          '50%': { transform: 'perspective(1000px) rotateX(15deg) scale(1.1)' }
        }
      },
      animation: {
        'scan': 'scan 3s linear infinite',
        'spin3d': 'spin3d 8s linear infinite',
        'float': 'float 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};

export default config;
