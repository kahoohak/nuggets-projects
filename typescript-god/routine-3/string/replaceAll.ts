//替换字符串
type ReplaceAll<
  Str extends string,
  SubStr extends string,
  RepStr extends string
> = Str extends `${infer Prefix}${SubStr}${infer Suffix}` ? `${Prefix}${RepStr}${ReplaceAll<Suffix, SubStr, RepStr>}` : Str;

type Res = ReplaceAll<"kaho ohak, kael", "k", "t">;

export {};
