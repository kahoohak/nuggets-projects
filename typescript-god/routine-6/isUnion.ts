type IsUnion<A extends string, B extends string = A> = A extends A ? [B] extends [A] ? false : true : never

type Res = IsUnion<'a'>

export {}