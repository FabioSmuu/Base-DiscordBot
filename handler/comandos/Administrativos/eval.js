module.exports.info = {
    cmd: ["eval"],
    roles: ['perm-bot'],
    users: ['Fabio']
}

module.exports.comando = (client, msg, args) => {
	let code = '```'
	
	try {
		msg.channel.send(`Eval: ${code}js\n ${args.join(' ') + code}`)
	}
	catch {
		msg.channel.send(code  + `js\n Eval erro: ${args.join(' ')}` + code)
	}
}