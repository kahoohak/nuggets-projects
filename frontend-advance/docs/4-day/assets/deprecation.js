import { deprecate } from "../utils/index.js";

function foo() {
  console.log("foo");
}

const fee = deprecate(foo, "foo", "fee");
fee();
