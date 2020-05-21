const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Online.");
})

client.on('message', message => {
    // Version 1.0: React to meme-off posts
    if (message.channel.id == '651494260134117376') {
        message.react(':updoot:692862052599070720');
        message.react(':downdoot:692862024241250334');
    }

    // Version 1.1: Mia cannot post her stream
    if (message.channel.id == '638581523498532896') {
        if (message.author.id == "216467577268862976") {
            if (message.content.toLowerCase().trim().includes('icegamer')) {
                message.delete({ timeout: 1000})
                    .then(message.channel.send("Mia, no one cares about your fucking stream. Message removed, move along. Message self-destructs in thirty seconds."))
                    .then(message.delete({ timeout: 30000 }));
            }
        }
    }

});

client.login(process.env.token);
console.log();