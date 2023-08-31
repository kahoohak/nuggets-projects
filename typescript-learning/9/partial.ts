type Partial<T> = {
  [K in keyof T]?: T[K]
}

type Test = {
  name: string
  age: number
}

type Test2 = Partial<Test>

export {}