const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDcatgirl === false) return message.reply(cmd_control.Scatgirl);
    var answers = [
        'https://cdn.nekos.life/neko/neko_421.jpg',
        'https://cdn.nekos.life/neko/neko_135.png', 
        'https://cdn.nekos.life/neko/neko_335.jpg', 
        'https://cdn.nekos.life/neko/neko_128.png',
        'https://cdn.nekos.life/neko/neko399.jpg',
        'https://cdn.nekos.life/neko/neko_363.jpg',
        'https://cdn.nekos.life/neko/neko250.jpg',
        'https://cdn.nekos.life/neko/neko320.jpg',
        'https://cdn.nekos.life/neko/neko_195.jpg',
        'https://cdn.nekos.life/neko/neko_221.jpeg',
        'https://cdn.nekos.life/neko/neko244.jpg',
        'https://cdn.nekos.life/neko/neko_031.jpg',
        'https://cdn.nekos.life/neko/neko370.jpeg',
        'https://cdn.nekos.life/neko/neko014.jpg',
        'https://cdn.nekos.life/neko/neko_067.jpg',
        'https://cdn.nekos.life/neko/neko032.jpg',
        'https://cdn.nekos.life/neko/neko_103.jpg',
        'https://cdn.nekos.life/neko/neko_056.jpeg',
        'https://cdn.nekos.life/neko/neko_202.png',
        'https://cdn.nekos.life/neko/neko_389.jpg',
        'https://cdn.nekos.life/neko/neko246.jpg',
        'https://cdn.nekos.life/neko/neko198.jpg',
        'https://cdn.nekos.life/neko/neko395.png',
        'https://cdn.nekos.life/neko/neko_393.png',
        'https://cdn.nekos.life/neko/neko_083.jpg',
        'https://cdn.nekos.life/neko/neko287.png',
        'https://cdn.nekos.life/neko/neko_339.jpg',
        'https://cdn.nekos.life/neko/neko275.jpeg',
        'https://cdn.nekos.life/neko/neko353.jpeg',
        'https://cdn.nekos.life/neko/neko_348.jpg',
        'https://cdn.nekos.life/neko/neko296.jpg',
        'https://cdn.nekos.life/neko/neko_070.jpg',
        'https://cdn.nekos.life/neko/neko_383.jpg',
        'https://cdn.nekos.life/neko/neko_259.jpeg',
        'https://cdn.nekos.life/neko/neko362.png',
        'https://cdn.nekos.life/neko/neko056.jpeg',
        'https://cdn.nekos.life/neko/neko_339.jpg',
        'https://cdn.nekos.life/neko/neko199.jpg',
        'https://cdn.nekos.life/neko/neko070.jpg',
        'https://cdn.nekos.life/neko/neko256.png',
        'https://cdn.nekos.life/neko/neko374.jpeg',
        'https://cdn.nekos.life/neko/neko065.jpg',
        'https://cdn.nekos.life/neko/neko390.jpeg',
        'https://cdn.nekos.life/neko/neko_234.png',
        'https://cdn.nekos.life/neko/neko347.png',
        'https://cdn.nekos.life/neko/neko257.png',
        'https://cdn.nekos.life/neko/neko_417.jpg',
        'https://cdn.nekos.life/neko/neko327.jpeg',
        'https://cdn.nekos.life/neko/neko219.jpg',
        'https://cdn.nekos.life/neko/neko_325.jpeg',
        'https://cdn.nekos.life/neko/neko405.jpeg',
        'https://cdn.nekos.life/neko/neko258.png',
        'https://cdn.nekos.life/neko/neko_185.jpg'
    ]
         
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
const embed2 = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setImage(randomAnswer)
  message.channel.send(embed2)





    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`catgirl`)} 
║Канал: ${message.channel.name} 
║Сервер: ${message.guild.name}                   
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "catgirl",
  info: "cmd"
}