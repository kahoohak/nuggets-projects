//数组删除元素
type RemoveItem<Arr extends unknown[], Item> = Arr extends [infer One, ...infer Rest]
  ? IsEqual<One, Item> extends true
    ? [...Rest]
    : [One, ...RemoveItem<Rest, Item>]
  : Arr;

//辅助类型-判断两个类型是否一致
type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false);

type Res = RemoveItem<[1, 2, 3], 2>;

export {};
