class EventsManager {

	/**
	 * @param {import('./client')} client 
	 */
	constructor(client) {
		this._client = client;
		this._events = require('./events');
		handle(this);
	}

	get client() {
		return this._client;
	}
	get events() {
		return this._events;
	}

}

/**
 * @param {EventsManager} eventManager 
 */
function handle(eventManager) {
	eventManager.client.on('ready', () => {
		console.log("[BOT] Ready!");
		eventManager.client.user.setActivity(eventManager.client.messages.ACTIVITY);
	});
	eventManager.client.on('message', message => {
		if (message.content.trim().startsWith(eventManager.client.botConfig.prefix)) {
			const args = message.content.trim().split(/\s+/gi);
			const command = args.splice(0, 1)[0].substr(eventManager.client.botConfig.prefix.length);
			eventManager.client.commandManager.execCommand(command, args, message);
		}
	});
	for (let event of Object.keys(eventManager.events)) {
		eventManager.client.on(event, (...args) => {
			eventManager.events[event](eventManager.client, ...args);
		});
	}
}

module.exports = EventsManager;