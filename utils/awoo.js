const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDawoo === false) return message.reply(cmd_control.Sawoo);
    var answers = [
        'https://cdn.weeb.sh/images/B1yvBbLYW.gif',
        'https://cdn.weeb.sh/images/BJl_QXBQDW.gif', 
        'https://cdn.weeb.sh/images/BJlV7SQvW.gif',
        'https://cdn.weeb.sh/images/Hk4VXHmPb.gif',
        'https://cdn.weeb.sh/images/BJZfMrXwb.gif',
        'https://cdn.weeb.sh/images/BkOQ7HmwW.gif'
    ]
         
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
const embed2 = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setDescription(`AWOOOOOOOOO`)
  .setImage(randomAnswer)
  message.channel.send(embed2)





    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`awoo`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                  
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "awoo",
  info: "cmd"
}