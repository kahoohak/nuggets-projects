//索引类型只读
type ToReadonly<Obj extends Record<string, any>> = {
  readonly [Key in keyof Obj]: Obj[Key]
}

type Res = ToReadonly<{name: 'kaho', age: 18}>

export {}