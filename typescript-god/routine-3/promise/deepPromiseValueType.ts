//提取不确定层数的 Promise 中的 value 类型的高级类型
// type DeepPromiseValueType<P extends Promise<unknown>> = P extends Promise<infer ValueType>
//   ? ValueType extends Promise<unknown>
//     ? DeepPromiseValueType<ValueType>
//     : ValueType
//   : never;

//不再约束Promise类型
type DeepPromiseValueType<P> = P extends Promise<infer ValueType> ? DeepPromiseValueType<ValueType> : P;

type ttt = Promise<Promise<Promise<Record<string, any>>>>;

type Res = DeepPromiseValueType<ttt>;

export {};
