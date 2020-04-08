module.exports = async (client, msg, user) => {
    if(user.bot)  return
    const {message, emoji} = msg
    if(emoji.name === "✅") {
		switch(message.channel.id) {
			case config.CanalCaptcha:
				message.member.guild.members.map(e => {
					if (e.id === user.id) return e.setRoles([config.roles.visitante])
				})
				break
		}
    } 
}