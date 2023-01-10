/* eslint no-console: 0 */

import path from 'path'
import fs from 'fs'
import fsp from 'fs/promises'

import ey from 'ey'

import ssr, { wrap } from '../../ssr/index.js'

const argv = process.argv.slice(2)
    , env = process.env
    , cwd = process.cwd()
    , command = (argv[0] && !argv[0].endsWith('.js') ? argv[0] : '').toLowerCase()
    , ssl = env.SSL_CERT && { cert: env.SSL_CERT, key: env.SSL_KEY }
    , protocol = ssl ? 'https://' : 'http://'
    , port = env.PORT ? parseInt(env.PORT) : (ssl ? 443 : 80)
    , address = env.ADDRESS || '0.0.0.0'
    , { mount, entry } = await getMount()
    , server = await getServer()

let certChangeThrottle

server.esbuild && (await import('../../build/index.js')).default(server.esbuild)

const app = ey(ssl)

app.get(app.files('+public'))

app.get(app.files('+build'))

command !== 'server' && app.get(r => {
  if ((r.headers.accept || '').indexOf('text/html') !== 0)
    return

  return ssr(
    mount,
    {},
    { location: protocol + (r.headers.host || ('localhost' + port)) + r.url }
  ).then(x => {
    r.end(wrap(x, {
      body: command === 'ssr' ? '' : '<script type=module async defer src="/' + entry + '"></script>'
    }), x.status || 200, x.headers)
  })
})

typeof server.default === 'function' && await server.default(app)

listen()

ssl && fs.watch(ssl.cert, () => {
  console.log('SSL certificate changed - reload in 5 seconds')
  clearTimeout(certChangeThrottle)
  certChangeThrottle = setTimeout(() => {
    console.log('Reloading to update SSL certificate')
    listen()
  }, 5000)
})

async function listen() {
  await app.listen(port, address)
  console.log('Listening on', port)
}

async function getServer() {
  const serverPath = path.join(cwd, command === 'server' ? '' : '+', 'index.js')
  return fs.existsSync(serverPath)
    ? await import(serverPath)
    : {}
}

async function getMount() {
  const specifiesIndex = argv.find((x, i, xs) => x[0] !== '-' && x.endsWith('.js'))
      , entry = specifiesIndex || 'index.js'
      , absEntry = path.isAbsolute(entry) ? entry : path.join(cwd, entry)
      , hasEntry = (await fsp.readFile(absEntry, 'utf8').catch(specifiesIndex ? undefined : (() => ''))).indexOf('export default ') !== -1

  return hasEntry
    ? { entry, mount: (await import(absEntry)).default }
    : { entry }
}
