const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDmilk === false) return message.reply(cmd_control.Smilk);



let member = message.mentions.members.first();
if(!member)
  return message.reply("Вы неуказали кому налить молока :(");
  let embed = new Discord.RichEmbed()
  .setTitle(`Подарок!`)
  .setColor(0xFFE4B5)
  .setDescription(`**${message.author.tag} Налил(a) молока котёнку ${member.user.tag} !**`)
  .setThumbnail(`http://www.1zoom.me/big2/77/240032-Dayane.jpg`)

message.channel.send({embed: embed});

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`milk`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                 
╚═══════════════════════════════════════════════════`));
}
 
module.exports.help = {
  name: "milk",
  info: "cmd"
}