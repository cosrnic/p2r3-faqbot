const {
	SlashCommandBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
} = require("discord.js");
let recentlyUsed = false;

module.exports = {
	data: new SlashCommandBuilder()
		.setName("faq")
		.setDescription("Returns an FAQ"),
	async execute(interaction, client) {
		// const embed = new EmbedBuilder()
		// 	.setTitle("FAQ")
		// 	.setColor(client.colour)
		// 	.addFields(
		// 		{
		// 			name: "What is Spplice?",
		// 			value:
		// 				"Spplice (Simple Portal 2 Package Loading Instrument for Convenient External modding) is a tool developed by PortalRunner to easily load mods into Portal 2.",
		// 		},
		// 		{
		// 			name: "Where can I Download Spplice?",
		// 			value:
		// 				"You can download Spplice from [here](https://p2r3.com/spplice)",
		// 		},
		// 		{
		// 			name: "Why does Spplice get flagged as a Virus?",
		// 			value:
		// 				"Windows defender often false flags programs that dont have a Microsoft Signature, Spplice does not have a Signature because it costs $400, if you still dont trust Spplice then you can read the code for yourself on the [GitHub](https://github.com/p2r3/spplice)",
		// 		},
		// 		{
		// 			name: "How do I get started with Portal 2 Modding?",
		// 			value:
		// 				"To start Portal 2 Modding you should read [this message](https://discord.com/channels/779452203341447188/933457653622009896/1010996937257930833)",
		// 		}
		// 	);

		if (recentlyUsed) {
			await interaction.deferReply({
				fetchReply: true,
				ephemeral: true,
			});
			const embed = new EmbedBuilder()
				.setTitle("FAQ")
				.setDescription(
					"Please wait at least 20 seconds before repeating the command."
				)
				.setColor(client.errColour);
			await interaction.editReply({
				embeds: [embed],
				ephemeral: true,
			});
		} else {
			await interaction.deferReply({
				fetchReply: true,
				ephemeral: false,
			});
			recentlyUsed = true;
			setTimeout(() => {
				recentlyUsed = false;
			}, 20000);
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

			await interaction.editReply({
				embeds: [embed],
				components: [
					new ActionRowBuilder().addComponents(
						sppliceButton,
						generalButton,
						moddingButton
					),
				],
			});
		}
	},
};
