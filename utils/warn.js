const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");


module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDwarn === false) return message.reply(cmd_control.Swarn);

    if(!message.member.hasPermission("MUTE_MEMBERS"))
    return message.reply("У вас недостаточно прав.");

    let member = message.mentions.members.first();
    if(!member)
    return message.reply("Нe указан ник!");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Причина не указана";

    let reportschannel = message.guild.channels.find(x => x.name === "modlog");
    if(!reportschannel) return;
    
//  message.channel.send("Не удалось найти канал отчетов, создате канал с названием 'modlog' ");

    let warnEmbed = new Discord.RichEmbed()
    .setTitle(`Предупреждение!`)
    .setColor(0xff9900)
    .addField(`Администратор`, `${message.author.tag}`)
    .addField(`Предупреждён`, `${member.user.tag}`)
    .addField(`Id предупреждённого`, `${member.user.id}`)
    .addField(`Причина`, reason)

    message.channel.send(warnEmbed);
    message.delete(2000)

    

    let modEmbed = new Discord.RichEmbed()
    .setTitle(`Предупреждение!`)
    .setColor(0xff9900)
    .addField(`Администратор`, `${message.author.tag}`)
    .addField(`Id Администратора`, message.author.id)
    .addField(`Предупреждён`, `${member.user.tag}`)
    .addField(`Id предупреждённого`, `${member.user.id}`)
    .addField(`Канал `, message.channel.name)
    .addField("Время", message.createdAt)
    .addField(`Причина`, reason)

    reportschannel.send(modEmbed);

    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - ${GreenStyle(`Предупредил: ${member.user.tag} `)}
║Сервер: ${GreenStyle(`${message.guild.name}  `)} 
║Причина: ${GreenStyle(`${reason} `)}      
╚═══════════════════════════════════════════════════`));

}
module.exports.help = {
  name: "warn",
  info: "cmd"
}