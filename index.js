const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Online.");
})

client.on('message', message => {
    if (message.channel.id == '651494260134117376') {
        message.react(':updoot:692862052599070720');
        message.react(':downdoot:692862024241250334');
    }

    /*if ((message.channel.id == '638581523498532896') || (message.channel.id == '676135196894036000') && (message.author == 'Street#5403') && message.content.find("https://www.twitch.tv/icegamer" != -1)) {
        message.delete(1000);
        message.channel.send("Mia, no one gives a fuck about your stream, the link is now forbidden on this server. Move along...");
    }
    */

   if ((message.channel.id == '638581523498532896') && (message.author == 'Street#5403')) {
        message.delete(1000);
        message.channel.send("Mia, no one gives a fuck about your stream, the link is now forbidden on this server. Move along...");
    }
});

client.login(process.env.token);