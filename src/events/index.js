const fs = require('fs');
const modules = fs.readdirSync(__dirname);

/**
 * @type {Object.<string, any>}
 */
module.exports = {};
for (let mod of modules) {
	if (mod === 'index.js')
		continue;

	const fileData = mod.split('.');
	const ext = fileData.splice(-1, 1)[0];
	if (ext !== 'js')
		continue;

	const name = fileData.join('');
	module.exports[name] = require(__dirname + '/' + mod);
}