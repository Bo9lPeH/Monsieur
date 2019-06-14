const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDban === false) return message.reply(cmd_control.Sban);

if(!message.member.hasPermission("BAN_MEMBERS"))
return message.reply("У вас недостаточно прав.");

let member = message.mentions.members.first();
if(!member)
return message.reply("Не указан участник или неправильно написан его ник!");

if(!member.bannable) 
return message.reply("Не могу забанить, так как его роль выше моей!");

let reason = args.slice(1).join(' ');
if(!reason) reason = "Причина не указана";

let reportschannel = message.guild.channels.find(`name`, "modlog");
if(!reportschannel) return null //message.channel.send("Не удалось найти канал отчетов.");

await member.ban(reason)
.catch(error => message.reply(`Я не могу забанить : ${error}`));

let warnEmbed = new Discord.RichEmbed()
.setTitle(`Забанен!`)
.setColor(0xff0000)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Забанен`, `${member.user.tag}`)
.addField(`Id Забаненого`, `${member.user.id}`)
.addField(`Причина`, reason)

message.channel.send(warnEmbed);
message.delete(2000)


let modEmbed = new Discord.RichEmbed()
.setTitle(`Забанен!`)
.setColor(0xff0000)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Id Администратора`, message.author.id)
.addField(`Забанен`, `${member.user.tag}`)
.addField(`Id Забаненого`, `${member.user.id}`)
.addField(`Канал `, message.channel.name)
.addField("Время", message.createdAt)
.addField(`Причина`, reason)

reportschannel.send(modEmbed);

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - ${GreenStyle(`забанил: ${member.user.tag} `)} 
║Сервер: ${GreenStyle(`${message.guild.name}  `)}
║Причина: ${GreenStyle(`${reason} `)}
╚═══════════════════════════════════════════════════`));

}
module.exports.help = {
  name: "ban",
  info: "cmd"
}