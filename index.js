const discord = require('discord.js');
const fs = require('fs');
const express = require('express')
const client = new discord.Client({
	autoReconnect: true,
	partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "MESSAGE", "USER"]
});
const config = require('./config.json')
const keepAlive = require('./server.js')
keepAlive();
//機器人前期準備
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.queue = new Map();
//信息準備
client.on('ready', () => {
  console.log('I am ready')
  client.user.setUsername("機器人名字")
  client.user.setPresence({ activity: {name:""},status: "online"}) 
});
//機器人名字和狀態


const Categories = ["music"]; //指令(不要動)

Categories.forEach(async function(Category) { //
    fs.readdir(`./commands/${Category}`, async function(error, files) {
      if (error) throw new Error(`Error In Command - Command Handler\n${error}`);
      files.forEach(async function(file) {
        if (!file.endsWith(".js")) throw new Error(`A File Does Not Ends With .js - Command Handler!`);
        let command = require(`./commands/${Category}/${file}`);
   
        if (!command.name || !command.aliases) throw new Error(`No Command Name & Command Aliases In A File - Command Handler!`);
        if (command.name) client.commands.set(command.name, command);
        if (command.aliases) command.aliases.forEach(aliase => client.aliases.set(aliase, command.name));
        if (command.aliases.length === 0) command.aliases = null;
      });
    });
});

client.on("message", async message => { //指令(這個也不要動)

  let Prefix = config.prefix

  if (message.author.bot || !message.guild || message.webhookID) return;

  if (!message.content.startsWith(Prefix)) return;

  let args = message.content.slice(Prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return console.log(`No Command Found!`);



  if (command) {
    command.run(client, message, args);
  };
});


//機器人種籽
client.login(process.env.token)