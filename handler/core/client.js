const { readdirSync, statSync, lstatSync } = require('fs')
const { resolve, basename } = require('path')
const Discord = {Client, Collection} = require('discord.js')
const client = new Client()

client.commands = new Collection()

////cmd
console.log('\n[Commands]')
const readFile = (dir, file) => {
	if (!file.endsWith('.js')) return
	const comandos = require(resolve(dir, file))
	comandos.info.cmd.map(e => client.commands.set(e, comandos))

	console.log(`- ${file} OK!`)
}

const mimeType = (dir, sub) => statSync(resolve(dir, sub)).mtime.getTime()
const getStat = (dir, sub) => lstatSync(resolve(dir, sub))
const readDir = dir => {
	const files = {}

	const getCommand = path => {
		const stat = getStat(dir, path)
		if (stat.isFile()) return readFile(dir, path)
		if (stat.isDirectory()) return files[path] = readDir(resolve(dir, path))
	}

	readdirSync(dir)
	.sort((path, name) => mimeType(dir, path) - mimeType(dir, name))
	.forEach(getCommand)
}

readDir(resolve(__dirname, '../comandos/'))
////cmd

////evt
console.log('\n[Events]')
const events = readdirSync(resolve(__dirname, '../eventos/'))
const eventFilter = file => {
	if (!file.endsWith('.js')) return
	const path = resolve(__dirname, '..', 'eventos', file)
	const filename = basename(path, '.js')
	client.on(filename, require(path).bind(null, client))

	console.log(`- ${filename} OK!`)
}

events.forEach(eventFilter)
////evt

client.login(process.env.TOKEN)
