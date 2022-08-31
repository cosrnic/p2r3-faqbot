module.exports = {
	name: "messageCreate",
	async execute(message, client) {
		if (message.author.bot) return;
		if (message.content === "!ideas") {
			message.reply("https://p2r3.com/ideas");
		}
	},
};
