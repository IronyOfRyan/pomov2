const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/component/index.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.mp3$/, loader: "file-loader" }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public/",
    watchContentBase: true,
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
