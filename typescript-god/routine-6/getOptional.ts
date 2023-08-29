//提取索引类型中的可选索引
type IsOptional<Obj extends Record<string, any>, Key extends keyof Obj> = {} extends Pick<Obj, Key> ? Key : never;

type GetOptional<Obj extends Record<string, any>> = {
  [Key in keyof Obj as IsOptional<Obj, Key>]: Obj[Key];
};

type Res = GetOptional<{ name: "kaho"; age?: 18 }>;

type Obj = {
  name: string;
  age?: number;
};

type Res2 = Pick<Obj, "age">;

export {};
