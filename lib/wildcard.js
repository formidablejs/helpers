
const isString = require('./isString'/*$path$*/);

module.exports = /**
@param {string} value
@param {string} match
*/
function wildcard(value,match){
	
	if (!(isString(value))) {
		
		throw new TypeError('value must be a string');
	};
	
	if (!(isString(match))) {
		
		throw new TypeError('match must be a string');
	};
	
	const escapeRegex = function(value) { return value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"); };
	
	return new RegExp("^" + match.split("*").map(escapeRegex).join(".*") + "$").test(value);
};
