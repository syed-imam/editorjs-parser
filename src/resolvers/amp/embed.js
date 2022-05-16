import youtubeResolver from './youtube.js'
import cheddarResolver from './cheddar-video.js'
import carouselResolver from './carousel.js'
import formResolver from './form.js'
import facebookResolver from './facebook.js'

import embedTypes from '../../embed-types'

const ampEmbedRenderMap = new Map()
ampEmbedRenderMap.set(embedTypes.YOUTUBE, youtubeResolver)
ampEmbedRenderMap.set(embedTypes.CHEDDAR_VIDEO, cheddarResolver)
ampEmbedRenderMap.set(embedTypes.UGC_CAROUSEL, carouselResolver)
ampEmbedRenderMap.set(embedTypes.UGC_FORM, formResolver)
ampEmbedRenderMap.set(embedTypes.FACEBOOK, facebookResolver)

export default (data, config) => {
  const renderer = ampEmbedRenderMap.get(data.service)
  if(renderer) {
    return renderer(data, config)
  }
  else
    return ''
}
