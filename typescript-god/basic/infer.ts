//提取
type First<T extends unknown[]> = T extends [infer First, ...infer Rest] ? First : never

type Res = First<[1,2,3]>

export {}