import window from '../src/window.js'
import px from './px.js'

const noop = () => { /* noop */ }

Object.assign(window, {
  XMLHttpRequest,
  addEventListener: noop,
  location: {
    pathname: '',
    hash: '',
    search: ''
  },
  history: {
    pushState(state, title, path) {
      window.history.state = state
      const url = new URL(path, 'http://x')
      window.location.pathname = url.pathname
      window.location.hash = url.hash
      window.location.search = url.search
    },
    state: null
  },
  document: {
    querySelector: () => null,
    createElement: x => {
      const dom = {
        tagName: x.toUpperCase(),
        setAttribute: (x, v) => dom.x = v,
        getAttribute: x => dom[x],
        style: {
          ...px,
          setProperty: function(prop) {
            this[prop] = '1' + (px[prop] || '')
          }
        }
      }
      x === 'style' && Object.assign(dom, {
        sheet: {
          insertRule: (rule, index) => index
            ? dom.sheet.cssRules.splice(index, 0, rule)
            : dom.sheet.cssRules.push(rule),
          cssRules: []
        }
      })
      return dom
    }
  }
})

function XMLHttpRequest() {
  const body = []
      , headers = {}
      , events = new Map()

  let req
    , res
    , method
    , url
    , auth
    , loaded = 0
    , total

  const xhr = {
    UNSENT:           0, // Client has been created. open() not called yet.
    OPENED:           1, // open() has been called.
    HEADERS_RECEIVED: 2, // send() has been called, and headers and status are available.
    LOADING:          3, // Downloading; responseText holds partial data.
    DONE:             4, // The operation is complete.

    status: 0,
    readyState: 0,
    responseType: '',

    get response() {
      return xhr.responseType === '' || xhr.responseText === 'text'
        ? xhr.responseText
        : xhr.responseType === 'json'
        ? JSON.parse(xhr.responseText)
        : xhr.responseType === 'arraybuffer'
        ? Buffer.concat(body).buffer
        : null
    },

    get responseText() {
      return Buffer.concat(body).toString()
    },

    addEventListener(name, fn) {
      events.has(name) || events.set(name, new Set())
      events.get(name).add(fn)
    },

    removeEventListener(name, fn) {
      if (!events.has(name))
        return

      const xs = events.get(name)
      xs.delete(fn)
      xs.size === 0 && events.delete(name)
    },

    abort() {
      state(xhr.UNSENT)
      req && req.abort()
    },

    getResponseHeader(name) {
      return res && res.headers[name.toLowerCase()] || null
    },

    getAllResponseHeaders() {
      if (!res)
        return null
      let x = ''
      for (let i = 0; i < res.rawHeaders.length; i++)
        x += i % 2 === 0 ? (res.rawHeaders[i] + ': ') : (res.rawHeaders[i] + '\n')
      return x
    },

    setRequestHeader(header, value) {
      headers[header] = value
    },

    open(m, u, async, user = '', pass = '') {
      if (xhr.readyState !== xhr.UNSENT)
        return xhr.abort()

      state(xhr.OPENED)
      method = m
      url = u
      user && (auth = user + ':' + pass)
    },

    async send(data) {
      const http = (url.startsWith('https:')
        ? await import('https')
        : await import('http')
      ).default

      try {
        req = http.request(url, {
          headers,
          method,
          auth
        }, r => {
          res = r
          xhr.status = res.statusCode
          total = res.headers['content-length']
          state(xhr.HEADERS_RECEIVED)
          res.on('data', x => {
            state(xhr.LOADING)
            loaded += x.length
            callEvent('loadstart', { loaded, total, lengthComputable: total !== null })
            callEvent('progress', { loaded, total, lengthComputable: total !== null })
            body.push(x)
          })
          res.on('end', () => {
            callEvent('loadend', { loaded, total, lengthComputable: total !== null })
            callEvent('load', { loaded, total, lengthComputable: total !== null })
            state(xhr.DONE)
          })
          res.on('error', xhr.onerror)
        })
        data && req.write(data)
        req.end()
      } catch (e) {
        error(e)
      }
    }

  }

  return xhr

  function state(x) {
    if (xhr.readyState === x)
      return
    xhr.readyState = x
    callEvent('readystatechange', {})
  }

  function error(error) {
    xhr.response = null
    xhr.status = 0
    callEvent('error', error)
    callEvent('loadend', { loaded, total, lengthComputable: total === 0 || total > 0 })
  }

  function callEvent(name, x) {
    'on' + name in xhr && xhr['on' + name](x)
    events.has(name) && events.get(name).forEach(fn => fn(x))
  }
}
