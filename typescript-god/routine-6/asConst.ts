//TypeScript 默认推导出来的类型并不是字面量类型
// const obj = {
//   a: 1, b: 2
// }

// type ObjType = typeof obj

// const arr = [1,2,3]

// type ArrType = typeof arr

//但是类型编程很多时候是需要推导出字面量类型的，这时候就需要用 as const
const obj = {
  a: 1, b: 2
} as const

type ObjType = typeof obj

const arr = [1,2,3] as const

type ArrType = typeof arr

type ReverseArr<Arr extends readonly unknown[]> = Arr extends readonly [infer A, infer B, infer C] ? [C, B, A] : never

type Res = ReverseArr<ArrType>

export {}