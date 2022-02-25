
//Requirements
const fs = require('fs');
const { Client, Intents, Collection} = require('discord.js');
const { token } = require('./config.json');

//Neue Client Instanz
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});
module.exports = client;


//Commands Collection mit Ordnern
client.commands = new Collection();
const commandFolders = fs.readdirSync(`./commands`)
for (const folder  of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.data.name, command);
    }
}

//Event Dateien

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if(event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}


//Login to Discord mit Token
client.login(token);