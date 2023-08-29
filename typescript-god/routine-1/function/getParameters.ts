//提取参数的类型
type GetParameters<Func extends Function> = Func extends (...args: infer Args) => unknown ? Args : never 

type Res = GetParameters<(name: string, age: string) => void>

export {}