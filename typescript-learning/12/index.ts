type LiteralToPrimitive<T> = T extends number 
  ? number 
  : T extends bigint
  ? bigint
  : T extends string
  ? string
  : never

function universalAdd<T extends number | bigint | string>(x: T, y: T): LiteralToPrimitive<T> {
  return x + (y as any);
}

universalAdd(599, 1); // T 填充为 599 | 1
universalAdd("linbudu", "599"); // T 填充为 linbudu | 599

/***********************************************************************************/

type Func = (...args: any[]) => any

type FunctionConditionType<T extends Func> = T extends (...args: any[]) => string
  ? 'is string' : 'not string'

type StringRes = FunctionConditionType<() => string>
type NotStringRes = FunctionConditionType<() => number>

export {}