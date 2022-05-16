import { listResolver, paragraphResolver, headerResolver, quoteResolver, videoResolver } from '../resolvers'
import { imageResolver, tagboardResolver, embedResolver, twitterResolver, spotimResolver }  from '../resolvers/amp'

import blockTypes from '../block-types.js'

const ampBlockMap = new Map()

ampBlockMap.set(blockTypes.PARAGRAPH, paragraphResolver)
ampBlockMap.set(blockTypes.HEADER, headerResolver)
ampBlockMap.set(blockTypes.LIST, listResolver)
ampBlockMap.set(blockTypes.IMAGE, imageResolver)
ampBlockMap.set(blockTypes.EMBED, embedResolver)
ampBlockMap.set(blockTypes.TWITTER, twitterResolver)
ampBlockMap.set(blockTypes.QUOTE, quoteResolver)
ampBlockMap.set(blockTypes.SPOT_IM, spotimResolver)
ampBlockMap.set(blockTypes.TAGBOARD, tagboardResolver)
ampBlockMap.set(blockTypes.VIDEO, videoResolver)

export default ampBlockMap
