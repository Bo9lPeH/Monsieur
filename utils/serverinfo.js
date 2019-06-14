const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");


module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDserverinfo === false) return message.reply(cmd_control.Sserverinfo);
  let verifilv = ['Отсутствует', 'Низкий', 'Средний', 'Высокий', 'Очень высокий']

    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`serverinfo`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                    
╚═══════════════════════════════════════════════════`));
            let embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTitle(`Информация о сервере: ${message.guild}`)
            .setDescription("____________________________________________________________________")
            .addField("Название сервера:", message.guild.name, true)
            .addField("Айди:", message.guild.id, true)
            .addField("Создатель сервера:", message.guild.owner, true)
            .addField("Айди создателя:", message.guild.ownerID, true)
            .addField("Количество ролей:", message.guild.roles.size, true)
            .addField("Регион группы:", message.guild.region, true)
            .addField('Уровень проверки', verifilv[message.guild.verificationLevel], true)
            .addField('AFK Канал', message.guild.afkChannel.name, true)
            .addField('Смайликов', message.guild.emojis.size, true)
            .addField("Количество участников:", `${message.guild.presences.size} в сети\n${message.guild.memberCount} всего`, true)
            .addField('Каналы', `${message.guild.channels.filter(c => c.type == 'text').size} тестовых\n${message.guild.channels.filter(c => c.type == 'voice').size} голосовых`, true)
            .setThumbnail(message.guild.iconURL)
    
            message.channel.send({embed: embed});
    
}
 
module.exports.help = {
  name: "serverinfo",
  info: "cmd"
}