const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDsay === false) return message.reply(cmd_control.Ssay);

        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        let embed = new Discord.RichEmbed()
        .setTitle(`${sayMessage}`)
        .setColor("#15f153")
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL}`)

        message.channel.send({embed: embed});

        console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`say`)} 
║Канал: ${message.channel.name}
║Сервер: ${message.guild.name} 
║Сообщение: ${sayMessage}                   
╚═══════════════════════════════════════════════════`));

}
 
module.exports.help = {
  name: "say",
  info: "cmd"
}