import paragraphResolver from '../paragraph'
import config from '../../config'

describe('paragraph', () => {
  it('should render the paragraph#1 block correctly', () => {
    const blocks = {
      "data": {
      "text": "<a href=\"https://newjersey.news12.com/guide-st-patricks-day-parades-in-new-jersey\">CLICK HERE</a> to see a schedule of parades across New Jersey."
    },
      "type": "paragraph"
    }
    const expectedHtml = `<div class=\"block\"><a href=\"https://newjersey.news12.com/guide-st-patricks-day-parades-in-new-jersey\">CLICK HERE</a> to see a schedule of parades across New Jersey.</div>`
    const paragraphNode = paragraphResolver(blocks.data, config)
    expect(paragraphNode).toBe(expectedHtml)
  })

  it('should render the paragraph#2 block correctly', () => {
    const blocks =      {
      "data": {
        "text": "<i>View photos below.</i>"
      },
      "type": "paragraph"
    }
    const expectedHtml = `<div class=\"block\"><i>View photos below.</i></div>`
    const paragraphNode = paragraphResolver(blocks.data, config)
    expect(paragraphNode).toBe(expectedHtml)
  })
})
