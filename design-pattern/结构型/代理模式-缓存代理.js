const addAll = (...args) => {
  console.log('经过一次计算')
  return args.reduce((pre, cur) => pre + cur, 0)
}


const proxyAddAll = (() => {
  const cache = {}
  return function(...args) {
    const key = args.join(',')
    if(!cache.hasOwnProperty(key)) cache[key] = addAll(...args)
    return cache[key]
  }
})()

const res = proxyAddAll(1,2,3,4,5)
console.log(res)
const res2 = proxyAddAll(1,2,3,4,5)
console.log(res2)
