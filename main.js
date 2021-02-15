const Discord = require("discord.js")
const fs = require("fs")

const client = new Discord.Client()
const token = fs.readFileSync(".token").toString()

client.once("ready", () => {
	console.log("Ready!");
})

client.login(token)