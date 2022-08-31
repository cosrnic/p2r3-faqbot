const {
	EmbedBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
} = require("discord.js");

module.exports = {
	data: {
		name: `modding`,
	},
	async execute(interaction, client) {
		interaction.deferUpdate({
			fetchReply: true,
		});
		const embed = new EmbedBuilder()
			.setTitle("Modding FAQ")
			.setColor(client.colour)
			.addFields(
				{
					name: "How can I make Portal 2 mods?",
					value:
						"To get started with Portal 2 VScript modding, follow the resources in [this message](https://discord.com/channels/779452203341447188/933457653622009896/1010996937257930833).",
				},
				{
					name: "What is ppmod?",
					value:
						"ppmod is a VScript library for developing Portal 2 mods quickly. You can download ppmod [here](https://p2r3.com/ppmod).",
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
