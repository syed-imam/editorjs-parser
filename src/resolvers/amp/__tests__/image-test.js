import imageResolver from '../image'
import config from '../../../config'

describe('image', () => {
  it('should render the image block correctly', () => {
    const block = {
      "data": {
        "file": {
          "url": "https://images.ctfassets.net/3kqcuzntcg31/1xAo3yHw0EL9fklWD40ntA/ba7d0eed82d94f856effd56f231aafb7/a2666b75-bb94-4331-bd58-437775e9ef01.jpg_width_1200_amp_auto_webp"
        },
        "caption": "",
        "stretched": false,
        "withBorder": false,
        "withBackground": false
      },
      "type": "image"
    }
    const imageHtml = imageResolver(block.data, config)
    const expectedHtmlBlock = `<amp-img width=\"600\" height=\"338\" layout=\"responsive\" src=\"https://images.ctfassets.net/3kqcuzntcg31/1xAo3yHw0EL9fklWD40ntA/ba7d0eed82d94f856effd56f231aafb7/a2666b75-bb94-4331-bd58-437775e9ef01.jpg_width_1200_amp_auto_webp\" alt=\"\"></amp-img>
          <em></em>`
    expect(imageHtml).toBe(expectedHtmlBlock)
  })
})
