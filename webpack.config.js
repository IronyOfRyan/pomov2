const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "/dist/");

module.exports = {
  entry: "./src/component/index.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.mp3$/, loader: "file-loader" }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    https: false,
    disableHostCheck: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
