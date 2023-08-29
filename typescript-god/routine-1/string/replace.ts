//字符串替换
type Replace<Str extends string, From extends string, To extends string> = Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : Str

type Res = Replace<'Hello world', 'world', 'kahoohak'>

type Res2 = Replace<'Hello world', 'test', 'kahoohak'>

export {}