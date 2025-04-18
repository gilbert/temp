import tls from 'node:tls'
import net from 'node:net'

import zlib from 'node:zlib'
import dns from 'node:dns/promises'

const ips = {}
const open = {}
const empty = Buffer.alloc(0)
const highWaterMark = 64 * 1024

fetch.retried = []

export async function getIp(host) {
  if (host in ips)
    return ips[host]

  return ips[host] = dns.lookup(host).catch(() => dns.lookup(host)).catch(() => dns.lookup(host)).then(x => x.address)
}

export function destroy() {
  for (const host in open) {
    for (const x of open[host])
      x.destroy()
  }
}

export async function fetch(x, pathname, headers = {}) {
  let retries = 3
  while (true) { // eslint-disable-line
    const hosts = open[x]
    const socket = hosts && hosts.pop() || (await create(x))
    try {
      let body = await new Promise((resolve, reject) => {
        socket.resolve = resolve
        socket.reject = reject
        socket.handler = handler(resolve, reject, socket.hostname, pathname)
        socket.gzip =
        socket.pathname = pathname
        socket.write('GET ' + pathname + ' HTTP/1.1\r\nHost: ' + socket.hostname + '\r\n' + setHeaders(headers) + 'User-Agent: sin/0.0.1\r\n\r\n')
      })
      socket.done()
      return headers['Accept-Encoding'] === 'gzip' && body[0] === 0x1f && body[1] === 0x8b
        ? new Promise((resolve, reject) => zlib.gunzip(body, (err, x) => err ? reject(err) : resolve(x)))
        : body
    } catch (err) {
      socket.destroy()
      fetch.retried.push(socket.hostname + pathname)
      if (retries-- === 0)
        throw err
    }
  }
}

function setHeaders(xs) {
  let x = ''
  for (const h in xs)
    x += h + ': ' + xs[h] + '\r\n'
  return x
}

async function create(x) {
  const xs = x in open
    ? open[x]
    : open[x] = Object.assign([], { count: 1, queue: [], secureContext: tls.createSecureContext() })

  if (xs.count > 200)
    return new Promise(r => xs.queue.unshift(r))

  xs.count++
  const url = new URL(x)
  const socket = (url.protocol === 'https:' ? tls : net).connect({
    port: url.port ? url.port : url.protocol === 'https:' ? 443 : 80,
    host: await getIp(url.hostname),
    servername: url.hostname,
    highWaterMark,
    ALPNProtocols: ['http/1.1'],
    secureContext: xs.secureContext,
    noDelay: true,
    onread: {
      buffer: Buffer.allocUnsafe(highWaterMark),
      callback: (end, buffer) => socket.handler(buffer, end)
    }
  })

  socket.hostname = url.hostname
  socket.setTimeout(10000)
  socket.on('timeout', () => socket.destroy(new Error('Timeout')))

  socket.done = done
  socket.on('error', x => socket.reject(x))
  socket.on('close', () => {
    socket.reject(new Error('Premature close for ' + url.hostname + socket.pathname))
    xs.splice(xs.indexOf(socket), 1)
    xs.count--
  })

  return socket

  function done() {
    socket.handler = socket.pathname = null
    xs.queue.length
      ? xs.queue.pop()(socket)
      : xs.unshift(socket)
  }
}

function handler(resolve, reject, host, pathname) {
  let l = -1
    , n = 1
    , c = 0
    , x = 0
    , cl = ''
    , size = 0
    , body = empty
    , redirect = false

  return (xs, end) => {
    if (n === 0)
      return read(xs, 0, end)

    if (n === 6)
      return chunked(xs, 0, end)

    for (let i = 0; i < end; i++) {
        n === 1 ? checkStatus(xs, end)    && (n = 2)
      : n === 2 ? getContentLength(xs[i])
      : n === 3 ? xs[i] === 10            && (n = 4)
      : n === 4 ? n = findBody(xs[i], xs, end)
      : n === 5 ? (read(xs, i, end), n = 0, i = end)
      : n === 6 &&(chunked(xs, i, end), i = end)
    }
  }

  function done(x, xs) {
    if (!redirect)
      return resolve(x)

    const [_, origin, pathname] = xs.toString('utf8').match(/\nlocation:\s*(https?:\/\/[^/]+)([^\r\n]+)?/i) || []
    if (!origin)
      throw new Error('No location found in 302 redirect')

    resolve(fetch(origin, pathname || '/'))
  }

  function chunked(xs, start, end) {
    c === -2 && (start = readChunkLength(xs, start, end))
    c === -3 && readChunk(xs, start, end)
  }

  function readChunk(xs, start, end) {
    if (start === end)
      return

    const next = Math.min(end, start + l)
    const s = next - start
    if (size + s > body.length) {
      const x = Buffer.allocUnsafe(body.length * 2)
      body.copy(x, 0, 0, size)
      body = x
    }
    xs.copy(body, size, start, next)
    size += s
    l -= s
    l === 0 && (c = -2)
    return chunked(xs, next, end)
  }

  function readChunkLength(xs, start, end) {
    while (start < end) {
      x = xs[start++]
      if (cl && x === 13) {
        l = parseInt(cl, 16)
        cl = ''
        return l === 0
          ? done(body.subarray(0, size), xs, end)
          : (c = -3, start + 1)
      } else if ((x >= 65 && x <= 70) || (x >= 97 && x <= 102) || (x >= 48 && x <= 57)) { // A F a f 0 9
        cl += String.fromCharCode(x)
      }
    }
  }

  function findBody(x, xs, end) {
    if (x === 13) // carraige
      return 4

    if (x !== 10) // newline
      return 3

    if (l === 0)
      return done(body, xs, end)

    body = Buffer.allocUnsafe(l)
    return 5
  }

  function checkStatus(xs) {
    return xs[9] === 50 && xs[10] === 48 && xs[11] === 48 // 2 0 0
      ? true
      : xs[9] === 51 && xs[10] === 48 && xs[11] === 50 // 3 0 2
      ? redirect = true
      : reject(xs.subarray(0, xs.indexOf(10)).toString().trim() + ' for ' + host + pathname)
  }

  function read(xs, start, end) {
    xs.copy(body, body.byteLength - l, start, end)
    l -= end - start
    if (l <= 0)
      done(body, xs, end)
  }

  function getContentLength(x) {
      c ===  0 ?  (x === 10              ) ? (c =  1) : c = 0        // newline
    : c ===  1 ?  (x === 67 || x === 99  ) ? (c =  2)
               :  (x === 13              ) ? (c =  1)
               :  (x === 10              ) ? (c = -2) : c = 0        // C c
    : c ===  2 ?  (x === 79  || x === 111) ? (c =  3) : c = 0        // O o
    : c ===  3 ?  (x === 110 || x ===  78) ? (c =  4) : c = 0        // N n
    : c ===  4 ?  (x === 116 || x ===  84) ? (c =  5) : c = 0        // T t
    : c ===  5 ?  (x === 101 || x ===  69) ? (c =  6) : c = 0        // E e
    : c ===  6 ?  (x === 110 || x ===  78) ? (c =  7) : c = 0        // N n
    : c ===  7 ?  (x === 116 || x ===  84) ? (c =  8) : c = 0        // T t
    : c ===  8 ?  (x === 45              ) ? (c =  9) : c = 0        // -
    : c ===  9 ?  (x === 76  || x === 108) ? (c = 10) : c = 0        // L l
    : c === 10 ?  (x === 101 || x ===  69) ? (c = 11) : c = 0        // E e
    : c === 11 ?  (x === 110 || x ===  78) ? (c = 12) : c = 0        // N n
    : c === 12 ?  (x === 103 || x ===  71) ? (c = 13) : c = 0        // G g
    : c === 13 ?  (x === 116 || x ===  84) ? (c = 14) : c = 0        // T t
    : c === 14 ?  (x === 104 || x ===  72) ? (c = 15) : c = 0        // H h
    : c === 15 ?  (x === 58              ) ? (c = 16, l = 0) : c = 0 // :
    : c === 16 ?  (x === 10              ) ? (c = -1)                // newline
               :  (x  >= 48 && x <=  57  ) ? (l = l * 10 + x - 48)   // 0 9
               :  (x ===  9 || x === 32 || x === 13 ) ? (c = 16)     // space tab
               :  (c === 17              )
    : c = 0

    return n = c === -1
      ? 4
      : c === -2
      ? (l = 0, body = Buffer.allocUnsafe(64 * 1024), 6)
      : 2
  }
}
