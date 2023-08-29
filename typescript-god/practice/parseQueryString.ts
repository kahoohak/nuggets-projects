//a=1&b=2&c=3 => 索引类型 {a: 1, b: 2, c: 3}
//递归，从&分割
type ParseQueryString<Str extends string> = Str extends `${infer Param}&${infer Rest}`
  ? MergeParams<ParseParam<Param>, ParseQueryString<Rest>>
  : ParseParam<Str>;

//a=1 => {a: 1}
type ParseParam<Str extends string> = Str extends `${infer Key}=${infer Value}` ? { [K in Key]: Value } : Record<string, any>;

//{a: 1} {b: 2} => {a: 1, b: 2}
type MergeParams<Obj extends Record<string, any>, OtherObj extends Record<string, any>> = {
  [Key in keyof Obj | keyof OtherObj]: Key extends keyof Obj
    ? Key extends keyof OtherObj
      ? MergeValues<Obj[Key], OtherObj[Key]>
      : Obj[Key]
    : Key extends keyof OtherObj
    ? OtherObj[Key]
    : never;
};

//如果a=1&a=2 需要做合并，返回[1,2]
type MergeValues<Value1, Value2> = Value1 extends Value2
  ? Value1
  : Value2 extends unknown[]
  ? [Value1, ...Value2]
  : [Value1, Value2];

type Res = ParseQueryString<"a=1&b=2&c=3&c=4&c=4&a=1">;

//函数重载
function parseQueryString<Str extends string>(queryStr: Str): ParseQueryString<Str>;
function parseQueryString(queryStr: string) {
  if (!queryStr || !queryStr.length) {
    return {};
  }
  const queryObj: ParseQueryString<typeof queryStr> = {};
  const items = queryStr.split("&");
  items.forEach((item) => {
    const [key, value] = item.split("=");
    if (queryObj[key]) {
      if (Array.isArray(queryObj[key])) {
        queryObj[key].push(value);
      } else {
        queryObj[key] = [queryObj[key], value];
      }
    } else {
      queryObj[key] = value;
    }
  });
  return queryObj;
}

const res = parseQueryString("a=1&b=2&c=3&c=4&c=4&a=1&d=7");

//下面就会有类型提示
//res.

export {};
