module.exports = async (client, member) => {
	if (member.roles.some(role => role.id == config.roles.castigo)) 
	{
		console.log('Ban!')
		member.ban('Saiu do servidor enquanto estava de castigo.')
		.then(() => client.channels.get(config.CanalLog).send(`Poxinha, <@!${member.id}> foi banido tentando fugir do castigo.`))
		.catch(e=>{});
	}
}