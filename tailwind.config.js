/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        color1: "hsl(252, 100%, 67%)",
        color2: "hsl(241, 81%, 54%)",
        circle1: "hsla(256, 72%, 46%, 1)",
        circle2: "hsla(241, 72%, 46%, 0)",
        Lightred: "hsl(0, 100%, 67%, 0.1)",
        Orangeyellow: "hsl(39, 100%, 56%, 0.1)",
        Greenteal: "hsl(166, 100%, 37%, 0.1)",
        Cobaltblue: "hsl(234, 85%, 45%, 0.1)",
        tLightred: "hsl(0, 100%, 67%)",
        tOrangeyellow: "hsl(39, 100%, 56%)",
        tGreenteal: "hsl(166, 100%, 37%)",
        tCobaltblue: "hsl(234, 85%, 45%)",

      }
    },
  },
  plugins: [],
}

