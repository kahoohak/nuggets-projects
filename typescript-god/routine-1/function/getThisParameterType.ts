//获取this类型
class Kaho {
  name: string;

  constructor() {
    this.name = "kaho";
  }

  hello(this: Kaho) {
    return "hello, I'm " + this.name;
  }
}

const kaho = new Kaho();

type GetThisParameterType<Func extends Function> = Func extends (this: infer ThisType, ...args: any[]) => unknown
  ? ThisType
  : never;

type Res = GetThisParameterType<typeof kaho.hello>;

export {};
