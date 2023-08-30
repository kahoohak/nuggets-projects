//类型别名
type A = string

//工具类型
type Factory<T> = T | number

type FactoryWithBool = Factory<boolean>;

const foo: FactoryWithBool = true

type MaybeNull<T> = T | null

function process(input: MaybeNull<{handler: () => {}}>) {
  input?.handler()
}

process(null)

export {}