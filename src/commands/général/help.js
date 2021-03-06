const path = require('path');
const Command = require(path.join(process.cwd(), 'src', 'command.js'));
const { prefix } = require(path.join(process.cwd(), 'base-config.json'));

class HelpCommand extends Command {
	_name = "help";
	_aliases = ["aide", "helps", "aides"];
	_title = "Aide";
	_description = "Affiche de l'aide pour le bot";

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
		message.channel.send(this.client.messages.COMMANDS.HELP(prefix, this.client.commandManager.commands));
	}

}

module.exports = HelpCommand;