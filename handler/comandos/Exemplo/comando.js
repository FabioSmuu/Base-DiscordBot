module.exports.info = {
    cmd: ['exemplo'/*, 'Insira valores para usar como comando.'*/],
    roles: [/*'Coloque aqui o nome das roles configurada na config.json', 'perm-bot', 'exemplo1', 'exemplo2'*/],
    users: [/*'Coloque aqui o nome dos users configurado na config.json', 'Fabio', 'exemplo1', 'exemplo2'*/],
	deleted: true, //true para comando que se pagam sozinhos.
	dm: false //true para comandos que funcionam em dm (conversa privada).
}

module.exports.comando = (client, msg, args) => {
    //Aqui é onde ocorre a magica, pois, tudo o que for criado neste bloco será executado ao chamar o comando.
}
