/*
 * @Author: kahoohak
 * @Description: console2 引入 console-insert-plugin 测试
 */

const {transformFileSync} = require('@babel/core')
const consoleInsertPlugin = require('./plugins/console-insert-plugin')
const path = require('path')

const { code } = transformFileSync(path.join(__dirname, '../sourceCode.js'), {
  plugins: [consoleInsertPlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  }
})

console.log(code)