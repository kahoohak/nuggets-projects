const parser = require('@babel/parser')

const ast = parser.parse('代码', {
  sourceType: 'unambiguous',
  plugins: ['jsx']
})

console.log(ast)