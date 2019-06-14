const Discord = require("discord.js");
const cmd_control = require("./../config/cmdconfig.json");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый

exports.run = (sdr, message, args) => {
  if(cmd_control.CMDembed === false) return message.reply(cmd_control.Sembed);
  message.delete();
  const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(0x00AE86);
    
  message.channel.send({embed});

  console.log(GrayStyle(`
  ╔═══════════════════════log═════════════════════════
  ║${message.author.tag} - использовал команду: ${GreenStyle(`cry`)} 
  ║Канал: ${message.channel.name}  
  ║Сервер: ${message.guild.name}                  
  ╚═══════════════════════════════════════════════════
  `))

};

module.exports.help = {
    name: "embed",
    info: "cmd"
}