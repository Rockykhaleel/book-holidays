const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "200px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
