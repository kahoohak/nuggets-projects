type res = 1 extends 2 ? true : false

type isTwo<T> = T extends 2 ? true : false

type res2 = isTwo<1>

type res3 = isTwo<2>

export {}