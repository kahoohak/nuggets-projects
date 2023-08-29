//kaho_kaho_kaho => kahoKahoKaho
type CamelCase<Str extends string> = Str extends `${infer Left}_${infer Right}${infer Rest}` ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}` : Str

type Res = CamelCase<'kaho_kaho_kaho'>

export {}