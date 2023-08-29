// type Union = ['aa', 'bb', 88][number] 

type Bem<Block extends string, Element extends string[], Modifiers extends string[]> = `${Block}__${Element[number]}--${Modifiers[number]}`

type Res = Bem<'kaho', ['div', 'span'], ['active', 'unactive']>

export {}