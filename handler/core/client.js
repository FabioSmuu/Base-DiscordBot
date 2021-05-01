const fs = require("fs")
, util = require("util")
, path = require('path')
, Discord = {Client, Collection} = require("discord.js")
, client = new Client()

client.commands = new Collection()

////cmd
function readDir(dir){
	let files = {}

	fs.readdirSync(dir)
	.sort((a, b) => fs.statSync(path.resolve(dir, a)).mtime.getTime() - fs.statSync(path.resolve(dir, b)).mtime.getTime())
	.map(file => {
		if (fs.lstatSync(path.resolve(dir, file)).isFile()) {
			if (file.endsWith('.js')) {
				console.log(`- ${file} OK!`)
				let comandos = require(path.resolve(dir, file))
				comandos.info.cmd.map(e => client.commands.set(e, comandos))
			}
		}
		else if (fs.lstatSync(path.resolve(dir, file)).isDirectory()) files[file] = readDir(path.resolve(dir, file))
	})
}

readDir(path.resolve(__dirname, '../comandos/'))
////cmd

////evt
let files = fs.readdirSync(path.resolve(__dirname, '../eventos/'))
files.map(f => {
	if (f.endsWith('.js')) client.on(f.slice(0, -3), require('../eventos/'+f).bind(null, client))
})
////evt

client.login(process.env.TOKEN)
