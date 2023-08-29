//查找数组是否包含某个值
type Includes<Arr extends unknown[], Item> = Arr extends [infer One, ...infer Rest]
  ? IsEqual<One, Item> extends true
    ? true
    : Includes<Rest, Item>
  : false;

//辅助类型-判断两个类型是否一致
type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false);

type Res = Includes<[1, 2, 3], 2>;

type Res2 = Includes<[1, 2, 3], 4>;

export {};
