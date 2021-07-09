if (!config.envfake) return

const fs = require('fs'), path = require('path')

const removeAspas = string => string.replace(/['"](\w*)['"]/g, '$1').trim().replace(/\\n/g, '\n')

const registrar = (chave, valor) => {
	if (!Object.prototype.hasOwnProperty.call(process.env, chave)) {
		process.env[chave] = valor
		console.log(`[ENV] (${chave}) Carregada!`)
	} else
		console.log(`[ENV] Erro ao registrar (${chave}) Acesso negado.`)
}

const formatar = linha => {
	const estrutura = linha.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)

	if (estrutura != null) {
		const [undefined, chave, valor] = estrutura
		const retorno = removeAspas(valor)

		if (retorno) registrar(chave, retorno)
	}
}

const file = fs.readFileSync(path.resolve(process.cwd(), '.env'), 'utf8')
file.toString().split(/\n|\r|\r\n/).forEach(formatar)

//console.log(process.env)
