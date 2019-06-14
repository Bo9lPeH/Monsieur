const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDchannelinfo === false) return message.reply(cmd_control.Schannelinfo);
    let embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle(`Информация о канале: ${message.channel.name}`)
    .setDescription("____________________________________________________________________")
    .addField("Название канала:", message.channel.name, true)
    .addField("Айди канала:", message.channel.id, true)
    .addField("Позиция", message.channel.position, true)
    .addField("тип", message.channel.type, true)
    .addField("NSFW ?", message.channel.nsfw, true)
    .addField("Заголовок", message.channel.recipients, true)
    .addField("Создан в", message.channel.createdAt, true)
    
    message.channel.send({embed: embed});

    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`channelinfo`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                
╚═══════════════════════════════════════════════════`));
    
}
 
module.exports.help = {
  name: "channelinfo",
  info: "cmd"
}