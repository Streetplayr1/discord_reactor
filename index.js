const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Online.");
})

client.on('message', message => {
    if (message.channel.id == '651494260134117376') {
        await message.react(':updoot:692862052599070720');
        await message.react(':downdoot:692862024241250334');
    }

/*
   if (message.channel.id == '638581523498532896' || message.channel.id == '676135196894036000') {
       if (message.content.find("twitch.tv/icegamer") != -1) {
           //message.delete();
           message.channel.send("Mia, no one gives a fuck about your stream, the link is now forbidden on this server. Move along...");
       }
    }
    */
});

client.login(process.env.token);