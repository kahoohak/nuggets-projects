//可选参数与 rest 参数
function foo1(name: string, age?: number): number {
  const inputAge: number = age || 18
  return name.length + inputAge
}

function foo2(name: string, age: number = 18): number {
  return name.length + age
}

function foo3(name: string, ...rest: any[]): void {}

function foo4(name: string, ...rest: [number, boolean]): void {}

foo4('kaho', 1, true)

export {}