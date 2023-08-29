//字符串首字母大写
type CapitalizeStr<Str extends string> = Str extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : Str 

type Res = CapitalizeStr<'kaho'>

export {}