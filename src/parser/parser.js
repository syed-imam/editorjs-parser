import { listResolver, paragraphResolver, headerResolver } from '../resolvers'
import { imageResolver, tagboardResolver, embedResolver }  from '../resolvers'
import { twitterResolver, quoteResolver, spotimResolver, videoResolver } from '../resolvers'

import blockTypes from '../block-types.js'

const blockMap = new Map()

blockMap.set(blockTypes.PARAGRAPH, paragraphResolver)
blockMap.set(blockTypes.HEADER, headerResolver)
blockMap.set(blockTypes.LIST, listResolver)
blockMap.set(blockTypes.IMAGE, imageResolver)
blockMap.set(blockTypes.EMBED, embedResolver)
blockMap.set(blockTypes.TWITTER, twitterResolver)
blockMap.set(blockTypes.QUOTE, quoteResolver)
blockMap.set(blockTypes.SPOT_IM, spotimResolver)
blockMap.set(blockTypes.TAGBOARD, tagboardResolver)
blockMap.set(blockTypes.VIDEO, videoResolver)

export default blockMap
