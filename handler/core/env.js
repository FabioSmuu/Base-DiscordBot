if (!config.envfake) return

const fs = require('fs')
, path = require('path')
, env = {}
, file = fs.readFileSync(path.resolve(process.cwd(), '.env'), 'utf8')

file.toString().split(/\n|\r|\r\n/).map(async (linha) => {
	const valor = linha.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
	if (valor != null) {
		const val = valor[2] || '',
		end = val.length - 1
		env[valor[1]] = (val[0] === '"' && val[end] === '"') ? val.substring(1, end).replace(/\\n/g, '\n') : val.trim()
	}
})

Object.keys(env).map(async (key) => {
	const retorno = (!Object.prototype.hasOwnProperty.call(process.env, key)) ? process.env[key] = env[key] : false
	if (!retorno) console.log('[ENV] Erro na importação de valores.')
})
