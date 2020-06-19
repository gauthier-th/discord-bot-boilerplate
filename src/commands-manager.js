class CommandsManager {

	/**
	 * @param {import('./client')} client 
	 */
	constructor(client) {
		this._client = client;
		this._commands = require('./commands').load(client);
	}

	get client() {
		return this._client;
	}
	get commands() {
		return this._commands;
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