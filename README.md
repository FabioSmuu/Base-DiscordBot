# Repositorio de arquivos de BOT usando a API [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome).

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/smuu)

### Informaões:
- Possui uma [.env](/handler/core/env.js) própria
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
    users: ['Fabio', 'Smuu']
}

module.exports.comando = (client, msg, args) => {
    //Aqui é onde ocorre a magica, pois, tudo o que for criado neste bloco será executado ao chamar o comando.
}
```

Como esta descrito no exemplo acima, temos de configurar as roles e os users que poderam executar o comando.

Estes valores são configurados na [config.json](/handler/config.json).

**Obrigado pela sua atenção!**
