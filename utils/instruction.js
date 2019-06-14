const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDinstruction === false) return message.reply(cmd_control.Sinstruction);
    const embed2 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`**Для того что бы Бот писал логи о киках/банах и что бы работала команда ${config.prefix}report нужно __создать канала с названием 'modlog'__ (без пробелов, запятых и т.п.)**`)

  message.channel.send(embed2)

    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`instruction`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                   
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "instruction",
  info: "cmd"
}
