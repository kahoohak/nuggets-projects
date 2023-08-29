//取去掉了最后一个元素的数组
type PopArr<T extends unknown[]> = T extends [] ? [] : T extends [...infer Rest, infer Last] ? Rest : never;

type Res = PopArr<[1, 2, 3]>;

type Res2 = PopArr<[]>;

export {}
