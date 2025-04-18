#! /usr/bin/env node

import URL from 'node:url'
import path from 'node:path'
import process from 'node:process'
import cp from 'node:child_process'

import prexit from './prexit.js'
import config, { error } from './config.js'

const [major, minor] = process.versions.node.split('.').map(Number)

if (major < 20 || major === 20 && minor <= 10)
  throw error('Sins minimum Node.js support is 20.11, please upgrade from v' + process.versions.node)

try {
  if (config.develop && major < 22 && typeof WebSocket === 'undefined') {
    const x = cp.spawnSync(process.argv[0], ['--experimental-websocket', '--no-warnings', ...process.argv.slice(1)], { stdio: 'inherit' })
    process.exitCode = x.status
  } else {
    await import('./' + config.$[0] + '/index.js')
  }
  config.config && console.log(config) // eslint-disable-line
  prexit.exit()
} catch (e) {
  config.config && console.log(config) // eslint-disable-line
  config.debug
    ? console.error(e) // eslint-disable-line
    : error(e)
  prexit.exit(1)
}
