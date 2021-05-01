module.exports = async client => {
	console.log(`\n# ${client.user.tag} Conectado`)
	client.user.setActivity(config.Status, {type:1, url:'https://twitch.tv/experiments.json'})

	client.channels.get(config.CanalCaptcha).bulkDelete(100).catch(() => {})
	client.channels.get(config.CanalCaptcha).send('Confirme o captcha.').then(e => e.react(`✅`))
}
