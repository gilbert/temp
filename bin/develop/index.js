import './log.js'
import '../../ssr/index.js'

import './print.js'
import './watch.js'

import config from './config.js'

await import('./tools/server.js')
const node = await import('./node.js')

!config.script && config.live && await import('./live.js')

await Promise.all([
  config.script || config.nochrome || node.onlyServer || import('./chrome.js'),
  node.closing
])
