const Discord = require("discord.js")

module.exports = {
  name: "skip",
  aliases: ["s"],
  usage: "跳過",
  description: "跳過現在的音樂",
  run: async (client, message, args) => { //指令名字和用途


	const { channel } = message.member.voice;
  const embed1 = new Discord.MessageEmbed()
  .setDescription("你要在一個語音頻道裡面")
  .setColor("RED")
		if (!channel) return message.channel.send(embed1);
		const serverQueue = message.client.queue.get(message.guild.id);
    const embed2 = new Discord.MessageEmbed()
    .setDescription('沒有正在播放的東西')
    .setColor("RED")
		if (!serverQueue) return message.channel.send(embed2);

		serverQueue.connection.dispatcher.end('已經跳過了'); //指令的程式

  }
}