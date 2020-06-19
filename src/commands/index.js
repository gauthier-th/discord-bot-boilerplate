const fs = require('fs');
const modules = fs.readdirSync(__dirname);

/**
 * @param {import('../client')} client 
 * @returns {Object.<string, import('../command')>}
 */
module.exports.load = client => {
	const returns = {};
	for (let mod of modules) {
		if (mod === 'index.js')
			continue;

		const fileData = mod.split('.');
		const ext = fileData.splice(-1, 1)[0];
		if (ext !== 'js')
			continue;

		const name = fileData.join('');
		const command = new (require(__dirname + '/' + mod))(client);
		returns[command.name] = command;
	}
	return returns;
}