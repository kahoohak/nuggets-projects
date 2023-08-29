//对象
interface IPerson {
  name: string;
  age: number;
}

const obj: IPerson = {
  name: "kahoohak",
  age: 18,
};

//函数
interface SayHello {
  (name: string): string;
}

const func: SayHello = (name: string) => {
  return "hello, " + name;
};

//构造器
interface PersonConstructor {
  new (name: string, age: number): IPerson;
}

function createPerson(ctor: PersonConstructor): IPerson {
  return new ctor("kahoohak", 18);
}

//可索引签名
interface IPerson2 {
  [prop: string]: string | number
}

const obj2: IPerson2 = {
  name: 'kahoohak',
  age: 19
}

export {}
