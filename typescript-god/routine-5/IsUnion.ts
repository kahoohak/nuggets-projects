type TestUnion<A, B = A> = A extends A ? { a: A; b: B } : never;

type TestUnionResult = TestUnion<"a" | "b" | "c">;

//A extends A触发分布式条件类型, 条件判断左边为联合类型会拆开处理
//[B] extends [A] B包起来就是为了避免触发分布式条件类型，B是整个联合类型，A是单个类型，必然不相等返回true，非联合类型的相等所以返回true
type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;

type Res = IsUnion<'a' | 'b'>

type Res2 = IsUnion<'a'>

export {}