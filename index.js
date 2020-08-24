const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "No no no! No seeing my key";

bot.on("ready", () => {
    console.log("Bot is online!")
});

bot.on("message", msg=>{
    if(msg.content === "Hi there!"){
        msg.reply("Hi there, whats up?")
    }
});

bot.login(token);