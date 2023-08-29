//提取构造器的参数类型
interface Person {
  name: string;
}

interface PersonConstructor {
  new (name: string): Person;
}

type getConstructorParameters<Constructor extends new (...args: any) => any> = Constructor extends new (...args: infer ConstructorType) => any
  ? ConstructorType
  : never;

type Res = getConstructorParameters<PersonConstructor>;

export {}