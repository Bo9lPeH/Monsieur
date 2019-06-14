const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");


module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDkick === false) return message.reply(cmd_control.Skick);

if(!message.member.hasPermission("KICK_MEMBERS"))
return message.reply("У вас недостаточно прав.");

let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
return message.reply("Не указан участник или неправильно написан его ник!");

if(!member.kickable) 
return message.reply("Не могу кикнуть, так как его роль выше моей!");

let reason = args.slice(1).join(' ');
if(!reason) reason = "Причина не указана";

let reportschannel = message.guild.channels.find(`name`, "modlog");
if(!reportschannel) return message.channel.send("Не удалось найти канал отчетов.");

await member.kick(reason)
.catch(error => message.reply(`Я не могу кикнуть : ${error}`));

let warnEmbed = new Discord.RichEmbed()
.setTitle(`Кикнут!`)
.setColor(0xff0000)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Кикнут`, `${member.user.tag}`)
.addField(`Id кикнутого`, `${member.user.id}`)
.addField(`Причина`, reason)

message.channel.send(warnEmbed);
message.delete(2000)


let modEmbed = new Discord.RichEmbed()
.setTitle(`Кикнут!`)
.setColor(0xff0000)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Id Администратора`, message.author.id)
.addField(`Кикнут`, `${member.user.tag}`)
.addField(`Id Кикнутого`, `${member.user.id}`)
.addField(`Канал `, message.channel.name)
.addField("Время", message.createdAt)
.addField(`Причина`, reason)

reportschannel.send(modEmbed);

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - ${GreenStyle(`кикнул: ${member.user.tag} `)} 
║Сервер: ${GreenStyle(`${message.guild.name}  `)}
║Причина: ${GreenStyle(`${reason} `)}
╚═══════════════════════════════════════════════════`));

}

module.exports.help = {
  name: "kick",
  info: "cmd"
}