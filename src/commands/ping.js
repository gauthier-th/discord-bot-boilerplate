const Command = require('../command.js');

class PingCommand extends Command {
	_name = "ping";
	_aliases = ["lantence"];
	_title = "Ping";
	_description = "Affiche de la latence du bot";

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
		message.channel.send(this.client.messages.COMMANDS.PING(this.client.ws.ping));
	}

}

module.exports = PingCommand;