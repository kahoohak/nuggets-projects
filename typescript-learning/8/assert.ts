//类型断言守卫
// import assert from 'assert';

let name: any = 'linbudu';

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number!');
  }
}

// assert(typeof name === 'number');
assertIsNumber(name)

// number 类型
name.toFixed();

export {}