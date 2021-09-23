const Discord = require('discord.js')
module.exports = {
  name: "pause",
  aliases: ["pa"],
  usage: "暫停音樂",
  description: "暫停你現在在聽的音樂",
  run: async (client, message, args) => { //指令名字和用途




		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();

      const embed1 = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription("我把音樂暫停了")
			return message.channel.send(embed1);
		}

    const embed2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("沒有正在播放的東西..")
		return message.channel.send(embed2);//指令的程式


  }
}