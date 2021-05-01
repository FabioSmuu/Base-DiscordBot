module.exports.info = {
    cmd: ['fechar', 'close', 'shutdown', 'stop'],
    roles: ['perm-bot'],
    users: ['Fabio'],
    deleted: true,
    dm: true
}

module.exports.comando = (client, msg, args) => {
	client.user.setActivity("Desconectando...", {type: 1, url: "https://twitch.tv/experiments.json"})
	msg.delete()
	client.setInterval(async () => {
		client.destroy()
		process.exit()
	}, 3000)
}
