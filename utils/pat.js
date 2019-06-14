const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDpat === false) return message.reply(cmd_control.Spat);
    var answers = [
        'https://i.imgur.com/lAQ69xW.png',
        'https://i.imgur.com/jM0x0nf.jpg',
        'https://i.imgur.com/qQPUUpk.jpg',
        'https://i.imgur.com/KbkBzyA.gif',
        'https://i.imgur.com/uy6uSnv.jpg',
        'https://i.imgur.com/JKsykmS.jpg',
        'https://i.imgur.com/RF301YT.jpg',
        'https://i.imgur.com/BbY0wuV.jpg',
        'https://i.imgur.com/t6jN5CN.jpg',
        'https://i.imgur.com/5Cb7uGV.jpg',
        'https://i.imgur.com/XJCmEBQ.jpg',
        'https://i.imgur.com/XJCmEBQ.jpg',
        'https://i.imgur.com/k1H6Tze.jpg',
        'https://i.imgur.com/5Gl5jJZ.gif',
        'https://i.imgur.com/7zyGtwl.gif',
        'https://i.imgur.com/POqbCmY.png',
        'https://i.imgur.com/MMtEnZp.jpg'
        
    ]
         
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    
    const embed1 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setImage(randomAnswer)
    
    let embedargs = args.join(" ")
    if(embedargs == undefined) return message.channel.send(embed1);
    const embed2 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`**Погладил** ` + embedargs)
    .setImage(randomAnswer)

  message.channel.send(embed2)


    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`pat`)} 
║Канал: ${message.channel.name}   
║Сервер: ${message.guild.name}                  
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "pat",
  info: "cmd"
}