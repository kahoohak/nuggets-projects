//函数重载
function foo(name: string, flag: true): string 
function foo(name: string, flag?: false): number
function foo(name: string, flag?: boolean): string | number {
  if(flag) {
    return name
  } else {
    return name.length
  }
}

const res1 = foo('kaho')
const res2 = foo('kaho', true)
const res3 = foo('kaho', false)

export {}