type CamelcaseUnion<Str extends string> = Str extends `${infer Prefix}_${infer First}${infer Rest}`
  ? `${Prefix}${Uppercase<First>}${CamelcaseUnion<Rest>}`
  : Str;

type Res = CamelcaseUnion<"aa_aa_aa">;

//如果是字符串数组，需要递归
type CamelcaseArr<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest]
  ? [CamelcaseUnion<First & string>, ...CamelcaseArr<Rest>]
  : [];

type Res2 = CamelcaseArr<["aa_aa_aa", "bb_bb_bb", "cc_cc_cc"]>;

//联合类型不需要递归
type Res3 = CamelcaseUnion<"aa_aa_aa" | "bb_bb_bb" | "cc_cc_cc">

export {};
