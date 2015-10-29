# React Tutorial STEP-01

## 通过 npm 使用 React

我们建议在 React 中使用 CommonJS 模块系统，比如 [browserify](http://browserify.org/) 或 [webpack](https://webpack.github.io/)。使用 [`react`](https://www.npmjs.com/package/react) 和 [`react-dom`](https://www.npmjs.com/package/react-dom) npm 包.

```js
// main.js
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```


在安装 browserify 之后安装 React DOM 和构建你的应用包。

```sh
$ npm install --save react react-dom
$ browserify -t babelify main.js -o bundle.js
```
