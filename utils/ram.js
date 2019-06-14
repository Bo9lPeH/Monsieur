const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDram === false) return message.reply(cmd_control.Sram);
const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setImage("http://i.imgur.com/DYToB2e.jpg")
  message.channel.send({embed});


    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`ram`)} 
║Канал: ${message.channel.name}   
║Сервер: ${message.guild.name}                  
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "ram",
  info: "cmd"
}
