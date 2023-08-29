//索引类型去掉可选
type ToRequired<Obj extends Record<string, any>> = {
  [Key in keyof Obj]-?: Obj[Key]
}

type Res = ToRequired<{name?: 'kaho', age?: 18}>

export {}