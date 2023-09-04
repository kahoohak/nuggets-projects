//函数中的泛型
function foo<T>(param: T): T {
  return param
}

const res1 = foo('kaho')
const res2 = foo(2)

let str = 'kaho'
const res3 = foo(str)

const num = 1
const res4 = foo(num)

/***********************************************************************************/

function swap<T extends number, U extends number>([p1, p2]: [T, U]): [U, T] {
  return [p2, p1]
}

const res5 = swap([27, 29])

/***********************************************************************************/

function pick<T extends object, U extends keyof T>(obj: T, props: Array<U>): Pick<T, U> {
  for(let k in obj) {
    if(!obj.hasOwnProperty(k)) {
      delete obj[k]
    }
  }
  return obj
}

const res6 = pick({name: 'kaho', age: 29}, ['name'])

/***********************************************************************************/

function handler<T>(payload: T): Promise<[T]> {
  return new Promise<[T]>((res, rej) => {
    res([payload])
  })
}

const handler2 = <T>(input: T): T => input

export {}