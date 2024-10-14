const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "production",
  entry: ["./src/calculator.js", "./src/main.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    usedExports: false, // Disable tree-shaking
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true, // inject bundle.js in html
    }),
  ],
};
