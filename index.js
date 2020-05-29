const Discord = require('discord.js');
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

    const EmbedIncorrect = new Discord.MessageEmbed()
    .setColor(0xFFC300)
    .setTitle("Incorrect Usage")
    .setDescription("Command not recognized. Please use !help for instructions on using the poll feature.");

    switch(args[0]) {

        case "help":
            const EmbedHelp = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Poll Guide")
            .setDescription("sb!create followed by the correct format will create a new poll\nsb!format for formatting help when using the create command\nsb!queue to view the current poll queue, ask Street if rearrange is needed\nsb!delete followed by the ID of the poll to remove it from the queue");

            message.channel.send(EmbedHelp);

            break;
        
        case "create":
            break;
        
        case "format":
            const EmbedFormat = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Poll Formatting")
            .setDescription("sb!create {question}, {reactions}, {answers}\nThe question MUST end with a question mark\nSeparate each reaction with a comma\nSeparate each answer option with a comma\nBrackets are required, separate each bracket with a comma\nTo delete a poll, use sb!delete {id}, brackets here are NOT required.");

            if (!args[1]) {
                message.channel.send(EmbedIncorrect);
            } else {
                message.channel.send(EmbedFormat);
            }

            break;

        case "queue":
            break;

        case "delete":
            break;

        break;

    }

});

client.login(process.env.token);
