/*
 * @Author: kahoohak
 * @Description: 自动在 console.log 等 api 上一行插入带文件名和行列号的 console 信息
 */

const targetCalleeName = ['log', 'info', 'debug', 'error'].map(item => `console.${item}`)

module.exports = function({types, template}) {
  return {
    visitor: {
      CallExpression(path, state) {
        if(path.node.isNew) return
    
        const calleeName = path.get('callee').toString()
        if(targetCalleeName.includes(calleeName)) {
          const {line, column} = path.node.loc.start
          const newNode = template.expression(`console.log("${state.filename || 'unknown filename'}: (${line}, ${column})")`)()
          newNode.isNew = true
          if(path.findParent(p => p.isJSXElement())) {
            path.replaceWith(types.arrayExpression([newNode, path.node]))
            path.skip()
          } else {
            path.insertBefore(newNode)
          }
        }
      }
    }
  }
}