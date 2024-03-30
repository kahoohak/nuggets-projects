// import Server from "react-dom/server";

// let Greet = () => <h1>Hello, juejin!</h1>;
// console.log(Server.renderToString(<Greet />));

// 实验：CDN 依赖拉取插件
import { render } from "https://cdn.skypack.dev/react-dom";
import React from 'https://cdn.skypack.dev/react'

let Greet = () => <h1>Hello, juejin!</h1>;

render(<Greet />, document.getElementById("root"));