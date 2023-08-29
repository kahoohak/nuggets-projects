//索引类型去掉只读
type ToMutable<Obj extends Record<string, any>> = {
  -readonly [Key in keyof Obj]: Obj[Key]
}

type Res = ToMutable<{readonly name: 'kaho', readonly age: 18}>

export {}