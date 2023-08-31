/***********************************************************************************/

type IsEqual<T> = T extends true ? 1 : 2;

type Res1 = IsEqual<true>;
type Res2 = IsEqual<false>;
type Res3 = IsEqual<"kaho">;

/***********************************************************************************/

type Factory<T = boolean> = T | number;

const foo: Factory = true;

/***********************************************************************************/

type ResStatus<ResCode extends number = 1000> = ResCode extends 10000 | 10001 | 10002 ? "success" : "fail";

type Res4 = ResStatus<10000>;
type Res5 = ResStatus<10001>;
type Res6 = ResStatus<"10000">;

/***********************************************************************************/

//多泛型关联
type Conditional<Type, Condition, TruthyRes, FalsyRes> = Type extends Condition ? TruthyRes : FalsyRes;

type Res7 = Conditional<"kaho", string, true, false>;
type Res8 = Conditional<"kaho", number, 1, 2>;

/***********************************************************************************/

//对象类型中的泛型
type IRes<TData = unknown> = {
  code: number;
  msg: string;
  data: TData;
};

type IUserRes = {
  name: string;
  age: number;
};

function fetchUser(): Promise<IRes<IUserRes>> {
  return Promise.resolve({
    code: 200,
    msg: "success",
    data: {
      name: "kaho",
      age: 29,
    },
  });
}

export {};
