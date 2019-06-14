const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDflipcoin === false) return message.reply(cmd_control.Sflipcoin);


var answers = [      
    {files: ["./file_load/image/heads.png"]},
    {files: ["./file_load/image/tails.png"]} //50% - шанс выподнеие
]
         
var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    
message.channel.send(randomAnswer);

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`flipcoin`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                   
╚═══════════════════════════════════════════════════`));


}
 
module.exports.help = {
  name: "flipcoin",
  info: "cmd"
}