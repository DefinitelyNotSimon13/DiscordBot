//Requirements
const { Client, Intents} = require('discord.js');
const { token } = require('config.json');

//Neue Client Instanz
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

//Läuft einmal wenn client bereit ist
client.once('ready', () => {
    console.log('Client ist readyyy!');
});

//Login to Discord mit Token
client.login(token);