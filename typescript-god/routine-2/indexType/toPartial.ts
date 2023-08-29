//索引类型变为可选
type ToPartial<Obj extends Record<string, any>> = {
  [Key in keyof Obj]?: Obj[Key]
}

type Res = ToPartial<{name: 'kaho', age: 18}>

export {}