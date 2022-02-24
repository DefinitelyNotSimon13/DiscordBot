const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Gibt dir alle wichtigen Infos über DICH!'),
    async execute(interaction) {
        await interaction.reply(`Dein Tag: ${interaction.user.tag}\Deine Id: ${interaction.user.id}`);
    }
}