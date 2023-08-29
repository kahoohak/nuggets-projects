//索引类型过滤属性
type FilterByValueType<Obj extends Record<string, any>, ValueType> = {
  [Key in keyof Obj as Obj[Key] extends ValueType ? Key : never]: Obj[Key]
}

type Res = FilterByValueType<{name: string, age: number, hobby: string[]}, string | number>

export {}