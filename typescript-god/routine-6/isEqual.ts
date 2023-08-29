type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false);

type IsEqual2<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

type Res = IsEqual2<"a", any>;

export {};
