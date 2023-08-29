const arr1: string[] = []
const arr2: Array<string> = []

const arr3: number[] = [1, 2, 3]
console.log(arr1[101])

//使用元祖来标注定长的数组
const arr4: [number, number, number] = [1, 2, 3]
console.log(arr4[101])

//使用元祖声明包含不同类型元素的数组
const arr5: [number, string, boolean] = [1, '2', true]
const arr6: [number, string?, boolean?] = [1, '2', true]
type Len2 = typeof arr5.length
type Len3 = typeof arr6.length

//具名元祖
const arr7: [age: number, name: string, male: boolean] = [1, '2', true]
const arr8: [age: number, name?: string, male?: boolean] = [1, '2', true]

//对于解构的越界访问，元祖更安全
const arr9: string[] = []
const [ele1, ele2, ...rest] = arr9

const arr10: [number, string, boolean] = [1, '2', true]
const [age, name, male, other] = arr10

const arr11: readonly string[] = ['1']
arr11.push('2')

export {}