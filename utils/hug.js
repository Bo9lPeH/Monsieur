const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDhug === false) return message.reply(cmd_control.Shug);
    var answers = [
    'https://i.imgur.com/Vz95HoQ.gif',
    'https://i.imgur.com/3zGl5on.gif',
    'https://i.imgur.com/2CZIaWW.gif',
    'https://i.imgur.com/OTtWXbs.gif'
  ]
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    
         const embed1 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setImage(randomAnswer)
    
    let embedargs = args.join(" ")
    if(embedargs == undefined) return message.channel.send(embed1);
    const embed2 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`**_Обнял_** ` + embedargs)
    .setImage(randomAnswer)

  message.channel.send(embed2)

    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`Hug`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                   
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "hug",
  info: "cmd"
}
