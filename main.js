const { Client } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
});

client.login('NjgwMTU3OTQ0MjE3OTkzMzcx.Xk8big.b1A24KZwoX1EY2tsQBW0RhMwJHI');