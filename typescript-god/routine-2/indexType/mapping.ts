//映射类型
type Mapping<Obj extends object> = {
  [Key in keyof Obj]: [Obj[Key], Obj[Key], Obj[Key]]
}

type Res = Mapping<{a: 1, b: 2}>

export {}