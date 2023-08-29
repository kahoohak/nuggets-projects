interface IDescription {
  readonly name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const obj: IDescription = {
  name: "linbudu",
  age: 599,
  male: true,
  // 无需实现 func 也是合法的
};

obj.male = false
obj.func = () => {
  console.log('func complete')
}

obj.func()
obj.name = 'kaho'


// const tmp25: {} = undefined; // 仅在关闭 strictNullChecks 时成立，下同
// const tmp26: {} = null;
// const tmp27: {} = void 0; // void 0 等价于 undefined

// const tmp28: {} = 'linbudu';
// const tmp29: {} = 599;
// const tmp30: {} = { name: 'linbudu' };
// const tmp31: {} = () => {};
// const tmp32: {} = [];

const tmp33: {} = '123';

console.log(tmp33)

export {}