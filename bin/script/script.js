import '../../ssr/index.js'
import config from '../config.js'

// Just run the script directly without watching
await import(process.env.SIN_ENTRY || config.entry)