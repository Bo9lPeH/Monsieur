const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDeagleoflenny === false) return message.reply(cmd_control.Seagleoflenny);
message.channel.send(
`
:＜￣｀ヽ、　　　　　　　／￣＞
　ゝ、　　＼　／⌒ヽ,ノ 　/´
　　　ゝ、　`+`（ ( ͡° ͜ʖ ͡°) ／
　　 　　>　 　 　,ノ
　　　　　∠_,,,/´”

`)
console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`eagleoflenny`)} 
║Канал: ${message.channel.name} 
║Сервер: ${message.guild.name}                   
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "eagleoflenny",
  info: "cmd"
}