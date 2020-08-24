const Discord = require('discord.js');
const bot = new Discord.Client();

var key = secrets.json.parse(botkey)

const token = key;

bot.on("ready", () => {
    console.log("Bot is online!")
});

bot.on("message", msg=>{
    if(msg.content === "Hi there!"){
        msg.reply("Hi there, whats up?")
    }
})

bot.login(token);