const isNumber = require './isNumber'
const crypto = require 'crypto'

module.exports = def strRandom length\Number = 8
	if !isNumber length
		throw new TypeError 'length must be a number'

	if length % 2 !== 0
		throw new RangeError 'length must be an even number'

	crypto.randomBytes(length / 2).toString('hex')
