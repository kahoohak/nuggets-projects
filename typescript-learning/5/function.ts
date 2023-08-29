function foo(name: string): number {
  return name.length
}

const foo1 = function(name: string): number {
  return name.length
}

//不推荐这种写法
const foo2: (name: string) => number = function(name) {
  return name.length
}

type Foo = (name: string) => number

const foo3: Foo = (name) => {
  return name.length
}

export {}