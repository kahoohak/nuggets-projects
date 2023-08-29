//判断字符串是否以某个前缀开头
type StartsWith<Str extends string, Perfix extends string> = Str extends `${Perfix}${string}` ? true : false

type Res = StartsWith<'kahoohak', 'kaho'>

type Res2 = StartsWith<'kahoohak', 'test'>

export {}