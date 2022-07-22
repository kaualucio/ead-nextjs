/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-horizontal": "bounce-horizontal 2s ease-in-out infinite"
      },
      keyframes: {
        "bounce-horizontal": {
           '0%, 100%' : {
            transform: "translateX(0px)"
          },
          '50%': {
            transform: "translateX(-5px)"
          }
        }
      },
      screens: {
        'sm': '600px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
     
      colors: {
        'primary': '#10b981',
        'primary-dark': '#047857',
        'secondary100': "#181818 ",
        'secondary90': "#27272a",
        'secondary80': "#3f3f46",
        'secondary70': "#52525b",
        'secondary60': "#4b5563",
        'secondary50': "#6b7280 ",
        'secondary40': "#9ca3af",
        'secondary30': "#d1d5db",
        'secondary20': "#e5e7eb",

        'text-color': '#dde3f0',
        'highlight': "#ACACAC",

        'success': '#059669',
        'warning': '#ea580c',
        'info': '#0284c7',
        'error': '#e11d48',
      },
     
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
    },
  },
  plugins: [
    
  ],
}
