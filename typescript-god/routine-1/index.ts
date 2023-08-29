//提取Promise里的类型
type P = Promise<'kaho'>

type GetValueType<P> = P extends Promise<infer Value> ? Value : never

type GetValueResult = GetValueType<P>

export {}