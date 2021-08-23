
const isArray = require('./isArray'/*$path$*/);
const isObject = require('./isObject'/*$path$*/);

module.exports = /**
@param {Object} object
@param {string[]} exclude
*/
function without(object,exclude){
	
	if (!(isObject(object))) { throw new TypeError('Expected object') };
	
	if (!(isArray(exclude))) { throw new TypeError('Expected array') };
	
	const output = {};
	
	Object.keys(object).forEach(function(key) {
		
		if (!(exclude.includes(key))) { return Object.assign(output,{
			[key]: object[key]
		}) };
	});
	
	return output;
};
