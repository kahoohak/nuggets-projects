//获取返回值类型
type GetReturnType<Func extends Function> = Func extends (...args: any[]) => infer ReturnType ? ReturnType : never;

type Res = GetReturnType<() => 'kaho'>

export {}