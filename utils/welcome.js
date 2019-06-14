const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDwelcome === false) return message.reply(cmd_control.Swelcome);
const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setImage("http://i.imgur.com/utPRe0e.gif")
  message.channel.send({embed});


    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`welcome`)} 
║Канал: ${message.channel.name}     
║Сервер: ${message.guild.name}               
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "welcome",
  info: "cmd"
}
