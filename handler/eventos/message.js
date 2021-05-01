module.exports = async (client, msg) => {
	if (['discord.gg/', 'discordapp.com/invite/', 'invite.gg/', 'discord.io/', 'discord.me/', 'discord.plus/', 'dis.gd/'].some(invite => msg.content.includes(invite) && !msg.content.includes('https://discord.gg/bzjJBsS'))) {
		msg.delete().then(msg.channel.send(`${msg.author} você não pode enviar links de outros servidores aqui!`).then(msg => msg.delete(5000)))
	}

	let args = msg.content.slice(config.Prefixo.length).trim().split(/ +/g)
	let cmd = client.commands.get(args.shift().toLowerCase())

	if (
		!cmd
		|| msg.author.bot
		|| (msg.channel.type == 'dm' && !cmd.info.dm)
		|| !msg.content.startsWith(config.Prefixo)
	)
	return

	if (
		(cmd.info.users == 0 && cmd.info.roles == 0)
		|| cmd.info.roles.some(r => msg.member.roles.some(b => b.id == config.roles[r]))
		|| cmd.info.users.some(user => msg.author.id === config.users[user])
	)

	if (cmd.info.deleted) msg.delete(1)
	return cmd.comando(client, msg, args)
}
