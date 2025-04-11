import cp from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

// Get the directory of this file
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Set entry path for the script
process.env.SIN_ENTRY = process.env.SIN_ENTRY || process.argv[2]

// Execute the script directly without watching
cp.spawnSync(
  process.execPath, [
    '--import', path.join(__dirname, 'import.js'),
    path.join(__dirname, 'script.js'),
    ...process.argv.slice(2)
  ], {
    stdio: 'inherit'
  }
)