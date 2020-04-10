if (!config.envfake) return

const fs = require("fs"),
path = require('path')

let env = {},
file = fs.readFileSync(path.resolve(process.cwd(), '.env'), 'utf8')

file.toString().split(/\n|\r|\r\n/).forEach(async (line) => {
	let valor = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
	if (valor != null) {
	  let val = (valor[2] || ''),
	  end = val.length - 1

	  if (val[0] === '"' && val[end] === '"') {
		val = val.substring(1, end)
		val = val.replace(/\\n/g, '\n')
		
	  } else val = val.trim()
	  
	  env[valor[1]] = val
	}
})

Object.keys(env).forEach(async (key) => {
	let retorno = (!Object.prototype.hasOwnProperty.call(process.env, key)) ? process.env[key] = env[key] : false
	if (!retorno) console.log('[ENV] Erro na importação de valores.')
})
