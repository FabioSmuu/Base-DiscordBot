module.exports.info = {
	cmd: ['cls', 'clear', 'limpar'],
	roles: ['perm-bot', 'perm-menssage'],
   	users: [],
	deleted: true,
	dm: false
}

module.exports.comando = (client, msg, args) => {
	msg.channel.bulkDelete(100).then(() => {
		msg.channel.send('As mensagens foram deletadas!').then(m => m.delete(3000))
	}).catch(() => {
		msg.channel.send('Não encontrei menssagens.').then(m => m.delete(3000))
	})
}
