import twitterResolver from '../twitter'
import config from '../../../config'

describe('twitter', () => {
  const blocks = {
    "data": {
      "id": "1514330424767655941",
      "url": "https://twitter.com/NYPDnews/status/1514330424767655941",
      "username": "NYPDnews"
    },
    "type": "twitter"
  }

  it('should render the tweet block correctly', () => {
    const tweetHtml = twitterResolver(blocks.data, config)
    const expectedHtml = '<amp-twitter width=\"375\" height=\"472\" layout=\"responsive\" data-tweetid=\"1514330424767655941\"></amp-twitter>'
    expect(tweetHtml).toBe(expectedHtml)
  })
})
