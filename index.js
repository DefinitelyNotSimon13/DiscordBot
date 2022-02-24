//Requirements
const { Client, Intents} = require('discord.js');
const { token } = require('./config.json');

//Neue Client Instanz
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

//Läuft einmal wenn client bereit ist
client.once('ready', () => {
    console.log('Client ist readyyy!');
});

//Client tut etwas onItneraction

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'beep') {
		await interaction.reply('Boop!');
	}
    
    
    //Alter Dingens
    /*if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server Name: ${interaction.guild.name}\nMitgliederzahl: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Dein Tag: ${interaction.user.tag}\Deine Id: ${interaction.user.id}`);
	}*/
});

//Login to Discord mit Token
client.login(token);