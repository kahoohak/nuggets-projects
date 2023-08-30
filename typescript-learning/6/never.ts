declare let v1: never
declare let v2: void

v1 = v2 //Type 'void' is not assignable to type 'never'
v2 = v1

/***********************************************************************************/

function justThrow(): never {
  throw new Error()
}

function foo(input: number) {
  if(input > 1) {
    justThrow()
    //等同于return，后续代码不会执行
    const name = 'kaho'
  }
}

/***********************************************************************************/

declare const strOrNumOrBool: string | number | boolean;

if (typeof strOrNumOrBool === "string") {
  console.log("str!");
} else if (typeof strOrNumOrBool === "number") {
  console.log("num!");
} else if (typeof strOrNumOrBool === "boolean") {
  console.log("bool!");
} else {
  const _exhaustiveCheck: never = strOrNumOrBool //利用了类型分析能力与 never 类型只能赋值给 never 类型这一点，来确保联合类型变量被妥善处理
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
}

/***********************************************************************************/

const arr = []
arr.push('kaho')

export {}