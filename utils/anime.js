const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDanime === false) return message.reply(cmd_control.Sanime);
const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setImage("http://i.imgur.com/93VahIh.png")
  message.channel.send({embed});


    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`anime (даун)`)} 
║Канал: ${message.channel.name}
║Сервер: ${message.guild.name}                    
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "anime",
  info: "cmd"
}
