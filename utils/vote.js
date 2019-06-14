const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const talkedRecently = new Set();
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");


module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDvote === false) return message.reply(cmd_control.Svote);

    if (talkedRecently.has(message.author.id))
    return message.reply("Вы уже использовали команду, подождите некоторое время!");
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
    }, 25000);
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(`**Голосование** \n ${sayMessage}`)
    .then(function (message) {
    message.react("👍")
    message.react("👎")
    });
    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`vote`)} 
║Канал: ${message.channel.name}
║Сообщение: ${sayMessage}    
║Сервер: ${message.guild.name}               
╚═══════════════════════════════════════════════════`));
    
}
 
module.exports.help = {
  name: "vote",
  info: "cmd"
}