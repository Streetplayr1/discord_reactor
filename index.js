const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Online.");
})

client.on('message', message => {
    // Version 1.0.0: React to meme-off posts
    if (message.channel.id == '651494260134117376') {
        message.react(':updoot:692862052599070720');
        message.react(':downdoot:692862024241250334');
    }

    // Version 1.1.0: Mia cannot post her stream in general-chat
    var clientReply = "Mia, no one cares about your fucking stream. Message removed, move along. Message self-destructs in twenty seconds.";
    if (message.channel.id == '638581523498532896') {
        if (message.author.id == "147496803409985536") {
            if (message.content.toLowerCase().includes('icegamer')) {
                message.delete({ timeout: 2500 });
                message.channel.send(clientReply, { timeout: 2000})
                        .then(sentMessage => sentMessage.delete({ timeout: 20000}))
                        .catch(console.error);
            }
        }
    }

});

client.login(process.env.token);
