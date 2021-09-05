
const isNumber = require('./isNumber'/*$path$*/);
const crypto = require('crypto'/*$path$*/);

module.exports = /**
@param {Number} length
*/
function strRandom(length = 8){
	
	if (!(isNumber(length))) {
		
		throw new TypeError('length must be a number');
	};
	
	if (length % 2 !== 0) {
		
		throw new RangeError('length must be an even number');
	};
	
	return crypto.randomBytes(length / 2).toString('hex');
};
