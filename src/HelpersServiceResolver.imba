import { ServiceResolver, helpers } from '@formidablejs/framework'

export default class HelpersServiceResolver < ServiceResolver

	def boot
		Object.keys(helpers).forEach do(helper)
			if helpers.isEmpty(global[helper])
				global[helper] = helpers[helper]

				if helper === 'dotNotation' then global['dot'] = helpers[helper]

