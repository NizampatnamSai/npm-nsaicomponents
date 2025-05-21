const path = require("path");

module.exports = {
  entry: "./src/App.web.js", // 👈 make sure it points to web version
  mode: "production",

  output: {
    path: path.resolve("dist"),
    filename: "main.js",
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".web.js", ".js", ".jsx", ".json"], // 👈 optional but good practice
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css?$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
