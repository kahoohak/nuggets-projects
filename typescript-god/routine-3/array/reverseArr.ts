//数组倒序
//笨蛋做法
// type ReverseArr<Arr extends unknown[]> = Arr extends [infer One, infer Two, infer Three, infer Four, infer Five] ? [Five, Four, Three, Two, One] : never  

//递归
type ReverseArr<Arr extends unknown[]> = Arr extends [infer One, ...infer Rest] ? [...ReverseArr<Rest>, One] : Arr 

type Res = ReverseArr<[1,2,3,4,5]>

export {}