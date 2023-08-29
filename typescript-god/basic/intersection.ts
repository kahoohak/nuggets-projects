type ObjType = { a: number } & { b: boolean };

type Res = { a: number } & { b: boolean } extends ObjType ? true : false;

type Res2 = "aaa" & 222;

const obj: ObjType = { a: 1, b: true };

export {};
