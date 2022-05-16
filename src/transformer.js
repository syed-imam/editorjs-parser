import { standardParser, ampParser } from './parser'
import config from './config.js'

class Transformer {
  parse(blocks, isAmpPage = false) {
    if(!blocks || !Array.isArray(blocks)) {
      return ''
    }
    const blockMap = isAmpPage ? ampParser : standardParser

    return blocks.reduce((parsedString, block) => {
      const resolver = blockMap.get(block.type)
      if(resolver) {
        return parsedString + resolver(block.data, config)
      }
      return parsedString
    }, '')
  }
}

const { parse } = new Transformer()

export default parse
