## 1. 프로젝트 초기화

```
# 프로젝트 디렉토리 생성
mkdir my-webpack-react-app
cd my-webpack-react-app

# package.json 생성
npm init -y
```

## 2. 필수 패키지 설치

```bash
# React, ReactDOM 설치
npm install react react-dom

# Babel 관련 패키지 설치
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react

# Webpack 관련 패키지 설치
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

## 3. 설정 파일 생성

```js
// .babelrc

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

```js
// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
```

## 4. React로 작성된 예제 파일 생성

```js
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

```js
// src/App.js

import React from "react";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);

  const btnOnClickEventHandler = () => {
    setState((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };

  return (
    <div>
      <div>{state}</div>
      <button onClick={btnOnClickEventHandler}>sdfsdf</button>
    </div>
  );
};

export default App;
```

```html
// public/index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

## 5. scripts 추가 및 실행

```js
// package.json

"scripts": {
  "build": "webpack --mode=production --progress",
  "start": "webpack serve --open --mode=development --progress" 
},
```

```bash
npm start
npm run build // 빌드
```