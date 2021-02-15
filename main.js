/*
	1. put secure data in env file and request via process.env
	2. remake on import, not require

*/

const Discord = require('discord.js')
const config = require('./app.config')

const client = new Discord.Client()

client.once('ready', () => {
	console.log('Bot connected.')
})

client.on('message', message => {
	if (message.channel.type === 'dm') {
		const resultObj = {}

		if (+message.content === 1) {
			return message.author.send(`Поздравляю! Ты записался в Храм Злат Киража!`)
		}
		/*
			1. Parse channels with available raids
			2. Show available raids for subscriber
			3. Ask:
				- character name (select and parse from nickname, also can parse from wowlogs later and autofill name-class)
				- character class
				- character specification
				-- custom questions like aq40 warlock tanking gear or tank fire resistance
				- accept discord rules
				- custom note
			4. Verify and sumbit
			5. Cancel sub before 4 hours
		*/

	} else {
		if (!message.content.includes(config.prefix)) {
			return message.author.send(`Не указан необходимый префикс для команды - **!!**`)
		}
		const args = message.content.slice(config.prefix.length).split(/ +/)
		const commandName = args.shift().toLowerCase()

		if (commandName === config.startCmd) {
			message.author.send(`Добро пожаловать в запись рейда! Выбери, куда ты хочешь записаться: <br/>1. Аку40 23.05.2020 15:00 <br/>2. БВЛ 23.05.2020 19:00 <br/>3. Норка Ониксии 24.05.2020 12:00`)
			message.delete({ timeout: 500 })
				.then(msg => console.log(`Deleted message from ${msg.author.username} after 5 seconds`))
		}
	}
})

client.login(config.token)