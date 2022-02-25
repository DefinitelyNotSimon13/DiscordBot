const Discord = require('discord.js');
const { logo } = require('../../config.json');

const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Gibt dir die wichtigsten Infos über **dich**!'),
    async execute(interaction) {

        const userLogo = interaction.user.avatarURL();

        const embedServerInfo = new Discord.MessageEmbed()
            .setColor(interaction.user.hexAccentColor)
            .setTitle(interaction.user.tag)
            .setAuthor({ name: 'DjK-Bot 2.0', iconURL: logo })
            .setDescription(`Erstellt: ${interaction.user.createdAt}`)
            .setThumbnail(userLogo)
            .addFields(
                { name: 'Discord ID:', value: interaction.user.id, inline: true },
                { name: 'Benutzername:', value: interaction.user.username, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: 'Server Infos' });
        interaction.channel.send({ embeds: [embedServerInfo]});
        await interaction.reply(`Infos zu ${interaction.user.tag}`)
    }
}