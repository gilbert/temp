import path from 'path'
import '../env.js'

process.env.NODE_ENV = 'production'

const argv = process.argv.slice(2)
const entry = argv.find(x => x.startsWith('./') || x.endsWith('.js')) || ''
const root = path.isAbsolute(entry) ? entry : path.join(process.cwd(), entry)
const file = root.endsWith('.js')
const workers = parseInt(argv.find((x, i) => argv[i - 1] === '--workers') || 1)

process.chdir(process.env.PWD = file ? path.dirname(root) : root)

const url = argv[0] === 'raw'
  ? file ? root : path.join(root, 'index.js')
  : './server.js'

if (workers > 1) {
  for (let i = 0; i < workers; i++)
    new Worker(new URL(url, import.meta.url), { argv })
} else {
  import(url)
}
