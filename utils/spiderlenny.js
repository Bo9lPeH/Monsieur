
const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDspiderlenny === false) return message.reply(cmd_control.Sspidorlenny);
message.channel.send("/╲/╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/╱\ ")

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`spiderlenny`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                    
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "spiderlenny",
  info: "cmd"
}

