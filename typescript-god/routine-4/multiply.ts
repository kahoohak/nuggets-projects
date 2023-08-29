//通过数组长度实现乘法
type Mutiply<Num1 extends number, Num2 extends number, Result extends unknown[] = []> = Num2 extends 0 ? Result['length'] : Mutiply<Num1, Subtract<Num2, 1>, [...Result, ...BuildArray<Num1>]>

type Subtract<Num1 extends number, Num2 extends number> = BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest] ? Rest['length'] : never

type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>

type Res = Mutiply<33, 3>

export {}