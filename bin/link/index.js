import path from 'node:path'
import fs from 'node:fs/promises'
import { existsSync } from 'node:fs'

import config from '../config.js'

const p = console.log // eslint-disable-line

if (config._.length) {
  for (const name of config._) {
    const target = path.join(config.linkDir, name)
    if (!existsSync(target))
      throw new Error(name + ' not found - did you link it?')
  }

  config.install = true
  config.link = false

  config._ = config._.map(x => 'link:' + x)
  await import('../install/index.js')
} else {
  const pkg = JSON.parse(await fs.readFile('package.json'))
  await fs.mkdir(config.linkDir, { recursive: true })
  await symlink(config.cwd, path.join(config.linkDir, pkg.name))

  await Promise.all(Object.entries(
    typeof pkg.bin === 'string'
    ? { [pkg.name.split('/').pop()]: pkg.bin }
    : pkg.bin || {}
  ).map(async([name, file]) => {
    const target = path.join(config.cwd, file)
    const link = path.join(config.binDir, name)
    const sinx = process.platform === 'win32' && path.join(import.meta.dirname, '..', 'install', 'sinx.exe')

    if (sinx) {
      await fs.mkdir(config.binDir, { recursive: true })
      await fs.writeFile(link, 'node "' + target + '"')
      await fs.copyFile(sinx, path.join(config.binDir, name + '.exe')).catch(err => {
        if (name !== 'sin' || err.code !== 'EBUSY')
          throw err
      })
    } else {
      await symlink(target, link)
      await fs.chmod(target, 0o766)
    }
  }))

  p('🔥 Linked as ' + pkg.name)
}

async function symlink(target, link) {
  try {
    await fs.mkdir(path.dirname(link), { recursive: true })
    await fs.symlink(target, link, 'junction')
  } catch (_) {
    await fs.rm(link, { recursive: true })
    await fs.symlink(target, link, 'junction')
  }
}
