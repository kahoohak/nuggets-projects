type ReturnNum = () => number

const returnNum :ReturnNum = () => 100 + 499;

//CC不能放在延迟求值BB后面
enum Items {
  AA,
  BB = returnNum(),
  CC,
  DD = 599,
  EE = 'ee'
}

const aa = Items.AA
const aakey = Items[0]
const eekey = Items['ee'] //字符串枚举成员只进行单次映射

console.log(aa, aakey, eekey)

let kaho = 'kaho'
const kaho1 = 'kaho1'

const info = {
  name: 'kaho',
  enjoy: {
    movie: 'relie'
  }
}

export {}

