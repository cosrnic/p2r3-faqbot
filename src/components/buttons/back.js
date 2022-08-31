const {
	EmbedBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
} = require("discord.js");

module.exports = {
	data: {
		name: `back`,
	},
	async execute(interaction, client) {
		interaction.deferUpdate({
			fetchReply: true,
		});
		const embed = new EmbedBuilder()
			.setTitle("FAQ")
			.setDescription("Please pick a topic with the buttons below!")
			.setColor(client.colour);

		const generalButton = new ButtonBuilder()
			.setCustomId("general")
			.setLabel("General")
			.setStyle(ButtonStyle.Primary);

		const moddingButton = new ButtonBuilder()
			.setCustomId("modding")
			.setLabel("Modding")
			.setStyle(ButtonStyle.Primary);

		const sppliceButton = new ButtonBuilder()
			.setCustomId("spplice")
			.setLabel("Spplice")
			.setStyle(ButtonStyle.Primary);

		await interaction.message.edit({
			embeds: [embed],
			components: [
				new ActionRowBuilder().addComponents(
					sppliceButton,
					generalButton,
					moddingButton
				),
			],
		});
	},
};
