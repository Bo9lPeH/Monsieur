const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {

if(cmd_control.CMDserverlist === false) return message.reply(cmd_control.Sserverlist);
    var list = sdr.guilds.array().sort();
    message.reply(`Кол-во серверов: ${sdr.guilds.size}. \n Их название: ${list}`)

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`Serverlist`)} 
║Канал: ${message.channel.name}    
║Сервер: ${message.guild.name}              
╚═══════════════════════════════════════════════════`));
}
 
module.exports.help = {
  name: "serverlist",
  info: "cmd"
}



