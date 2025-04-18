import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import config from './config.js'
import s from '../../src/index.js'

process.env.NODE_ENV = 'development'

const api = {
  blackbox: config.debug ? [] : ['/sin/src/', '/sin/bin/', '/ey/src/', '/sin/ssr/'],
  url: s.live(config.url, x => fs.writeFileSync(path.join(config.project, '.sin-url'), x)),
  node: {
    restart : s.event(),
    hotload : s.event(),
    watch   : s.event()
  },
  browser: {
    reload  : s.event(),
    redraw  : s.event(),
    hotload : s.event(),
    watch   : s.event()
  },
  log: s.live()
}

export default api
