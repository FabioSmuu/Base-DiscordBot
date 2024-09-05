# Repositorio de arquivos de BOT usando a API [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome).


### Informaões:
- Possui uma [.env](https://github.com/FabioSmuu/.env) própria
- Leitura de configuraçoes em [config.json](/handler/config.json)
- Listagem e criação de [comandos](/handler/comandos/Exemplo/comando.js) de forma independente.
- Listagem de [eventos](/handler/eventos/ready.js), tambem independentes.



| Dependencia | Como Instalar |
| - | - |
| discord.js | npm i discord.js@11.5.1

### Como criar um comando:
Seguindo o exemplo do arquivo [comando.js](/handler/comandos/Exemplo/comando.js) podemos ver como um comando é criado.

```js
module.exports.info = {
    cmd: ['exemplo', 'e'], //Irá funcionar usando prefixo + nome  (!exemplo ou !e)
    roles: ['perm-bot', 'exemplo1', 'exemplo2'],
    users: ['Fabio', 'Smuu'],
    deleted: true,
    dm: false
}

module.exports.comando = async (client, msg, args) => {
    //Aqui é onde ocorre a magica, pois, tudo o que for criado neste bloco será executado ao chamar o comando.
}
```

Como esta descrito no exemplo acima, temos de configurar as roles e os users que poderam executar o comando.

Estes valores são configurados na [config.json](/handler/config.json).

**Obrigado pela sua atenção!**
