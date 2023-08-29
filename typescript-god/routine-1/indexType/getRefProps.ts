//提取props里ref的类型
type GetRefProps<Props> = "ref" extends keyof Props ? (Props extends { ref?: infer Value | undefined } ? Value : never) : never;

type Res = GetRefProps<{ ref?: "content" }>;

type Res2 = GetRefProps<{ ref?: undefined }>;

type Res3 = GetRefProps<{}>;

export {};
