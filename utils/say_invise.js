const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDsay_invise === false) return message.reply(cmd_control.Ssay_invise);


        if(!message.member.hasPermission("ADMINISTRATOR"))
            return message.reply("У вас недостаточно прав.");
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        let embed = new Discord.RichEmbed()
        .setTitle(`${sayMessage}`)
        .setColor("#15f153")
        //.setFooter(`${sdr.user.username}`, `${sdr.user.avatarURL}`)

        message.channel.send({embed: embed});

        console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`sayn`)} 
║Канал: ${message.channel.name}
║Сообщение: ${sayMessage}  
║Сервер: ${message.guild.name}                  
╚═══════════════════════════════════════════════════`));

}
 
module.exports.help = {
  name: "sayi",
  info: "cmd"
};