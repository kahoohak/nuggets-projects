/******* 索引签名类型 *******/
// interface AllStringTypes {
//   [key: string]: boolean
// }

type AllStringTypes = {
  propA: boolean,
  [key: string]: string
}

type StringOrBooleanTypes = {
  propA: boolean,
  [key: string]: string | boolean
}

const foo: StringOrBooleanTypes = {
  propA: true,
  'name': 'kaho',
  1: 'kaho',
  [Symbol('symbol')]: 'kaho'
}

//为内部属性较多的对象声明一个 any 的索引签名类型, 暂时支持对类型未明确属性的访问
type AnyTypeHere = {
  [key: string]: any
}

const anyObj: AnyTypeHere['name'] = 'kaho'

/******* 索引类型查询 *******/
type Foo = {
  kaho: 1,
  2: 2
}

type FooKeys = keyof Foo & {}

type anyKeys = keyof any

/******* 索引类型访问 *******/
type NumberRecord = {
  [key: string]: number
}

type PropType = NumberRecord[string]

type Foo2 = {
  propA: number
  propB: string
  propC: boolean
}

type PropTypeUnion = Foo2[keyof Foo2]

export {}