const {
	EmbedBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
} = require("discord.js");

module.exports = {
	data: {
		name: `general`,
	},
	async execute(interaction, client) {
		interaction.deferUpdate({
			fetchReply: true,
		});
		const embed = new EmbedBuilder()
			.setTitle("General FAQ")
			.setColor(client.colour)
			.addFields(
				{
					name: "When is the next upload?",
					value: "never.",
				},
				{
					name: "What does p2r3 stand for?",
					value: 'Originally, the name was "1portal2runner3", which eventually became just "PortalRunner". In order to get a shorter and more ambiguous name, the first username was shortened to "1p2r3", which then became "p2r3" for easier spelling and pronunciation.',
				},
				{
					name: "Where can I submit video ideas?",
					value: "You don't. [p2r3.com/ideas](https://p2r3.com/ideas)."
				}
			);

		const goBack = new ButtonBuilder()
			.setCustomId("back")
			.setLabel("Go Back")
			.setStyle(ButtonStyle.Primary);

		interaction.message.edit({
			embeds: [embed],
			components: [new ActionRowBuilder().addComponents(goBack)],
		});
	},
};
