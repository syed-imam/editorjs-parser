import quoteResolver from '../quote'
import config from '../../config'

describe('quote', () => {
  it('should render the quote block correctly', () => {
    const blocks = {"data": {"text": "Sample Text", "caption": "", "alignment": "left"}, "type": "quote"}
    const quoteHtml = quoteResolver(blocks.data, config)
    expect(quoteHtml).toBe('<blockquote class=\"left\">\n  <p>Sample Text</p>\n  <footer></footer>\n</blockquote>\n')
  })
})
