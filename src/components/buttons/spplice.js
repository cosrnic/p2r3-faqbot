const {
	EmbedBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
} = require("discord.js");

module.exports = {
	data: {
		name: `spplice`,
	},
	async execute(interaction, client) {
		interaction.deferUpdate({
			fetchReply: true,
		});
		const embed = new EmbedBuilder()
			.setTitle("Spplice FAQ")
			.setColor(client.colour)
			.addFields(
				{
					name: "What is Spplice?",
					value:
						"Spplice (Simple Portal 2 Package Loading Instrument for Convenient External modding) is a tool developed by PortalRunner to easily load mods into Portal 2.",
				},
				{
					name: "Where can I Download Spplice?",
					value:
						"You can download Spplice from [here](https://p2r3.com/spplice).",
				},
				{
					name: "Why does Spplice get flagged as a Virus?",
					value:
						"Windows defender often falsely flags programs that dont have a Microsoft Signature. Spplice does not have a Signature because it costs $400. If you don't trust Spplice, you can read the code and build it yourself on [GitHub](https://github.com/p2r3/spplice).",
				},
				{
					name: "Why does (mod name) not work?",
					value:
						"There can be many reasons why the mod doesn't work, before reporting anything, make sure you aren't loading a save and instead starting a new game or starting a game with the `map` command in the portal 2 console. If this still doesn' t work then ask in <#1014238521139155064>.",
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
