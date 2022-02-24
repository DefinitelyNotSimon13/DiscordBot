const client = require("../index.js");

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {

	console.log(`${interaction.user.tag} in #${interaction.channel.name}: Hat eine Interaktion getriggert.`)

	if (!interaction.isCommand()) return;

    const command  = client.commands.get(interaction.commandName);

    if (!command) return; 

    try {
        command.execute(interaction);
    } catch(error) {
        console.error(error);
        interaction.reply({ content: 'Es gab ein Problem beim ausführen des Commands!', ephemeral: true});
    }
	},
};

