//内置方法中的泛型
function p() {
  return new Promise<boolean>((resolve) => {
    resolve(true)
  })
}

const arr: Array<number> = [1, 2, 3]

arr.push('kaho')

arr.reduce((prev, curr, idx, arr) => {
  return prev;
}, 1);

arr.reduce<number[]>((prev, curr, idx, arr) => {
  return [...prev, curr]
}, []);

export {}