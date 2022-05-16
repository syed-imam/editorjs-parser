import imageResolver from '../image'
import config from '../../config'

describe('image', () => {
  it('should render the image block correctly', () => {
    const block = {
      "data": {
        "file": {
          "url": "https://images.ctfassets.net/3kqcuzntcg31/cOpyGRYNloIdLilQw2niR/c18afe600895f0d9cdd7baae1653f21e/a7144bae-12d1-4fcf-bc20-3ff0b9457646.png_width_1200_amp_auto_webp"
        },
        "caption": "Test",
        "stretched": false,
        "withBorder": false,
        "withBackground": false
      },
      "type": "image"
    }
    const imageHtml = imageResolver(block.data, config)
    const expectedHtmlBlock = `<div>\n <img src=\"https://images.ctfassets.net/3kqcuzntcg31/cOpyGRYNloIdLilQw2niR/c18afe600895f0d9cdd7baae1653f21e/a7144bae-12d1-4fcf-bc20-3ff0b9457646.png_width_1200_amp_auto_webp\" alt=\"\"/>\n <em>Test</em>\n</div>\n`
    expect(imageHtml).toBe(expectedHtmlBlock)
  })
})
