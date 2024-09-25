import tls from 'node:tls'
import net from 'node:net'
import dns from 'node:dns/promises'

const ips = {}
const open = {}
const highWaterMark = 128 * 1024
export async function cacheDns() {
  const host = 'registry.npmjs.org'
  ips[host] = (await dns.lookup(host)).address
}

export function destroy() {
  for (const host in open) {
    for (const x of open[host])
      x.destroy()
  }
}

export async function get(host, data, fn) {
  const hosts = open[host]
  const socket = hosts && hosts.pop() || (await create(host))

  return new Promise((resolve, reject) => {
    socket.resolve = resolve
    socket.reject = reject
    socket.handler = fn
    socket.write(data)
  })
}

async function create(host) {
  const xs = host in open
    ? open[host]
    : open[host] = Object.assign([], { count: 1, queue: [] })

  if (xs.count > 50)
    return new Promise(r => xs.queue.unshift(r))

  xs.count++

  const socket = tls.connect({
    port: 443,
    host: ips[host],
    servername: host,
    highWaterMark,
    onread: {
      buffer: Buffer.allocUnsafe(highWaterMark),
      callback: (end, buffer) => {
        if (!socket.handler)
          return

        try {
          socket.handler(end, buffer, done)
        } catch (error) {
          socket.reject(error)
        }
      }
    }
  })

  socket.on('error', x => socket.reject(x))
  socket.on('close', () => {
    xs.splice(xs.indexOf(socket), 1)
    xs.count--
  })

  return socket

  function done(x) {
    socket.handler = null
    socket.resolve(x)
    xs.queue.length
      ? xs.queue.pop()(socket)
      : xs.unshift(socket)
  }
}
