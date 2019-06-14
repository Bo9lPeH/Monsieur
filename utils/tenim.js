const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDtenim === false) return message.reply(cmd_control.Stenim);
let member = message.mentions.members.first();
if(!member)
  return message.reply("Вы неуказали кому налить молока :(");
  let embed = new Discord.RichEmbed()
  .setTitle(`Теним!`)
  .setColor(0xFF1493)
  .setDescription(`**${member.user.tag} сделала теним ${message.author.tag}!**`)
  .setThumbnail(`https://ci.phncdn.com/videos/201707/19/125082211/original/(m=eaAaGwObaaaa)(mh=4FTYa3VjTRCPIr6P)4.jpg`)

message.channel.send({embed: embed});

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`tenim`)} 
║Канал: ${message.channel.name}
║Сервер: ${message.guild.name}                  
╚═══════════════════════════════════════════════════`));
}
 
module.exports.help = {
  name: "tenim",
  info: "cmd"
}