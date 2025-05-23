const path = require("path");

module.exports = {
  entry: "./src/App.web.js", // ✅ Entry to your component root
  mode: "production",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    library: {
      type: "commonjs2", // ✅ Correct type for Node + NPM compatibility
    },
    clean: true, // ✅ Cleans /dist before each build
  },

  resolve: {
    extensions: [".web.js", ".js", ".jsx", ".json"],
  },

  externals: {
    // ✅ Prevent bundling react and react-dom
    react: "react",
    "react-dom": "react-dom",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", // ✅ Include env preset for better transpilation
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
