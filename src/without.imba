const isArray = require './isArray'
const isObject = require './isObject'

module.exports = def without object\Object, exclude\string[]
	if !isObject(object) then throw new TypeError 'Expected object'

	if !isArray(exclude) then throw new TypeError 'Expected array'

	const output = {}

	Object.keys(object).forEach do(key)
		if !exclude.includes(key) then Object.assign(output, {
			[ key ] : object[key]
		})

	output
