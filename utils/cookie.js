const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDcookie === false) return message.reply(cmd_control.Scookie);
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Вы неуказали кому подарить печеньку :(");
      let embed = new Discord.RichEmbed()
      .setThumbnail(`http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Apps-preferences-web-browser-cookies-icon.png`)
      .setTitle(`Подарок!`)
      .setColor(0xff9500)
      .setDescription(`${message.author.tag} **Подарил печеньку :3** ${member.user.tag} !`)
    
    message.channel.send({embed: embed});
    
    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`cookie`)} 
║Канал: ${message.channel.name}    
║Сервер: ${message.guild.name}              
╚═══════════════════════════════════════════════════`));
}
 
module.exports.help = {
  name: "cookie",
  info: "cmd"
}