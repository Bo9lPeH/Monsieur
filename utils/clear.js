const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (v, message, args) => {
  if(cmd_control.CMDclear === false) return message.reply(cmd_control.Sclear);
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("У вас недостаточно прав.");

        const deleteCount = parseInt(args[0], 10);
        
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Укажите количество от 2 до 100 для количества удаляемых сообщений.");
        
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Не удалось удалить сообщение из-за: ${error}`));

        message.channel.send(` ${deleteCount} сообщение(ий) на этом канале успешно удалены`)
          console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`clear`)} 
║Сервер: ${message.guild.name}         
╚═══════════════════════════════════════════════════`));
    
}
 
module.exports.help = {
  name: "clear",
  info: "cmd"
}