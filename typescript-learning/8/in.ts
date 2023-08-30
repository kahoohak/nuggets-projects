type Foo = {
  foo: string
  shared: string
}

type Bar = {
  bar: string
  shared: string
}

function handle(input: Foo | Bar) {
  if('foo' in input) {
    input
  } else {
    input
  }
}

export {}