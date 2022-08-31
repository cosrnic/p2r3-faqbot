require("dotenv").config();
const {
	Client,
	Collection,
	GatewayIntentBits,
	EmbedBuilder,
	PermissionFlagsBits,
} = require("discord.js");
const fs = require("fs");

const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] });
client.commands = new Collection();
// client.commandCategory = [];
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.commandArray = [];
client.colour = "4DB5FF";
client.errColour = "FF4F4F";

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
	const functionFiles = fs
		.readdirSync(`./src/functions/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of functionFiles)
		require(`./functions/${folder}/${file}`)(client);
}

module.exports = client;

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(process.env.TOKEN);
