const colors = {
	GREEN: 0x0ec06f,
	BLUE: 0x7289da,
	YELLOW: 0xfdd835,
	RED: 0xb71c1c
};
const defaultFooter = {
	text: "Discord Bot - By LordMorgoth#0875",
	icon_url: "https://media.discordapp.net/attachments/423518428314337302/720301083653701672/1833b207266a2318d333bd7c6d90ede7.png"
};

const messages = {
	COLORS: colors,
	DEFAULT_FOOTER: defaultFooter,
	ACTIVITY: "tester des trucs",
	COMMANDS: {
		HELP: (prefix, commands) => {
			return {
				embed: {
					color: colors.BLUE,
					title: "Aide du bot",
					description: Object.keys(commands).map(category => ":white_small_square: Catégorie " + category + "\n" + Object.values(commands[category]).map(cmd => "`" + prefix + cmd.name + "` : " + cmd.description).join('\n')).join('\n'),
					footer: defaultFooter,
					timestamp: new Date()
				}
			};
		},
		PING: ping => {
			return {
				embed: {
					color: colors.BLUE,
					title: 'Ping du bot',
					description: '`' + ping + '` ms',
					footer: defaultFooter
				}
			};
		},
		MEMBERCOUNT: (totalSize, online, bots, participants, waitingList, visitors) => {
			return {
				embed: {
					color: colors.BLUE,
					title: 'Membres du serveur',
					fields: [
						{
							name: 'Total',
							value: totalSize,
							inline: true
						},
						{
							name: 'En ligne',
							value: online,
							inline: true
						},
						{
							name: 'Bots',
							value: bots,
							inline: true
						}
					],
					footer: defaultFooter
				}
			};
		}
	},
	OTHER: {
		GUILD_MEMBER_ADD: (ID, tag, nickname) => {
			return {
				embed: {
					color: colors.YELLOW,
					title: "Un membre a rejoint",
					description: "Le membre <@" + ID + "> a rejoint le serveur.\nBienvenue !",
					footer: defaultFooter
				}
			};
		},
		GUILD_MEMBER_REMOVE: (ID, tag, nickname) => {
			return {
				embed: {
					color: colors.YELLOW,
					title: "Un membre a quitté",
					description: "Le membre <@" + ID + "> (`" + tag + "`) a quitté le serveur.\nSon pseudo était : `" + nickname + "`",
					footer: defaultFooter
				}
			};
		}
	}
};

module.exports = messages;