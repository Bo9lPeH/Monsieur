const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const fs = require('fs')
const cmd_control = require("./../config/cmdconfig.json");
const money = require('discord-money');
const sql = require("sqlite"); 

module.exports.run = async (sdr, message, args) => {
sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(rank => {
    if (!rank) return message.reply("Статистика недоступна.");
    let levelembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle('Уровень')
    .addField(`Level: ${rank.level}`, `XP: ${rank.points}`)
        
    message.channel.send(levelembed);

})

}

module.exports.help = {
    name: "rank",
    info: "cmd"
  }