const Command = require('../command.js');


class MemberCountCommand extends Command {
	#client;
	#name = "membercount";
	#aliases = ["mc", "nbmember"];
	#title = "Nombre d'utilisateurs sur le serveur";
	#description = "Affiche le nombre d'utilisateurs avec quelques détails sur le serveur";
	
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

module.exports = MemberCountCommand;