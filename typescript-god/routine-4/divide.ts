//通过数组长度实现除法
type Divide<Num1 extends number, Num2 extends number, Count extends number = 0> = Num1 extends 0 ? Count : Divide<Subtract<Num1, Num2>, Num2, Add<Count, 1> & number>

type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]['length']

type Subtract<Num1 extends number, Num2 extends number> = BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest] ? Rest['length'] : never

type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>

type Res = Divide<33, 3>

export {}