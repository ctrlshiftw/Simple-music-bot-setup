const Discord = require("discord.js")
module.exports = {
  name: "stop",
  aliases: ["st"],
  usage: "停止播放",
  description: "停止所有的音樂",
  run: async (client, message, args) => { //指令名字和用途

    
    const embed1 = new Discord.MessageEmbed()
    .setDescription("你要在一個語音頻道裡面")
    .setColor("RED")

		const { channel } = message.member.voice;
		if (!channel) return message.channel.send(embed1);
		const serverQueue = message.client.queue.get(message.guild.id);
    const embed2 = new Discord.MessageEmbed()
    .setDescription("沒有可以給你停下的音樂")
    .setColor("RED")
		if (!serverQueue) return message.channel.send(embed2);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('我把音樂停下來了');

const stopped = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription("音樂結束了..")

message.channel.send(stopped) //指令的程式

  }
}