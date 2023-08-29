//删除索引类型中的可索引签名
type RemoveIndexSignature<Obj extends Record<string, any>> = {
  //索引签名不能构造成字符串字面量类型，因为它没有名字，而其他索引可以
  [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key]; 
};

type Dong = {
  [key: string]: any; //可索引签名
  sleep(): void; //具体索引
};

type Res = RemoveIndexSignature<Dong>

// const dong: Dong = {
//   a: 1,
//   b: 2,
//   sleep: () => {},
// };

export {};
