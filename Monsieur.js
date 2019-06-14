const Discord = require("discord.js");
const sdr = new Discord.Client();

sdr.on("ready", () => {
    console.log("Я включился");
});

sdr.on("message", message => {
    if(message.content === "/ping") {
        message.reply('pong');
    }
});

sdr.login(process.env.BOT_TOKEN);
