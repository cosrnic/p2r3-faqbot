const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config();
const fs = require("fs");

module.exports = (client) => {
	client.handleCommands = async () => {
		const commandFolders = fs.readdirSync("./src/commands");
		for (const folder of commandFolders) {
			const commandFiles = fs
				.readdirSync(`./src/commands/${folder}`)
				.filter((file) => file.endsWith(".js"));

			const { commands, commandArray } = client;
			for (const file of commandFiles) {
				const command = require(`../../commands/${folder}/${file}`);
				commands.set(command.data.name, command);
				commandArray.push(command.data.toJSON());
				// console.log(command.data.name + " " + command.type);
				// console.log(JSON.parse(command.type));
				console.log(
					`Command: ${command.data.name} has passed through the handler`
				);
			}
		}
		const clientId = process.env.CLIENT_ID;
		const rest = new REST({ version: 9 }).setToken(process.env.TOKEN);
		try {
			console.log("Started refreshing application (/) commands.");

			await rest.put(Routes.applicationCommands(clientId), {
				body: client.commandArray,
			});

			console.log("Successfully reloaded application (/) commands.");
		} catch (error) {
			console.error(error);
		}
	};
};
