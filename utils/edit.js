const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");


module.exports.run = async (sdr, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Недостаточно пра вна использование команды!')

    let msgid = args[0]
    let content = args.slice(1).join(' ')

    if (!msgid || !content) return message.channel.send('Укажите все аргументы команды')

    await message.channel.fetchMessage(msgid)
    .then(async msg => {
        if (!msg) return message.channel.send('Сообщение не найдено')
        await msg.edit(content)
    }).catch(console.error)
    message.delete(1000)
}
 
module.exports.help = {
  name: "edit",
  info: "cmd"
}