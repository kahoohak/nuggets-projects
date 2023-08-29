type tuple1 = [1, 2];
type tuple2 = ["kaho", "ohak"];

type Zip<L extends [unknown, unknown], R extends [unknown, unknown]> = L extends [infer LStart, infer LEnd]
  ? R extends [infer RStart, infer REnd]
    ? [[LStart, RStart], [LEnd, REnd]]
    : []
  : [];

type Res = Zip<tuple1, tuple2>;

//递归实现元组合并
type Zip2<L extends unknown[], R extends unknown[]> = L extends [infer LStart, ...infer LRest]
  ? R extends [infer RStart, ...infer RRest]
    ? [[LStart, RStart], ...Zip2<LRest, RRest>]
    : []
  : [];

type tuple3 = [1, 2, 3, 4, 5];
type tuple4 = ["kaho", "ohak", 'hello', 'world', '!'];

type Res2 = Zip2<tuple3, tuple4>

export {};
