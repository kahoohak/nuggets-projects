//提取索引类型中的非可选索引
type IsRequired<Obj extends Record<string, any>, Key extends keyof Obj> = {} extends Pick<Obj, Key> ? never : Key;

type GetRequired<Obj extends Record<string, any>> = {
  [Key in keyof Obj as IsRequired<Obj, Key>]: Obj[Key];
};

type Res = GetRequired<{ name: "kaho"; age?: 18 }>;

export {};
