
module.exports = function isClass(object){
	
	return typeof object === 'function' && /^\s*class\s+/.test(object.toString());
};
