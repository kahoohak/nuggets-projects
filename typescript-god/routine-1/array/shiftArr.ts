//取去掉了第一个元素的数组
type ShiftArr<T extends unknown[]> = T extends [] ? [] : T extends [infer First, ...infer Rest] ? Rest : never;

type Res = ShiftArr<[1, 2, 3]>;

type Res2 = ShiftArr<[]>;

export {}
