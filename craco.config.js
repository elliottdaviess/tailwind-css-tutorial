module.exports = {
  style: {
    // for CRA >= v5
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
