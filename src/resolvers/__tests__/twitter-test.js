import twitterResolver from '../twitter'
import config from '../../config'

describe('twitter', () => {
  const blocks = {
    "data": {
      "id": "1499379880479363081",
      "url": "https://twitter.com/news12frank/status/1499379880479363081",
      "username": "news12frank"
    },
    "type": "twitter"
  }

  it('should render the tweet block correctly', () => {
    const tweetHtml = twitterResolver(blocks.data, config)
    const expectedHtml = '<blockquote class=\"twitter-tweet\">\n <a href=\"https://twitter.com/news12frank/status/1499379880479363081\"></a>\n</blockquote>\n'
    expect(tweetHtml).toBe(expectedHtml)
  })
})
