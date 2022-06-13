const path = require("path");

module.exports = {
  entry: path.join(__dirname, "client", "src", "index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client", "public"),
    publicPath:'/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  
  watch: true
};
