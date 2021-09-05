
const isString = require('./isString'/*$path$*/);
const dotenv = require('dotenv'/*$path$*/);

dotenv.config();

module.exports = /**
@param {string} key
@param {any} default
*/
function env(key,default$ = null){
	
	if (!(isString(key))) { throw new TypeError('Expected string') };
	
	let output = process.env[key];
	
	if ((output !== undefined && output !== null) && output.startsWith('${') && output.endsWith('}')) {
		
		output = process.env[output.slice(2,-1)];
	};
	
	if (output === undefined || output === null) {
		
		return default$;
	};
	
	return ['true','false'].includes(output.toLowerCase()) ? (output = JSON.parse(output)) : output;
};
