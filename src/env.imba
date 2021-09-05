const isString = require './isString'
const dotenv = require 'dotenv'

dotenv.config!

module.exports = def env key\string, default\any = null
	if !isString(key) then throw new TypeError 'Expected string'

	let output = process.env[key]

	if (output !== undefined && output !== null) && output.startsWith('${') && output.endsWith('}')
		output = process.env[output.slice(2, -1)]

	if output === undefined || output === null
		return default

	['true', 'false'].includes(output.toLowerCase!) ? output = JSON.parse(output) : output
