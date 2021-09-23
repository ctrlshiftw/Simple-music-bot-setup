const Discord = require("discord.js")
module.exports = {
  name: "queue",
  aliases: ["q"],
  usage: "播放列表",
  description: "查看現在的播放列表",
  run: async (client, message, args) => {//指令名字和用途




const embed1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("沒有正在播放的東西")
const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send(embed1);
		
    const embed = new Discord.MessageEmbed()
    .setTitle("__**播放列表:**__")
    .setDescription(`${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`)
    .addFields({
      name: "**正在播放:**",
      value: `${serverQueue.songs[0].title}`,
    })
    .setColor("GREEN")

    return message.channel.send(embed)//指令的程式



  }
}