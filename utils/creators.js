const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDdog === false) return message.reply(cmd_control.Sdog);

  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("У вас недостаточно прав.");

message.delete().catch(O_o=>{}); 
let embed = new Discord.RichEmbed()
.setTitle(`${config.prefix}restart - пересапуск ядра бота
${config.prefix}shutdown - завершение работы бота
${config.prefix}say_invise - написать от лица бота при не спалиться самому
${config.prefix}note - заметки`)
.setColor("#15f153")
.setFooter(`${sdr.user.username}`, `${sdr.user.avatarURL}`)

message.author.send({embed: embed});
console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`creators`)} 
║Канал: ${message.channel.name}   
║Сервер: ${message.guild.name}                 
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "creators",
  info: "cmd"
}