//去掉空白字符
type TrimLeft<Str extends string> = Str extends `${" " | "\n" | "\t"}${infer Rest}` ? TrimLeft<Rest> : Str;

type TrimRight<Str extends string> = Str extends `${infer Rest}${" " | "\n" | "\t"}` ? TrimRight<Rest> : Str;

type TrimStr<Str extends string>= TrimLeft<TrimRight<Str>>;

type Res = TrimStr<'  kahoohak  '>

export {}
