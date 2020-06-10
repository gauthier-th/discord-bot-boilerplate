const Discord = require('discord.js');

const EventsManager = require('./events-manager');
const CommandsManager = require('./commands-manager');

class BotClient extends Discord.Client {
	/** @type {import('../base-config')} */
	#botConfig;
	/** @type {EventsManager} */
	#eventManager;
	/** @type {CommandsManager} */
	#commandManager;
	/** @type {import('./messages')} */
	#messages;
	/** @type {import('./bot-config')} */
	#config;

	/**
	 * @param {import('../base-config')} config 
	 * @param  {Discord.ClientOptions} options 
	 */
	constructor(config, options) {
		super(options);
		this.#botConfig = config;
		this.#eventManager = new EventsManager(this);
		this.#commandManager = new CommandsManager(this);
		this.#messages = require('./messages');
		this.#config = require('./bot-config');
		this.login();
	}

	get botConfig() {
		return this.#botConfig;
	}
	get prefix() {
		return this.#config.prefix;
	}
	get eventManager() {
		return this.#eventManager;
	}
	get commandManager() {
		return this.#commandManager;
	}
	get messages() {
		return this.#messages;
	}
	get config() {
		return this.#config;
	}

	login() {
		super.login(this.botConfig.token);
	}

}

module.exports = BotClient;