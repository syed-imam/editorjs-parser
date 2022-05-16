import youtubeResolver from './youtube.js'
import cheddarResolver from './cheddar-video.js'
import carouselResolver from './carousel.js'
import formResolver from './form.js'
import facebookResolver from './facebook.js'

import embedTypes from '../embed-types'

const embedRenderMap = new Map()
embedRenderMap.set(embedTypes.YOUTUBE, youtubeResolver)
embedRenderMap.set(embedTypes.CHEDDAR_VIDEO, cheddarResolver)
embedRenderMap.set(embedTypes.UGC_CAROUSEL, carouselResolver)
embedRenderMap.set(embedTypes.UGC_FORM, formResolver)
embedRenderMap.set(embedTypes.FACEBOOK, facebookResolver)

export default (data, config) => {
  const renderer = embedRenderMap.get(data.service)
  if(renderer) {
    return renderer(data, config)
  }
  else
    return ''
}
