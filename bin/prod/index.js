/* eslint no-console: 0 */

import path from 'path'
import fs from 'fs'

import uws from 'uWebSockets.js'
import ustatic from 'ustatic'

import sin from '../../ssr/uws.js'

const env = process.env
    , forbiddens = ['/node_modules/*', '/package.json', '/package-lock.json', '/pnpm-lock.yaml']
    , ssl = env.SSL_CERT && { key_file_name: env.SSL_KEY, cert_file_name: env.SSL_CERT }
    , port = env.PORT || (ssl ? 443 : 80)
    , cwd = process.cwd()
    , entry = process.argv[3] || 'index.js'
    , absEntry = path.isAbsolute(entry) ? entry : path.join(process.cwd(), entry)
    , hasEntry = fs.readFileSync(absEntry, 'utf8').indexOf('export default ') !== -1
    , mount = hasEntry ? (await import(absEntry)).default : {}
    , user = await userServer()

let listenerToken
  , certChangeThrottle

user.esbuild && (await import('../../build/index.js')).default()

const assets = ustatic('', { index: ssr, notFound: ssr })
const build = ustatic('.build')

listen()

env.SSL_CERT && fs.watch(env.SSL_CERT, () => {
  console.log('SSL certificate changed - reload in 5 seconds')
  clearTimeout(certChangeThrottle)
  certChangeThrottle = setTimeout(() => {
    console.log('Reloading to update SSL certificate')
    listen()
  }, 5000)
})

async function listen() {
  listenerToken && uws.us_listen_socket_close(listenerToken)

  const app = ssl
    ? uws.SSLApp(ssl)
    : uws.App()

  forbiddens.forEach(x => app.get(x, forbidden))

  typeof user.default === 'function' && await user.default(app)

  app.get('/*', (res, req) => {
    const url = req.getUrl()

    // Don't serve _ (server) folder or hidden paths
    if (url.charCodeAt(1) === 46 || url.indexOf('/.') !== -1) // _
      return forbidden(res)

    const ext = path.extname(url).slice(1)

    ext === 'js'
      ? build(res, req)
      : assets(res, req)
  })

  app.listen(port, x => {
    if (!x)
      throw new Error('Failed listening on ' + port)

    console.log('Listening on', port)
    listenerToken = x
  })
}

function forbidden(res) {
  return end(res, '403 Forbidden')
}

function end(res, status, x) {
  res.cork(() => {
    res.writeStatus(status)
    res.end(arguments.length === 1 ? status : x)
  })
}

async function userServer() {
  const serverPath = path.join(cwd, '+', 'index.js')
  if (!fs.existsSync(serverPath))
    return {}

  return await import(serverPath)
}

function ssr(res, req, next) {
  if (res.accept.indexOf('text/html') !== 0)
    return next(res, req)

  sin(mount, {}, { location: res.url }, {
    body: '<script type=module async defer src="/index.js"></script>',
    res
  })
  return true
}
