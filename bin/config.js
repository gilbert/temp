import fs from 'fs'
import url from 'url'
import path from 'path'
import c from './color.js'

const argv = process.argv.slice(2)
const env = process.env

const command  = env.SIN_COMMAND  = getCommand()
const entry    = env.SIN_ENTRY    = getEntry()
const bin      = env.SIN_BIN      = getBin()
const raw      = env.SIN_RAW      = argv.some(x => x === 'raw') || ''
const noscript = env.SIN_NOSCRIPT = argv.some(x => x === 'noscript') || ''
const debug    = env.SIN_DEBUG    = env.SIN_DEBUG || process.argv.some(x => x === '--debug' || x === '-d')
const cwd      = env.PWD          = path.dirname(entry)

process.cwd() !== cwd && process.chdir(cwd)

export default {
  command,
  entry,
  bin,
  raw,
  noscript,
  cwd,
  debug
}

function getCommand() {
  const commands = {
    b: 'build',
    c: 'create',
    d: 'development',
    g: 'generate',
    h: 'help',
    p: 'purge',
    r: 'run',
    s: 'start',
    v: 'version',
    i: 'install'
  }

  const first = argv[0] || ''
      , help = (argv.some(x => x === '-h' || x === '--help') || argv.length === 0) && 'help'
      , version = argv.some(x => x === '-v' || x === '--version') && 'version'

  return first
    && first[0] in commands
    && commands[first[0]].slice(0, first.length) === first
    && commands[first[0]]
    || help
    || version
}

function getEntry() {
  const x = argv.slice(1).find(x => !'server static raw noscript'.includes(x) && x[0] !== '-') || ''

  const entry = path.isAbsolute(x)
    ? x
    : path.join(
      process.cwd(),
      x !== path.basename(process.cwd()) && fs.existsSync(x + '.js')
        ? x + '.js'
        : x !== path.basename(process.cwd())
        ? path.join(x, x.endsWith('.js') ? '' : 'index.js')
          : 'index.js'
    )

  try {
    fs.readFileSync(entry, { length: 1 })
  } catch (error) {
    const x = '🚨 Entry file '+  entry + ' is not available'
    command === 'development'
      ? process.stdout.write(
          '\n ' + c.inverse(' '.repeat(process.stdout.columns - 2)) +
          '\n ' + c.inverse(('   ' + x).padEnd(process.stdout.columns - 2, ' ')) +
          '\n ' + c.inverse(' '.repeat(process.stdout.columns - 2)) + '\n\n'
        )
      : x
    process.exit(1)
  }

  return entry
}

function getBin() {
  const local = path.join(process.cwd(), 'node_modules', 'sin', 'bin')

  return fs.existsSync(local)
    ? local
    : url.fileURLToPath(new URL('.', import.meta.url))
}
