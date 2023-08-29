import { intercept } from "../utils/index.js";

//监控函数执行流程
function sum(...list) {
  return list.reduce((a, b) => a + b);
}

sum = intercept(sum, {
  beforeCall(...args) {
    console.log(`the argument is ${args}`);
    console.time("sum");
  },

  afterCall(res) {
    console.log(`res is ${res}`);
    console.timeEnd("sum");
  },
});

// sum(1,2,3,4,5)

//调整参数顺序
const mySetTimeout = intercept(setTimeout, {
  beforeCall(args) {
    let temp = args[0];
    args[0] = args[1];
    args[1] = temp;
  },
});

// mySetTimeout(1000, () => {
//   console.log('settimout is mine')
// })

//校验参数类型
function foo(a, b) {
  console.log(a, b);
}

foo = intercept(foo, {
  beforeCall(args) {
    console.log(typeof args[1] === "string");
  },
});

// foo(1, 2);
