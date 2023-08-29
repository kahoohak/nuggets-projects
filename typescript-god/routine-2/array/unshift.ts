//给元组头部添加一些类型
type Unshift<Ele, Arr extends unknown[]> = [Ele, ...Arr]

type Res = Unshift<0, [1,2,3]>

export {}