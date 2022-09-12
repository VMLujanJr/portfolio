/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors: {
      'c-yellow': '#fcde67',
      'c-blue': '#5bccf6',
      'c-black': '#030e12',
      'c-gray': '#363636',
      'c-white': '#FFFFFF'
    },
    backgroundColor: {
      'c-yellow': '#fcde67',
      'c-blue': '#5bccf6',
      'c-black': '#030e12',
      'c-gray': '#363636',
      'c-white': '#FFFFFF',
      'c-transparent-black': (0, 0, 0, 0.6)
    },
    fontFamily: {
      Aboreto: ['Aboreto', 'cursive'],
      Audiowide: ['Audiowide', 'cursive'],
      Bhu: ['BhuTuko Expanded One', 'cursive'],
      Cutive: ['Cutive Mono', 'monospace'],
      Eagle: ['Eagle Lake', 'cursive'],
      Engage: ['Engagement', 'cursive'],
      Ephesis: ['Ephesis', 'cursive'],
      Gravitas: ['Gravitas One', 'cursive'],
      Gwen: ['Gwendolyn', 'cursive'],
      Josefin: ['Josefin Sans', 'sans-serif'],
      Lora: ['Lora', 'serif'],
      Meddon: ['Meddon', 'cursive'],
      Nanum: ['Nanum Gothic', 'sans-serif'],
      Open: ['Open Sans', 'sans-serif'],
      Race: ['Racing Sans One', 'cursive'],
      Rom: ['Rommetto One', 'cursive'],
    },
    fontSize: {
      '7xl': '5rem'
    },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 2px 2px rgba(200, 200, 150, 0.95)'
        ]
      },
    },
    plugins: [],
  }
}