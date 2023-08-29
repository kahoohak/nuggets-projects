//比较两个数字大小
type GreaterThan<Num1 extends number, Num2 extends number, Arr extends unknown[] = []> = Num1 extends Num2
  ? false
  : Arr["length"] extends Num1
  ? false
  : Arr["length"] extends Num2
  ? true
  : GreaterThan<Num1, Num2, [...Arr, unknown]>;

type Res = GreaterThan<3, 4>;

type Res2 = GreaterThan<5, 4>;

export {};
