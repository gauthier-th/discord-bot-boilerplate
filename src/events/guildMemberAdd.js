/**
 * @param {import('../client')} client 
 * @param {import('discord.js').GuildMember} member 
 */
module.exports = (client, member) => {
	member.guild.systemChannel.send(client.messages.OTHER.GUILD_MEMBER_ADD(member.id, member.user.tag, member.nickname || member.user.username));
};