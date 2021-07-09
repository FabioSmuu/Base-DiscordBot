if (!config.envfake) return

const fs = require('fs'), path = require('path')

const filterLine = string => string.replace(/['"](\w*)['"]/g, '$1').trim().replace(/\\n/g, '\n')

const registerKey = (key, value) => {
	if ((process.env || {}).hasOwnProperty(key))
		console.log(`[ENV] Erro ao registrar (${key}) Acesso negado.`)
	else {
		process.env[key] = filterLine(value)
		console.log(`[ENV] (${key}) Carregada!`)
	}
}

const fileToEnv = line => {
	const newline = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
	const [undefined, key, value] = newline || []

	if (newline) registerKey(key, value)
}

const parseEnv = file => file.toString().split(/\n|\r|\r\n/).forEach(fileToEnv)

const file = fs.readFileSync(path.resolve(process.cwd(), '.env'), 'utf8')
parseEnv(file)

//console.log(process.env)

