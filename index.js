const { Discord, RichEmbed } = require('discord.js');
const client = new Discord.Client();

const PREFIX = "sb!";

client.on('ready', () => {
    console.log("Online.");
})

client.on('message', message => {
    // Version 1.0.0: React to meme-off posts that are not pinned messages
    if (message.channel.id == '651494260134117376') {
        if (message.type === "PINS_ADD") {
            message.channel.send("Congratulations! Please check #announcements for details on the next meme-off.", { timeout: 2000})
                .catch(console.error);
        } else {
            if (!message.author.bot) {
                message.react(':updoot:692862052599070720');
                message.react(':downdoot:692862024241250334');
            }
        }
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

    // Version 1.2.0: Create a queue of polls entered in by the staff
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {

        case "help":
            const Embed = new Discord.RichEmbed()
            .setColor(0xFFC300)
            .setTitle("Initiate Poll")
            .setDescription("sb!poll to create a new poll, sb!format for formatting help, and sb!queue to view the queue.");

            message.channel.send(Embed);
        break;

    }

});

client.login(process.env.token);
