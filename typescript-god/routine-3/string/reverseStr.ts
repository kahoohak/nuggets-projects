//字符串翻转
type ReverseStr<Str extends string> = Str extends `${infer First}${infer Rest}` ? `${ReverseStr<Rest>}${First}` : Str

type Res = ReverseStr<'kaho'>

export {}