/*
 * @Author: kahoohak
 * @Description: 自动在 console.log 等 api 中插入文件名和行列号的参数
 */

const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const types = require('@babel/types')

const sourceCode = `
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }
`;

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
})

const targetCalleeName = ['log', 'info', 'debug', 'error'].map(item => `console.${item}`)

traverse(ast, {
  CallExpression(path, state) {
    const calleeName = path.get('callee').toString()
    if(targetCalleeName.includes(calleeName)) {
      const {line, column} = path.node.loc.start
      path.node.arguments.unshift(types.stringLiteral(`file:(${line}, ${column})`))
    }
  }
})

const {code, map} = generate(ast)

console.log(code)