const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const fs = require('fs')
const cmd_control = require("./../config/cmdconfig.json");
const money = require('discord-money');

module.exports.run = async (sdr, message, args) => {
    money.fetchBal(message.author.id).then((i) => {
    let member = message.mentions.members.first();
    if(!member)
    return message.reply("Нe указан ник!");

    let one = args[1]
    if(!one)
    return message.reply("Не указана сумма перевода");

    if(one = `-${one}`) 
    return message.reply(`Минус запрещён в переводе`)

    if(i.money < one) 
    return message.reply("Недастаточно гемов(💎) на ващем счету")

    money.updateBal(message.author.id, -one)

    money.updateBal(member.user.id, one)

    message.channel.send({embed: {
        color: 0x00ff00,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        description: `Вы перевели ${one} 💎 пользователю ${member} \n Ваш баланс составляет: ${i.money} 💎`
    }
    });
    

    console.log(GrayStyle(`╔═══════════════════════log═════════════════════════
║${message.author.tag} - ${GreenStyle(`Перевёл: ${member.user.tag} `)}
║Сервер: ${GreenStyle(`${message.guild.name}  `)} 
║Сумма перевода : ${GreenStyle(`${one}`)}      
╚═══════════════════════════════════════════════════`));
});
}


module.exports.help = {
    name: "1transfer",
    info: "cmd"
}