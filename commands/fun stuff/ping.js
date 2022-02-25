const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Antwortet mit "Pong!"'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    }
}