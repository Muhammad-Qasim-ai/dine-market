/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'inputcolor': ' #e4e5eb',
        'cartbg': '#f1f1f1',
        'salecolor': '#e1edff',
        'startbg': '#212121',
        'startcol': '#fff',
        'picbg': '#ffece3',
        'promo1': '#0062f5',
        'promobg1': '#d6d6d8',
        'promobg2': '#212121',
        'promobg3': '#efe1c7',
      },
      width: {
        '3.5/12': '30%',
        '600': '37.5rem',
        '63.5': '63.5rem',
      },
      height: {
        '600': '37.5rem',
        '650': '650px'
      },
      fontFamily: {
        'sora': 'Sora,sans-serif'
      },
      gridTemplateColumns: {
        '1fr': '1fr 1fr 1fr 1fr'
      },
      minWidth: {
        '544': '448px',
      },
      maxWidth: {
        '600': '742px',
      },
      maxHeight: {
        '434': '27.125rem',
      },
      screens: {
        '2md': '800px',
        '4md': '900px',
        '3md': '620px',
        '2lg': '1200px',
        '1lg': '1030px',
        '2sm': '360px',
        '3xl': '2200px',
      },
      margin: {
        '-0.85': '-0.85rem'
      },
      letterSpacing: {
        'widiest': '0.3em'
      },
      flex: {
        '2': '2 1'
      }
      
      
    },
  },
  plugins: [],
}
