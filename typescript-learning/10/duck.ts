//结构化类型系统
//鸭子类型
class Cat {
  eat() { }
}

class Dog {
  bark() {}
  eat() { }
}

function feedCat(cat: Cat) { }

feedCat(new Dog())

//typescript模拟标称类型系统
export declare class TagProtector<T extends string> {
  protected __tag__: T;
}

export type Nominal<T, U extends string> = T & TagProtector<U>;

export type CNY = Nominal<number, 'CNY'>;

export type USD = Nominal<number, 'USD'>;

const CNYCount = 100 as CNY;

const USDCount = 100 as USD;

function addCNY(source: CNY, input: CNY) {
  return (source + input) as CNY;
}

addCNY(CNYCount, CNYCount);

// 报错了！
addCNY(CNYCount, USDCount);

export {}