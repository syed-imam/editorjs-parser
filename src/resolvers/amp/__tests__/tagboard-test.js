import tagboardResolver from '../tagboard'
import config from '../../../config'

describe('tagboard', () => {
  const block = {
    "data": {
      "id": "5165"
    },
    "type": "tagboard"
  }

  it('should render tagboard correctly', () => {
    const tagboardHtml = tagboardResolver(block.data, config)
    const expectedHtml = `<amp-iframe layout=\"responsive\"
            width=\"100\"
            height=\"100\"
            src=\"https://longisland.news12.curds.io/poll?id=5165\"
            sandbox=\"allow-scripts allow-same-origin\">
           <amp-img placeholder
              src=\"/loading-animation.gif\"
              height=\"64\"
              width=\"64\"
              layout=\"fixed\"></amp-img>
        </amp-iframe>`
    expect(tagboardHtml).toBe(expectedHtml)
  })
})
