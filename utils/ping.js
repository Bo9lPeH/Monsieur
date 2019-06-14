const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");


module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDping === false) return message.reply(cmd_control.Sping);

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`ping`)} 
║Канал: ${message.channel.name}    
║Сервер: ${message.guild.name}                 
╚═══════════════════════════════════════════════════`));
const m = await message.channel.send("Вычесление...");
m.edit(`| Задержка(пинг) - ${m.createdTimestamp - message.createdTimestamp} мс.| Задержка API - ${Math.round(sdr.ping)} мс. |`);


}
 
module.exports.help = {
  name: "ping",
  info: "cmd"
}