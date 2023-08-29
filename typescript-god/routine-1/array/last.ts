//提取最后一个元素
type GetLast<T extends unknown[]> = T extends [...infer Rest, infer Last] ? Last : never;

type Res = GetLast<[1, 2, 3]>;

type Res2 = GetLast<[]>

export {};
