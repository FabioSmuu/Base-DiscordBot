if (!config.envfake) return

const fs = require('fs'), path = require('path')

const removeAspas = string => {
	return (string[0] === '"' && string[string.length-1] === '"')
	? string.substring(1, string.length-1).replace(/\\n/g, '\n')
	: string.trim()
}

const registrarEnv = (chave, valor) => {
	if (!Object.prototype.hasOwnProperty.call(process.env, chave)) {
		process.env[chave] = valor
		console.log(`[ENV] (${chave}) Carregada!`)
	} else
		console.log(`[ENV] Erro ao registrar (${chave}) Acesso negado.`)
}

const formatarLinha = linha => {
	const estrutura = linha.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)

	if (estrutura != null) {
		const [str, chave, valor] = estrutura
		const retorno = removeAspas(valor)

		if (retorno) registrarEnv(chave, retorno)
	}
}

const file = fs.readFileSync(path.resolve(process.cwd(), '.env'), 'utf8')
file.toString().split(/\n|\r|\r\n/).forEach(formatarLinha)
