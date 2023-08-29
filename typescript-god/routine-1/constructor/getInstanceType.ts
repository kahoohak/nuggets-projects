//获取实例的类型
interface Person {
  name: string;
}

interface PersonConstructor {
  new (name: string): Person;
}

type GetInstanceType<Constructor extends new (...args: any) => any> = Constructor extends new (...args: any) => infer InstanceType
  ? InstanceType
  : never;

type Res = GetInstanceType<PersonConstructor>;

export {};
