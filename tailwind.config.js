/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'black-olive': '#3b3c36',
      },
      fontFamily: {
        // 'heading': ['"Work Sans"'],
        // 'body': ['Merriweather']

        // 'heading': ['"Nunito Sans"'],
        // 'body': ['"Nunito Sans"']

        'heading': ['Quattrocento'],
        'body': ['Lora']
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
