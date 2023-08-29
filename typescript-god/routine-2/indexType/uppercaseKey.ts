//索引类型的 Key 变为大写
type UppercaseKey<Obj extends object> = {
  //使用as，这叫做重映射
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}

type Res = UppercaseKey<{a: 1, b: 2}>

export {}