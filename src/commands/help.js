const Command = require('../command.js');

class HelpCommand extends Command {
	#client;
	#name = "help";
	#aliases = ["aide", "helps", "aides"];
	#title = "Aide";
	#description = "Affiche de l'aide pour le bot";

	/** @param {import('./client')} client */
	constructor(client) {
		super(client);
	}

	/**
	 * @param {string} command 
	 * @param {string[]} args 
	 * @param {import('discord.js').Message} message 
	 */
	exec(command, args, message) {
		message.channel.send(this.client.messages.COMMANDS.HELP());
	}

}

module.exports = HelpCommand;