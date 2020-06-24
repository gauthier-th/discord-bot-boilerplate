const path = require('path');
const Command = require(path.join(process.cwd(), 'src', 'command.js'));

class PingCommand extends Command {
	_name = "ping";
	_aliases = ["latence"];
	_title = "Ping";
	_description = "Affiche la latence du bot";

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