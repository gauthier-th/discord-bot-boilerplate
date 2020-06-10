const Command = require('../command.js');

class HelpCommand extends Command {

	/** @param {import('./client')} client */
	constructor(client) {
		super(client);
		this.name = "help";
		this.aliases = ["aide", "helps", "aides"];
		this.title = "Aide";
		this.description = "Affiche de l'aide pour le bot";
	}

	/**
	 * @param {string} command 
	 * @param {string[]} args 
	 * @param {import('discord.js').Message} message 
	 */
	exec(command, args, message) {
		let online = 0;
		let bots = 0;
		for (let member of message.guild.members.cache.values()) {
			if (member.user.bot)
				bots++;
			if (member.user.presence.status != "offline")
				online++;
		}
		
		message.channel.send(this.client.messages.COMMANDS.MEMBERCOUNT(message.guild.members.cache.size, online, bots));
	}

}

module.exports = HelpCommand;