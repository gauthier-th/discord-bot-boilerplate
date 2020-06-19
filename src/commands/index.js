const fs = require('fs');
const subdirs = fs.readdirSync(__dirname);

/**
 * @param {import('../client')} client 
 * @returns {Object.<string, import('../command')>}
 */
module.exports.load = client => {
	const returns = {};
	for (let subdir of subdirs) {
		if (subdir === 'index.js')
			continue;

		returns[subdir] = require(__dirname + '/' + subdir).load(client, subdir);
	}
	return returns;
}