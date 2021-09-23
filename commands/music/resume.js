const Discord = require('discord.js')
module.exports = {
  name: "resume",
  aliases: ["re"],
  usage: "播放音樂",
  description: "重新播放暫停的音樂",
  run: async (client, message, args) => { //指令名字和用途


    const embed1 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription("音樂給你暫停了")

		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send(embed1);
		}

    const embed2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("沒有正在播放的東西")
		return message.channel.send(embed2); //指令的程式


  }
}