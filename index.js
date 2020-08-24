const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "NzQ3MjkzMDkwMzUxNTQ2NTQ5.X0Mw7A.vsUyLPdnGwUF4-YCeckX-vg9rqg";

bot.on("ready", () => {
    console.log("Bot is online!")
});

bot.on("message", msg=>{
    if(msg.content === "Hi there!"){
        msg.reply("Hi there, whats up?")
    }
})

bot.login(token);