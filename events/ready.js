const {name} = require('../config.json');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Bereit! Angemeldet als ${client.user.tag}`);
        client.user.setUsername(name);
       // client.user.setActivity('/help', {type: 'CUSTOM_STATUS'});
	},
};