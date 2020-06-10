class Command {

	/** @param {import('./client')} client */
	constructor(client) {
		this.client = client;
		this.name = "";
		/** @type {string[]} */
		this.aliases = [];
		this.title = "";
		this.description = "";
	}

	/**
	 * @param {string} command 
	 * @param {string[]} args 
	 * @param {import('discord.js').Message} message 
	 */
	exec(command, args, message) {}

}

module.exports = Command;