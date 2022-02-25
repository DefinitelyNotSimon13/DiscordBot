const Discord = require('discord.js');
const { logo } = require('../../config.json');

const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Gibt dir die wichtigsten Serverinfos'),
    async execute(interaction) {

        const guildLogo = interaction.guild.iconURL();
        const guildBanner = interaction.guild.bannerURL();

        const embedServerInfo = new Discord.MessageEmbed()
            .setColor('#29bb16')
            .setTitle(interaction.guild.name)
            .setAuthor({ name: 'DjK-Bot 2.0', iconURL: logo })
            .setDescription(`Erstellt: ${interaction.guild.createdAt}`)
            .setThumbnail(guildLogo)
            .addFields(
                { name: 'Aktuelle Mitglieder:', value: interaction.guild.memberCount.toString(), inline: true },
                { name: 'Anzahl an Kanälen:', value: interaction.guild.channels.channelCountWithoutThreads.toString(), inline: true },
            )
            .setImage(guildBanner)
            .setTimestamp()
            .setFooter({ text: 'Server Infos' });
        interaction.channel.send({ embeds: [embedServerInfo]});
        await interaction.reply(`Infos zu ${interaction.guild.name}`)
    }
}

//`Server Name: ${interaction.guild.name}\nMitgliederzahl: ${interaction.guild.memberCount},