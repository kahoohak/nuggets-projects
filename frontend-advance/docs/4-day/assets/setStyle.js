import { batch, continus, fold, reverse, spread, pipe, _batch_ } from "../utils/index.js";

// const setStyle = batch((el, key, value) => {
//   el.style[key] = value;
// });

// const setStyle = spread(
//   reverse(
//     fold(
//       continus(([key, value], el) => {
//         el.style[key] = value;
//         return [key, value];
//       })
//     )
//   )
// );

const setStyle = _batch_(([key, value], el) => {
  el.style[key] = value;
  return [key, value];
});

const items = document.querySelectorAll("li:nth-child(2n+1)");

// setStyle([...items], "color", "red");

setStyle([...items], "color", "red");
