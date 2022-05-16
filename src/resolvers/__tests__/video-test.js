import videoResolver from '../video'
import config from '../../config'

describe('video', () => {
  it('should render video html correctly', () => {
    const video = {
      "data": {
        "url": "https://vod-dev.chdrstatic.com/transcode/9d0828eb-7ab2-4998-93f9-e8fe28ae5f9b/9d0828eb-7ab2-4998-93f9-e8fe28ae5f9b_2m.m3u8",
        "isLive": false,
        "caption": ""
      },
      "type": "video"
    }
    const videoHtml = videoResolver(video.data, config)
    const expectedHtml = `<div class=\"article-body-video\" data-caption=\"\" data-isLive=\"false\" data-src=\"https://vod-dev.chdrstatic.com/transcode/9d0828eb-7ab2-4998-93f9-e8fe28ae5f9b/9d0828eb-7ab2-4998-93f9-e8fe28ae5f9b_2m.m3u8\"></div>`
    expect(videoHtml).toBe(expectedHtml)
  })
})
