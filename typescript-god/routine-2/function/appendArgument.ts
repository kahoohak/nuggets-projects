//函数类型的参数重新构造
type AppendArgument<Func extends Function, Arg> = Func extends (...args: infer Args) => infer ReturnType ? (...args: [...Args, Arg]) => ReturnType : never;

type Res = AppendArgument<(name: string) => void, number>

const foo: Res = (name, age) => {}

foo('kaho', 18)

export {};
