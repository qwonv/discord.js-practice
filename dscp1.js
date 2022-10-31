var Discord = require('discord.js');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('lets fuck');
  }
});

client.login('token');
