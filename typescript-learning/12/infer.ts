type Func = (...args: any[]) => any;

type FunctionReturnType<T extends Func> = T extends (...args: any[]) => infer R ? R : never;

type StringRes = FunctionReturnType<() => string>;
type NotStringRes = FunctionReturnType<() => number>;

/***********************************************************************************/

type Swap<T extends unknown[]> = T extends [infer A, infer B] ? [B, A] : T 

type SwapRes1 = Swap<[1, 2]>
type SwapRes2 = Swap<[1, 2, 3]>

// 提取首尾两个
type ExtractStartAndEnd<T extends unknown[]> = T extends [infer Start, ...unknown[], infer End] ? [Start, End] : T
type Res1 = ExtractStartAndEnd<[1, 2, 3, 4]>
// 调换首尾两个
type SwapStartAndEn<T extends unknown[]> = T extends [infer Start, ...infer Rest, infer End] ? [End, ...Rest, Start] : T
type Res2 = SwapStartAndEn<[1, 2, 3, 4]>
// 调换开头两个
type SwapFirstTwo<T extends unknown[]> = T extends [infer One, infer Two, ...infer Rest] ? [Two, One, ...Rest] : T
type Res3 = SwapFirstTwo<[1, 2, 3, 4]>

//从数组到联合类型
type ArrayToUnion<T extends unknown[]> = T extends Array<infer ElementType> ? ElementType : never

type Res4 = ArrayToUnion<string[]>
type Res5 = ArrayToUnion<[string, number]>
type Res6 = ArrayToUnion<[]>

/***********************************************************************************/

// 提取对象的属性类型
type PropType<T, K extends keyof T> = T extends {[Key in K]: infer R} ? R : never

type PropTypeResult1 = PropType<{ name: string }, 'name'>; // string
type PropTypeResult2 = PropType<{ name: string; age: number }, 'name' | 'age'>; // string | number

// 反转键名与键值
type ReverseKeyValue<T extends Record<string, unknown>> = T extends Record<infer K, infer V> ? Record<V & string, K> : never

type ReverseKeyValueResult1 = ReverseKeyValue<{ "key": "value" }>; // { "value": "key" }

//infer 结构还可以是 Promise 结构
type PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> : T

type PromiseRes1 = PromiseValue<Promise<number>>
type PromiseRes2 = PromiseValue<number>
type PromiseRes3 = PromiseValue<Promise<Promise<boolean>>>; // Promise<boolean>，只提取了一层

export {};
