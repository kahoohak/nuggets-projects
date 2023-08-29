//提取第一个元素
type GetFirst<T extends unknown[]> = T extends [infer First, ...infer Rest] ? First : never;

type Res = GetFirst<[1, 2, 3]>;

type Res2 = GetFirst<[]>

export {};
