const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDwombat === false) return message.reply(cmd_control.Swombat);
    var answers = [
    'https://i.imgur.com/v0t32Qp.png', 
    'https://i.imgur.com/2EY8v6x.png', 
    'https://i.imgur.com/OOxZlqS.png',
    'https://i.imgur.com/pz12xiA.png'
    ]
         
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setImage(randomAnswer)
  message.channel.send({embed});








    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`wombat`)} 
║Канал: ${message.channel.name}   
║Сервер: ${message.guild.name}                 
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "wombat",
  info: "cmd"
}