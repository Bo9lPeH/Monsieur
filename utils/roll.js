const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDroll === false) return message.reply(cmd_control.Sroll);
    var answers = [
        'https://i.imgur.com/SUPSA2L.gif',
        'https://i.imgur.com/5wGCWPK.gif',
        'https://i.imgur.com/tY5YzNh.gif',
        'https://i.imgur.com/rqmlgqV.gif',
        'https://i.imgur.com/BxUESni.gif'
        
    ]
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    let author1 = message.author.username
    const embed1 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`_${author1} Катается по полу._`)
    .setImage(randomAnswer)
  
    message.channel.send(embed1)
  



    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`roll`)} 
║Канал: ${message.channel.name}
║Сервер: ${message.guild.name}                     
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "roll",
  info: "cmd"
}