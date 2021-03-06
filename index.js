'use strict';

const {exec} = require('child_process');
const pify = require('pify');

const f = function (cb) {
	exec('ps -e | grep -E \'^.* kded(4|5)$\'', (error, stdout) => {
		if (error) {
			cb(null, false);
		}
		if ((stdout).length > 0) {
			cb(null, true);
		}
		cb(null, false);
	});
};

module.exports = pify(f);
