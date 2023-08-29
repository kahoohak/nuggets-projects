//求字符串长度
type StrLen<Str extends string, Len extends number = 0> = Str extends `${string}${infer Rest}` ? StrLen<Rest, Add<Len, 1> & number> : Len

type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]['length']

type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>

type Res = StrLen<'kahoohak'>

export {}