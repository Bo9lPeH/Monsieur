const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDchannelingenergy === false) return message.reply(cmd_control.Schannelingenergy);
message.channel.send("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)")

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`channelingenergy`)} 
║Канал: ${message.channel.name}    
║Сервер: ${message.guild.name}                
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "channelingenergy",
  info: "cmd"
}