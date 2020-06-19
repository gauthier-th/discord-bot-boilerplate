const Discord = require('discord.js');

const EventsManager = require('./events-manager');
const CommandsManager = require('./commands-manager');

class BotClient extends Discord.Client {

	/**
	 * @param {import('../base-config.json')} config 
	 * @param  {Discord.ClientOptions} options 
	 */
	constructor(config, options) {
		super(options);
		this._botConfig = config;
		this._eventManager = new EventsManager(this);
		this._commandManager = new CommandsManager(this);
		this._messages = require('./messages');
		this._config = require('./bot-config');
		this.login();
	}

	get botConfig() {
		return this._botConfig;
	}
	get prefix() {
		return this._config.prefix;
	}
	get eventManager() {
		return this._eventManager;
	}
	get commandManager() {
		return this._commandManager;
	}
	get messages() {
		return this._messages;
	}
	get config() {
		return this._config;
	}

	login() {
		super.login(this.botConfig.token);
	}

}

module.exports = BotClient;