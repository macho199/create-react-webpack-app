const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new BundleAnalyzerPlugin(), // BundleAnalyzerPlugin 추가
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    hot: true,
  },
  // HMR 설정 추가
  target: "web", // 브라우저에서 작동하는 코드로 설정
  //devtool: "eval-source-map", // 디버깅을 위한 설정
  // watchOptions: {
  //   poll: true, // 파일 변경을 폴링하여 확인
  //   ignored: /node_modules/,
  // },
};
