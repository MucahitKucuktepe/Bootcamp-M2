/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //? kendi theme ayarlarımızı eklemek için bu kısmı ekliyoruz
  theme: {
    //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.

    extend: {
      colors: {
        primary: "#110A93",
        primary_hover: "#756AB6",
        dark: "#526D82",
        darker: "#27374D",
        blue: {
          950: "#17275c",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
