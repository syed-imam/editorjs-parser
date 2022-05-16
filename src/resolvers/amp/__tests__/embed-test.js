import config from '../../../config'
import formatString from '../../../util/formatString'

import embedResolver from '../../amp/embed'

describe('embed', () => {
  describe('youtube', () => {
    const youtubeBlock = {
      "data": {
        "embed": "https://www.youtube.com/embed/BDBnm9i_DBE",
        "width": 580,
        "height": 320,
        "source": "https://www.youtube.com/watch?v=BDBnm9i_DBE",
        "caption": "",
        "service": "youtube"
      },
      "type": "embed"
    }

    it('should map youtube node correctly', () => {
      const embedHtml = embedResolver(youtubeBlock.data, config)
      const expectedHtml = `<amp-iframe
            layout=\"responsive\"
            width=\"580\"
            height=\"320\"
            src=\"https://www.youtube.com/embed/BDBnm9i_DBE\"
            sandbox=\"allow-scripts allow-same-origin\"></amp-iframe>
          <em></em>`
      expect(formatString(embedHtml)).toBe(formatString(expectedHtml))
    })
  })

  describe('cheddar video', () => {
    const cheddarVideoBlock = {
      "data": {
        "embed": "https://cheddar.com/media/apples-new-budget-iphone-will-be-faster-and-more-expensive/player?autoplay=false",
        "width": 560,
        "height": 315,
        "source": "https://cheddar.com/media/apples-new-budget-iphone-will-be-faster-and-more-expensive/player",
        "caption": "",
        "service": "cheddar"
      },
      "type": "embed"
    }

    it('should map cheddar video node correctly', () => {
      const embedHtml = embedResolver(cheddarVideoBlock.data, config)
      const expectedHtml = `<amp-iframe
            layout=\"responsive\"
            width=\"560\"
            height=\"315\"
            src=\"https://cheddar.com/media/apples-new-budget-iphone-will-be-faster-and-more-expensive/player?autoplay=false\"
            sandbox=\"allow-scripts allow-same-origin\"></amp-iframe>
          <em></em>`

      expect(formatString(embedHtml)).toBe(formatString(expectedHtml))
    })
  })

  describe('ugc carousel', () => {
    const ugcCarousel = {
      "data": {
        "embed": "https://ugc.curds.io/carousel/8",
        "source": "https://ugc.curds.io/carousel/8",
        "caption": "",
        "service": "ugc_carousel"
      },
      "type": "embed"
    }

    it('should map carousel node correctly', () => {})
    const expectedHtml = `<amp-iframe
          layout=\"responsive\"
          width=\"100\"
          height=\"100\"
          class=\"carousel-embed\"
          src=\"https://ugc.curds.io/carousel/8\"
          sandbox=\"allow-scripts allow-same-origin\">
            <amp-img placeholder
              src=\"/loading-animation.gif\"
              height=\"64\"
              width=\"64\"
              layout=\"fixed\"></amp-img>
        </amp-iframe>
        <em></em>`

      const carouselHtml = embedResolver(ugcCarousel.data, config)
      expect(formatString(carouselHtml)).toBe(formatString(expectedHtml))
  })

  describe('ugc form', () => {
    const ugcForm = {
      "data": {
        "embed": "https://ugc.curds.io/formviewer/display/365",
        "source": "https://ugc.curds.io/formviewer/display/365",
        "caption": "",
        "service": "ugc_form"
      },
      "type": "embed"
    }

    it('should map ugc form correctly', () => {
      const expectedHtml = `<amp-iframe
          layout=\"responsive\"
          width=\"100\"
          height=\"100\"
          class=\"form-embed\"
          src=\"https://ugc.curds.io/formviewer/display/365\"
          sandbox=\"allow-scripts allow-same-origin\">
            <amp-img placeholder
              src=\"/loading-animation.gif\"
              height=\"64\"
              width=\"64\"
              layout=\"fixed\"></amp-img>
        </amp-iframe>
        <em></em>`

      const formHtml = embedResolver(ugcForm.data, config)
      expect(formatString(formHtml)).toBe(formatString(expectedHtml))
    })
  })

  describe('facebook video', () => {
    const facebookVideo = {
      "data": {
        "embed": "https://www.facebook.com/video/embed?video_id=1566308450213846",
        "width": 552,
        "height": 315,
        "source": "https://www.facebook.com/1424858414264105/videos/1566308450213846",
        "caption": "",
        "service": "facebook"
      },
      "type": "embed"
    }

    it('should map facebook video node correctly', () => {
      const expectedHtml = `<amp-iframe
            layout=\"responsive\"
            width=\"552\"
            height=\"315\"
            src=\"https://www.facebook.com/video/embed?video_id=1566308450213846\"
            sandbox=\"allow-scripts allow-same-origin\"></amp-iframe>
          <em></em>`

      const facebookVideoHtml = embedResolver(facebookVideo.data, config)
      expect(formatString(facebookVideoHtml)).toBe(formatString(expectedHtml))
    })
  })
})
