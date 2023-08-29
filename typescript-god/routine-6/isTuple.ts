type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? false : true;

type IsTuple<T> = T extends unknown[] ? NotEqual<T['length'], number> : false;

type Res = IsTuple<[1,2,3]>;

type Res2 = IsTuple<number[]>;

export {};
