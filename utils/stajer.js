const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if( message.guild.id != config.OfServer) return message.channel.send('Данная команда на этом сервере не доступна');

    if(!message.member.hasPermission("BAN_MEMBERS"))
return message.reply("У вас недостаточно прав.");


let role = message.guild.roles.find(r => r.id === "581913765126209546");

let member = message.mentions.members.first();
if(!member)
return message.reply("Нe указан ник!");

member.addRole(role).catch(console.error);

let reportschannel = message.guild.channels.find(`name`, "modlog");
if(!reportschannel) return message.channel.send("Не удалось найти канал отчетов.");

let warnEmbed = new Discord.RichEmbed()
.setTitle(`Принят на стажёрство`)
.setColor(0x00ff00)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Стажёр`, `${member.user.tag}`)
.addField(`Id Стажёра`, `${member.user.id}`)

message.channel.send(warnEmbed);
message.delete(2000)


let modEmbed = new Discord.RichEmbed()
.setTitle(`Bad Reputation (B.R.)`)
.setColor(0xff0000)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Id Администратора`, message.author.id)
.addField(`Стажёр`, `${member.user.tag}`)
.addField(`Id Стажёра`, `${member.user.id}`)
.addField(`Канал `, message.channel.name)
.addField("Время", message.createdAt)

reportschannel.send(modEmbed);

    console.log(GrayStyle(`
    
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`stajer ` + args[0])} 
║Канал: ${message.channel.name}                    
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "stajer",
  info: "cmd"
}