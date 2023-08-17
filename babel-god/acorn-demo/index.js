/*
 * @Author: kahoohak
 * @Description: 新增一个关键字 kaho
 */
const acorn = require('acorn')

const Parser = acorn.Parser
const TokenType = acorn.TokenType

Parser.acorn.keywordTypes['kaho'] = new TokenType('kaho', {keyword: 'kaho'})

function wordsRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
}

const kahoKeyword = function(Parser) {
  return class extends Parser {
    //词法分析
    parse(program) {
      let newKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this const class extends export import super";
      newKeywords += ' kaho'
      this.keywords = wordsRegexp(newKeywords)
      return super.parse(program)
    }

    //语法分析
    parseStatement(context, topLevel, exports) {
      const startType = this.type
      
      if(startType === Parser.acorn.keywordTypes['kaho']) {
        const node = this.startNode()
        return this.parseKahoStatement(node)
      } else {
        return super.parseStatement(context, topLevel, exports)
      }
    }

    parseKahoStatement(node) {
      this.next()
      return this.finishNode({value: 'kaho'}, 'KahoStatement')
    }

    //测试下，可以将ast的type覆盖
    parseLiteral(...args) {
      const node = super.parseLiteral(...args)
      switch(typeof node.value) {
        case 'number':
          node.type = 'NumberNumberLiteral'
          break;
        case 'string':
          node.type = 'StringStringLiteral'
          break;
      }
      return node
    }
  }
}

const newParser = Parser.extend(kahoKeyword)

const program = `
  kaho
  const a = 1
`

const ast = newParser.parse(program)

console.log(ast.body[1].declarations)