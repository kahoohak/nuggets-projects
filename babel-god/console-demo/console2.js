/*
 * @Author: kahoohak
 * @Description: 自动在 console.log 等 api 上一行插入带文件名和行列号的 console 信息
 */

const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const template = require('@babel/template').default
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
    if(path.node.isNew) return

    const calleeName = path.get('callee').toString()
    if(targetCalleeName.includes(calleeName)) {
      const {line, column} = path.node.loc.start
      const newNode = template.expression(`console.log("filename: (${line}, ${column})")`)()
      newNode.isNew = true
      if(path.findParent(p => p.isJSXElement())) {
        path.replaceWith(types.arrayExpression([newNode, path.node]))
        path.skip()
      } else {
        path.insertBefore(newNode)
      }
    }
  }
})

const {code, map} = generate(ast)

console.log(code)