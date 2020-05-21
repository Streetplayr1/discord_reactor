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

    if (message.channel.id == '638581523498532896') {
        if (message.content.toLowerCase().trim().includes('icegamer')) {
            message.delete()
                .then(message.channel.send("Mia, no one cares about your fucking stream. Message removed, move along. Message self-destructs in sixty seconds."));
        }
    }

});

client.login(process.env.token);
console.log();