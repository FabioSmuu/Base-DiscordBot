module.exports.info = {
	cmd: ["eval"],
	roles: ['perm-bot'],
	users: ['Fabio'],
	deleted: true,
	dm: true
}

module.exports.comando = async (client, msg, args) => {
	const code = '```'

	try {
		msg.channel.send(`Eval: ${code}js\n ${args.join(' ') + code}`)
	}
	catch {
		msg.channel.send(code  + `js\n Eval erro: ${args.join(' ')}` + code)
	}
}
