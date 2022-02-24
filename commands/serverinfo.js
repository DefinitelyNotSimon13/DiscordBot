const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Gibt dir die wichtigsten Serverinfos'),
    async execute(interaction) {
        await interaction.reply(`Server Name: ${interaction.guild.name}\nMitgliederzahl: ${interaction.guild.memberCount}`);
    }
}