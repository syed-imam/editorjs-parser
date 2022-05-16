import headerResolver from '../header.js'
import config from '../../config.js'

describe('header', () => {
  const block = {
    "data": {
      "text": "WHAT ELSE IS HAPPENING ON THE GROUND:",
      "level": 2
    },
    "type": "header"
  }

  it('should render the header block correctly', () => {
    const headerNode = headerResolver(block.data, config)
    const expectedHtml = `<h2>WHAT ELSE IS HAPPENING ON THE GROUND:</h2>`
    expect(headerNode).toBe(expectedHtml)
  })
})
