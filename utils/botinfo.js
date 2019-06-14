const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");
const os = require('os-utils');

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDbotinfo === false) return message.reply(cmd_control.Sbotinfo);
    let totalSeconds = (sdr.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${hours} часов, ${minutes} минут`;


    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`botinfo`)} 
║Канал: ${message.channel.name}   
║Сервер: ${message.guild.name}                 
╚═══════════════════════════════════════════════════`));
  let embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(sdr.user.username, sdr.user.avatarURL)
    .addField(`• Создатель бота`, `Bo9lPeH#7278`, true)
    .addField(`• Имя бота`, sdr.user.username, true)
    .addField(`• Бот включён`, uptime, true)
    .addField(`• Node`, process.version, true)
    .addField(`• Discord.js`, `v${Discord.version}`, true)
    .addField(`• Версия бота`, config.version, true)
    .addField(`• Участников`, sdr.users.size, true)
    .addField(`• Серверов`, sdr.guilds.size, true)
    .addField(`• Кол-во команд бота:`, `${config.command}`, true)
    .addField(`• Язык програмирование:`, "Discord.js", true)
    .addField(`• Создан в`, sdr.user.createdAt, true)
   // .addField(`• Система`, `**Платформа:** ${os.platform()} \n **Ram:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/8'000.00 MB \n **CPU:** ${os.cpuUsage()}`)
    

  message.channel.send({embed: embed});
    
}
 
module.exports.help = {
  name: "botinfo",
  info: "cmd"
}