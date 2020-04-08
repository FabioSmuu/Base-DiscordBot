global.config = require("./handler/config.json")
module.exports = {
	env: require("./handler/core/env.js"),
	Prototipo: require("./handler/core/prototipo.js"),
	Client: require("./handler/core/client.js")
}