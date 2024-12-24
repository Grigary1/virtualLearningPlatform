/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./app/(defaultPage)/(HomeScreen)/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        textCol: {
          PRIMARY: '#ff6666',
           // Replace with your color
        },
      },
    },
  },
  plugins: [],
}