//Requirements
const fs = require('fs');
const { Client, Intents, Collection} = require('discord.js');
const { token } = require('./config.json');

//Neue Client Instanz
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});
module.exports = client;

//Commands Collection
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file  of commandFiles) {
    const command = require(`./commands/${file}`)
    //Neues Item in der Kollektion
    //Mit Key als Kommand Name bla bla
    client.commands.set(command.data.name, command);
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


/*
//Läuft einmal wenn client bereit ist
client.once('ready', () => {
    console.log('Client ist readyyy!');
});

//Client tut etwas onItneraction
client.on('interactionCreate', async interaction => {
    console.log(`${interaction.user.tag} in #${interaction.channel.name}: Hat eine Interaktion getriggert.`)
	if (!interaction.isCommand()) return;

    const command  = client.commands.get(interaction.commandName);

    if (!command) return; 

    try {
        await command.execute(interaction);
    } catch(error) {
        console.error(error);
        await interaction.reply({ content: 'Es gab ein Problem beim ausführen des Commands!', ephemeral: true});
    }
  
});
*/

//Login to Discord mit Token
client.login(token);