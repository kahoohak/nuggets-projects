//全组合的高级类型 A | B => A | B | AB | BA
type Combinations<A extends string, B extends string> = A | B | `${A}${B}` | `${B}${A}`

type AllCombinations<A extends string, B extends string = A> = A extends A ? Combinations<A, AllCombinations<Exclude<B, A>>> : never

type Res = AllCombinations<'a' | 'b' | 'c'>

export {}