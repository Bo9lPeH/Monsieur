const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(message.author.id !== config.ownerID)
  return message.reply("Данная команда является системной и поэтому не доступно вам.");
const sayMessage = args.slice(2).join(' ');
const gild = args[0]
const chnn = args[1]

sdr.guilds.find(gld => gld.id === gild).channels.find(chn => chn.id === chnn).send(sayMessage)

        console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`say`)} 
║Канал: ${message.channel.name}
║Сервер: ${message.guild.name} 
║Сообщение: ${sayMessage}                   
╚═══════════════════════════════════════════════════`));

}
 
module.exports.help = {
  name: "say.admin",
  info: "cmd"
}