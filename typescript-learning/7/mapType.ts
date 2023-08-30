//映射类型
type Stringify<T> = {
  [K in keyof T]: string
}

type Clone<T> = {
  [K in keyof T]: T[K]
}

type InputObj = {
  propA: number
  propB: string
  propC: boolean
}

type OutputObj = Stringify<InputObj>
type CloneObj = Clone<InputObj>

export {}