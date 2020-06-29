module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file",
        include: "./src/assets/",
      },
    ],
  },
};
