const { SlashCommandBuilder } = require('@discordjs/builders');

async function execute(interaction) {
    await interaction.reply({ content: 'Rong!', components: [] });
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ring')
        .setDescription('Replies with Rong!'),
    execute
};
