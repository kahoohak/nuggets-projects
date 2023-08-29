//any作为条件类型的参数，会返回trueType和falseType的合并
type TestAny<T> = T extends number ? 1 : 2

type Res = TestAny<any> 

export {}