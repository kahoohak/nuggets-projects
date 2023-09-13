//分布式条件类型
//触发条件: 1.类型参数是联合类型 2.类型参数通过泛型参数的方式传入 3.泛型参数不能被包裹
type Condition<T> = T extends 1 | 2 | 3 ? T : never

type Res1 = Condition<1 | 2 | 3 | 4 | 5>
type Res2 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 | 3 ? 1 | 2 | 3 | 4 | 5 : never

type Naked<T> = T extends boolean ? "Y" : "N";
type Wrapped<T> = [T] extends [boolean] ? "Y" : "N";

// "N" | "Y"
type Res3 = Naked<number | boolean>;

// "N"
type Res4 = Wrapped<number | boolean>;


export {}