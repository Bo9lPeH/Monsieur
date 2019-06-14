const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDslap === false) return message.reply(cmd_control.Sslap);
var answers = [
    'https://cdn.weeb.sh/images/rJ4141YDZ.gif',
    'https://cdn.weeb.sh/images/ry2tWxcyf.gif', 
    'https://cdn.weeb.sh/images/Byjqm1tDW.gif',
    'https://cdn.weeb.sh/images/Hkw1VkYP-.gif',
    'https://cdn.weeb.sh/images/rknn7Jtv-.gif',
    'https://cdn.weeb.sh/images/Bkj-oaV0Z.gif',
    'https://cdn.weeb.sh/images/ryv3myFDZ.gif',
    'https://cdn.weeb.sh/images/HkA6mJFP-.gif',
    'https://cdn.weeb.sh/images/rJrnXJYPb.gif',
    'https://cdn.weeb.sh/images/SJx7M0Ft-.gif',
    'https://cdn.weeb.sh/images/H1n57yYP-.gif',
    'https://cdn.weeb.sh/images/rJ4141YDZ.gif',
    'https://cdn.weeb.sh/images/rJgTQ1tvb.gif',
    'https://cdn.weeb.sh/images/SkNimyKvZ.gif',
    'https://cdn.weeb.sh/images/HkJ6-e91z.gif',
    'https://cdn.weeb.sh/images/BJ8o71tD-.gif',
    'https://cdn.weeb.sh/images/Byjqm1tDW.gif',
    'https://cdn.weeb.sh/images/SJlkNkFwb.gif',
    'https://cdn.weeb.sh/images/r1dc7yFvZ.gif',
    'https://cdn.weeb.sh/images/HkK2mkYPZ.gif',
    'https://cdn.weeb.sh/images/SJx7M0Ft-.gif',
    'https://cdn.weeb.sh/images/rkaqm1twZ.gif',
    'https://cdn.weeb.sh/images/S1ylxxc1M.gif',
    'https://cdn.weeb.sh/images/HJKpm1twW.gif',
    'https://cdn.weeb.sh/images/r1lxO_QIf.gif',
    'https://cdn.weeb.sh/images/SkxGcmJKPb.gif'
]
         

let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!rUser) return message.channel.send("Не удалось найти пользователя.");

var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

const embed2 = new Discord.RichEmbed()
.setColor(0x00AE86)
.setDescription(`${message.author.tag} просто начал шлёпать ${rUser}`)
.setImage(randomAnswer)

message.channel.send(embed2)





    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`slap`)} 
║Канал: ${message.channel.name}   
║Сервер: ${message.guild.name}                   
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "slap",
  info: "cmd"
}
