/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'neutral': 'var(--neutral)',
        'neutral-bg': 'var(--neutral-bg)',
        'neutral-contrast': 'var(--neutral-contrast)',
        'neutral-accent': 'var(--neutral-accent)',
        'accent': 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        'hovercolor': 'var(--hovercolor)'
      }
    },
  },
  plugins: [],
}
