class CommandsManager {
	/** @type {import('./client')} */
	#client
	/** @type {Object.<string, import('./command')>} */
	#commands = {};

	/**
	 * @param {import('./client')} client 
	 */
	constructor(client) {
		this.#client = client;
		this.#commands = require('./commands').load(client);
	}

	get client() {
		return this.#client;
	}
	get commands() {
		return this.#commands;
	}

	/**
	 * @param {string} command 
	 * @param {string[]} args 
	 * @param {import('discord.js').Message} message 
	 * @returns {boolean}
	 */
	execCommand(command, args, message) {
		if (command.toLowerCase().trim() in this.commands) {
			this.commands[command].exec(command, args, message);
			return true;
		}
		else {
			for (let cmd of Object.values(this.commands)) {
				if (cmd.aliases.map(alias => alias.toLowerCase().trim()).includes(command.toLowerCase().trim())) {
					cmd.exec(command, args, message);
					return true;
				}
			}
			return false;
		}
	}

}

module.exports = CommandsManager;