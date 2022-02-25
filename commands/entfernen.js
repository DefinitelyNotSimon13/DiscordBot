const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('entfernen')
        .setDescription('Entfernt einen Benutzer'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    }
}
 
