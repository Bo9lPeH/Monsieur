const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDcry === false) return message.reply(cmd_control.Scry);
    var answers = [
        'https://cdn.weeb.sh/images/rJfB787PW.gif',
        'https://cdn.weeb.sh/images/rk8DrJhcf.gif',
        'https://cdn.weeb.sh/images/BJJkFTN0b.gif',
        'https://cdn.weeb.sh/images/r1itBRFTZ.gif',
        'https://cdn.weeb.sh/images/HyiGQUmPb.gif',
        'https://cdn.weeb.sh/images/rJUbkgqyf.gif',
        'https://cdn.weeb.sh/images/HkxLXIQvb.gif',
        'https://cdn.weeb.sh/images/HymMXUQPW.gif',
        'https://cdn.weeb.sh/images/BJf41e51z.gif',
        'https://cdn.weeb.sh/images/rknUmIXD-.gif',
    ]
         
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
const embed2 = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setDescription(`${message.author.tag} Начал плакать ;(`)
  .setImage(randomAnswer)
  message.channel.send(embed2)





    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`cry`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                  
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "cry",
  info: "cmd"
}