const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const cmd_control = require("./../config/cmdconfig.json");



module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDavatar === false) return message.reply(cmd_control.Savatar);
        if (!message.mentions.users.size) {
            return message.channel.send(`Ваш аватар: ${message.author.displayAvatarURL}`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username} - аватар: ${user.displayAvatarURL}`;
        });
    
        message.channel.send(avatarList);

        console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`avatar`)} 
║Канал: ${message.channel.name}      
║Сервер: ${message.guild.name}      
╚═══════════════════════════════════════════════════`));
    
}
 
module.exports.help = {
  name: "avatar",
  info: "cmd"
}