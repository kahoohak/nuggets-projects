//any 类型与任何类型的交叉都是 any
type IsAny<T> = 'A' extends ('B' & T) ? true : false

type Res = IsAny<any> 

export {}