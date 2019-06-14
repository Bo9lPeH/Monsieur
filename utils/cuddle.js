const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDcuddle === false) return message.reply(cmd_control.Scuddle);
    var answers = [
        'https://cdn.weeb.sh/images/rkA6SU7w-.gif',
        'https://cdn.weeb.sh/images/r1XEOymib.gif', 
        'https://cdn.weeb.sh/images/r1VzDkmjW.gif',
        'https://cdn.weeb.sh/images/B1Qb88XvW.gif',
        'https://cdn.weeb.sh/images/HkZDkeamf.gif',
        'https://cdn.weeb.sh/images/r1A77CZbz.gif',
        'https://cdn.weeb.sh/images/BkTe8U7v-.gif',
        'https://cdn.weeb.sh/images/BkZCSI7Pb.gif',
        'https://cdn.weeb.sh/images/BywGX8caZ.gif',
        'https://cdn.weeb.sh/images/SkeHkUU7PW.gif',
        'https://cdn.weeb.sh/images/H1SfI8XwW.gif',
        'https://cdn.weeb.sh/images/SkeHkUU7PW.gif',
        'https://cdn.weeb.sh/images/rk2-UL7PW.gif',
        'https://cdn.weeb.sh/images/B1S1I87vZ.gif',
        'https://cdn.weeb.sh/images/SJceIU7wZ.gif',
        'https://cdn.weeb.sh/images/SJbGLUQwZ.gif',
        'https://cdn.weeb.sh/images/SJLkLImPb.gif',
        'https://cdn.weeb.sh/images/B1_e1gTXG.gif',
        'https://cdn.weeb.sh/images/r1Q0HImPZ.gif'
    ]
         
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не удалось найти пользователя.");


    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
const embed2 = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setDescription(`${message.author.tag} Просто обнял ${rUser}`)
  .setImage(randomAnswer)
  message.channel.send(embed2)





    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`Cuddle`)} 
║Канал: ${message.channel.name}    
║Сервер: ${message.guild.name}                
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "cuddle",
  info: "cmd"
}