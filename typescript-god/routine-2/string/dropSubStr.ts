//kaho~~~ => kaho

// type DropSubStr<Str extends string, SubStr extends string> = Str extends `${infer Prefix}${SubStr}${infer Suffix}` ? DropSubStr<`${Prefix}${Suffix}`, SubStr> : Str
type DropSubStr<Str extends string, SubStr extends string> = Str extends `${infer Prefix}${SubStr}${infer Suffix}` ? `${Prefix}${DropSubStr<Suffix, SubStr>}` : Str

type Res = DropSubStr<'~~k~a~h~o~~', '~'>

export {}