import tagboardResolver from '../tagboard'
import config from '../../config'

describe('tagboard', () => {
  const block = {
    "data": {
      "id": "5165"
    },
    "type": "tagboard"
  }

  it('should render tagboard correctly', () => {
    const tagboardHtml = tagboardResolver(block.data, config)
    const expectedHtml = `<div class=\"tagboard-embed\" tgb-embed-id=\"5165\"></div>`
    expect(tagboardHtml).toBe(expectedHtml)
  })
})
