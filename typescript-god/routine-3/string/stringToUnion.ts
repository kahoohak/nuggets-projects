//提取字符串组成联合类型
type StringToUnion<Str extends string> = Str extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never

type Res = StringToUnion<'kahoohak'>

export {}