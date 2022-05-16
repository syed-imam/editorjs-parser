import config from '../../config'
import formatString from '../../util/formatString'

import embedResolver from '../embed'

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
      const expectedHtml = `
        <div class=\"embed\" style=\"width: 580px;\">
          <embed class=\"embed\" height=\"320\" width=\"580\" src=\"https://www.youtube.com/embed/BDBnm9i_DBE\">  
          <em></em>
        </div>`
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
      const expectedHtml = `
        <div class=\"embed\" style="width: 560px;">
          <embed class=\"embed\" height=\"315\" width=\"560\" 
            src=\"https://cheddar.com/media/apples-new-budget-iphone-will-be-faster-and-more-expensive/player?autoplay=false\">
          <em></em>
        </div>`

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
    const expectedHtml = `
      <div class=\"embed\">
        <embed class=\"carousel-embed\" src=\"https://ugc.curds.io/carousel/8\">  
        <em></em>
      </div>`

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
      const expectedHtml = `
        <div class=\"embed\">
          <embed class=\"form-embed\" src=\"https://ugc.curds.io/formviewer/display/365\">  
          <em></em>
        </div>`

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
      const expectedHtml = `
        <div class="embed" style="width: 552px;">
          <embed class="embed" height="315" width="552" 
            src="https://www.facebook.com/video/embed?video_id=1566308450213846">
          <em></em>
        </div>`

      const facebookVideoHtml = embedResolver(facebookVideo.data, config)
      expect(formatString(facebookVideoHtml)).toBe(formatString(expectedHtml))
    })
  })

  describe('when there is an invalid embed type', () => {
    const invalidBlock = {
      "data": {
        "embed": "abc",
        "width": 552,
        "height": 315,
        "source": "xyz",
        "caption": "",
        "service": "blah"
      },
      "type": "embed"
    }

    it('should return empty string', () => {
      const result = embedResolver(invalidBlock, config)
      expect(result).toBe('')
    })
  })
})
