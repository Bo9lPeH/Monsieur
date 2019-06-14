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

    if(message.author.id != config.ownerID)
    return message.reply("Команда только для создателей");

    let member = message.mentions.members.first();
    if(!member)
    return message.reply("Нe указан ник!");

    let one = args[1]
    if(!one)
    return message.reply("Не указана сумма перевода");

    money.updateBal(member.user.id, one)

    message.channel.send(`Баланс изменён на ${one}`)

    console.log(GrayStyle(`╔═══════════════════════log═════════════════════════
║${message.author.tag} - ${GreenStyle(`изменил баланс: ${member.user.tag} `)}
║Сервер: ${GreenStyle(`${message.guild.name}  `)} 
║Изменил на: ${GreenStyle(`${one}`)}      
╚═══════════════════════════════════════════════════`));

    });
}


module.exports.help = {
    name: "bc",
    info: "cmd"
}