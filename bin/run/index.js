import cp from 'node:child_process'
import Path from 'node:path'
import fs from 'node:fs'

import config from '../config.js'
import c from '../color.js'

const p = console.log // eslint-disable-line
const noop = () => { /* noop - child handles */ }

let pkg
let dir = config.cwd
while (!(pkg = await jsonRead(Path.join(dir, 'package.json')))) {
  const next = Path.dirname(dir)
  if (dir === next)
    throw new Error('No package.json found')
  dir = next
}

process.chdir(process.env.PWD = dir)

if (config._.length === 0) {
  print(pkg)
} else {
  for (const x of config._) {
    const cmd = pkg.scripts[x]
    if (!cmd)
      throw new Error('No script found for: ' + x)
  
    const bins = [Path.join(config.globalDir, 'node_modules', '.bin')]
    let dir = config.cwd
    let prev
    let error
    while (dir !== prev) {
      const binDir = Path.join(dir, 'node_modules', '.bin')
      if (fs.existsSync(binDir))
        bins.unshift(binDir)
      prev = dir
      dir = Path.dirname(dir)
    }
    
    'SIGINT SIGTERM SIGHUP SIGBREAK'.split(' ').forEach(x => process.on(x, noop))
    process.exitCode = cp.spawnSync(cmd, [], {
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        PATH: bins.join(':') + ':' + process.env.PATH
      }
    }).status
    
    if (process.exitCode !== 0)
      break
    
    'SIGINT SIGTERM SIGHUP SIGBREAK'.split(' ').forEach(x => process.off(x, noop))
  }
}

function print(pkg) {
  for (const [name, script] of Object.entries(pkg.scripts)) {
    p('  ' + name)
    p('    ' + c.dim(script))
  }
}

function jsonRead(x) {
  try {
    return JSON.parse(fs.readFileSync(x))
  } catch (e) {
    if (e.code === 'ENOENT')
      return null
    throw e
  }
}
