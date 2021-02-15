'use strict'

const fs = require("fs")
const TOKEN = fs.readFileSync(".token").toString()

module.exports = {
	prefix: "!!",
	token: TOKEN,
	startCmd: 'иду'
}