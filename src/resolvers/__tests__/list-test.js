import listResolver from '../list'
import config from '../../config'

describe('list', () => {
  it('should render the list block correctly', () => {
    const blocks = {
      "type" : "list",
      "data" : {
      "style" : "unordered",
        "items" : [
        "This is a block-styled editor",
        "Clean output data",
        "Simple and powerful API"
        ]
      }
    }
    const expectedHtml = listResolver(blocks.data, config)
    expect(expectedHtml).toBe(`<div class=\"list\"><ul><li>This is a block-styled editor</li><li>Clean output data</li><li>Simple and powerful API</li></ul></div>`)
  })
})
