const { getTextOfJSDocComment } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url('/grid.svg')",
      },
      colors: {
        'neutral': 'var(--neutral)',
        'neutral-bg': 'var(--neutral-bg)',
        'neutral-contrast': 'var(--neutral-contrast)',
        'neutral-accent': 'var(--neutral-accent)',
        'accent': 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        'accent-light': 'var(--accent-light)',
        'hovercolor': 'var(--hovercolor)',
        pink: {
          '800': '#9F005B',
        }
      },
      typography: ({theme}) => ({
        "custom": {
          css: {
            '--tw-prose-invert-body': theme('colors.neutral'),
            '--tw-prose-invert-bold': theme('colors.neutral-contrast'),
            '--tw-prose-invert-headings': theme('colors.neutral-contrast'),
            '--tw-prose-invert-links': theme('colors.accent-2'),
            '--tw-prose-invert-pre-bg': theme('colors.neutral-accent'),
            '--tw-prose-invert-code': theme('colors.neutral-contrast'),
            // '--tw-prose-invert-bold': 'var(--accent)',
          }
        },
        "quoteless": {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      })
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
