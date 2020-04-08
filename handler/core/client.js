const fs = require("fs"),
util = require("util"),
path = require('path'),
Discord = {Client, Collection} = require("discord.js"),
client = new Client()

////cmd
function readDir(dir){
	let files = {}

	fs.readdirSync(dir)
	.sort((a, b) => fs.statSync(dir + '/' + a).mtime.getTime() - fs.statSync(dir + '/' + b).mtime.getTime())
	.forEach(file => {
		if( fs.lstatSync(dir+ '/' +file).isFile() ){
			if (file.endsWith('.js')) {
				console.log('- ' + file + ' OK!')
				let comandos = require(dir + '/'+file)
				comandos.info.cmd.map(e => client.commands.set(e, comandos))
			}
		}
		else if( fs.lstatSync(dir+ '/' +file).isDirectory()) files[file] = readDir(dir+ '/' +file)
	})
}

client.commands = new Collection()
readDir(__dirname + '/../comandos/')
////cmd

////evt
let files = fs.readdirSync(__dirname + '/../eventos/')
files.map(f => {
	if (f.endsWith('.js')) client.on(f.slice(0, -3), require('../eventos/'+f).bind(null, client))
})
////evt

client.login(process.env.TOKEN)