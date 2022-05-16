import fs from 'fs'

import blocks from '../mocks/article.json'
import formatString from '../util/formatString'

import parse from '../transformer'

describe('Transformer', () => {
  it('should parse blocks correctly', () => {
    const expectedHtml = fs.readFileSync(__dirname + '/../mocks/html/article.html', 'utf8')
    const parsedString = parse(blocks)
    expect(formatString(parsedString)).toEqual(formatString(expectedHtml))
  })

  describe('when empty blocks', () => {
    it('should return empty string', () => {
      const blocks = []
      expect(parse(blocks)).toEqual('')
    })
  })

  describe('when page is AMP', () => {
    it('should parse blocks correctly', () => {
      const expectedHtml = fs.readFileSync(__dirname + '/../mocks/html/ampArticle.html', 'utf8')
      const parsedString = parse(blocks, true)
      expect(formatString(parsedString)).toEqual(formatString(expectedHtml))
    })
    })
})
