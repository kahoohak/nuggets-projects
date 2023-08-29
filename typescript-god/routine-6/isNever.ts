//never作为条件类型的参数，直接返回never
type IsNever<T> = [T] extends [never] ? true : false

type Res = IsNever<never>

export {}