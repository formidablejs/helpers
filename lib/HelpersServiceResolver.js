Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var _$frameworkφ = require('@formidablejs/framework'/*$path$*/);

class HelpersServiceResolver extends _$frameworkφ.ServiceResolver {
	
	
	boot(){
		
		return Object.keys(_$frameworkφ.helpers).forEach(function(helper) {
			
			if (_$frameworkφ.helpers.isEmpty(globalThis[helper])) {
				
				globalThis[helper] = _$frameworkφ.helpers[helper];
				
				if (helper === 'dotNotation') { return globalThis.dot = _$frameworkφ.helpers[helper] };
			};
		});
	}
};
exports.default = HelpersServiceResolver;

