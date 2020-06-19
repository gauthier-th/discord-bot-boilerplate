class Command {

	/**
	 * @param {import('./client')} client 
	 * @param {string} category 
	 **/
	constructor(client, category) {
		this._client = client;
		this._category = category;
	}

	/**
	 * Get client
	 * @returns {import('./client')}
	 **/
	get client() {
		return this._client;
	}
	/**
	 * Get command category
	 * @returns {string}
	 **/
	get category() {
		return this._category;
	}
	/**
	 * Get command name
	 * @returns {string}
	 **/
	get name() {
		return this._name;
	}
	/**
	 * Get command aliases
	 * @returns {string[]}
	 **/
	get aliases() {
		return this._aliases;
	}
	/**
	 * Get command title
	 * @returns {string}
	 **/
	get title() {
		return this._title;
	}
	/**
	 * Get command description
	 * @returns {string}
	 **/
	get description() {
		return this._description;
	}

	/**
	 * Execute the command
	 * @param {string} command 
	 * @param {string[]} args 
	 * @param {import('discord.js').Message} message 
	 */
	exec(command, args, message) {}

}

module.exports = Command;