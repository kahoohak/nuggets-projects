//创建索引类型
type Record<K extends string | number | symbol, T> = { [P in K]: T; }

// type Res = Record<'a' | 'b', string>

type UppercaseKey<Obj extends Record<string, any>> = {
  //使用as，这叫做重映射
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}

type Res = UppercaseKey<{a: 1, b: 2}>

export {}