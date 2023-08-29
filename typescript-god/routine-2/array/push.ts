//给元组添加一些类型
type Push<Arr extends unknown[], Ele> = [...Arr, Ele]

type Res = Push<[1,2,3], 4>

export {}