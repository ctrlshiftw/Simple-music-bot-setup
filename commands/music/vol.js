const Discord = require('discord.js');
module.exports = {
  name: "volume",
  aliases: ["vol"],
  usage: "vol <數字>",
  description: "換現在音樂的聲音大小",
  run: async (client, message, args) => { //指令名字和用途



const embed1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("你要在一個語音頻道裡面")






		const { channel } = message.member.voice;
		if (!channel) return message.channel.send(embed1);
		const serverQueue = message.client.queue.get(message.guild.id);
    const embed2 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("沒有正在播放的東西")
		if (!serverQueue) return message.channel.send(embed2);




    const embed3 = new Discord.MessageEmbed()
.setDescription(`現在的聲音大小是: **${serverQueue.volume}**`)

		if (!args[0]) return message.channel.send(embed3);
		serverQueue.volume = args[0]; // eslint-disable-line
    
    if (parseInt(args[0], 10) > 10 || typeof(parseInt(args[0], 10)) !== "number") return message.channel.send(embed3) 

     const embed4 = new Discord.MessageEmbed()
     .setColor("GREEN")
.setDescription(`我把聲音調到: **${args[0]}**`)


		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
		return message.channel.send(embed4); //指令的車鞥是


  }
}