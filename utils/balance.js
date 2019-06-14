const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const fs = require('fs')
const cmd_control = require("./../config/cmdconfig.json");
const money = require('discord-money');

module.exports.run = async (sdr, message, args) => {
    //if( message.guild.id != config.OfServer) return message.channel.send('Данная команда на этом сервере не доступна');

    money.fetchBal(message.author.id).then((i) => {

      if(args[0] === undefined) {
    message.channel.send({embed: {
        color: 0x00ff00,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        description: `Ваш баланс составляет:\n ${i.money} 💎`
      }
    });
  }
 })



if(args[0] != undefined) {
  
  let member = message.mentions.members.first();
  if(!member)
  return message.reply("Нe указан ник!");
 
  money.fetchBal(member.id).then((i) => {
  message.channel.send({embed: {
      color: 0x00ff00,
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL
      },
      description: `Баланс ${member} состовляет: \n${i.money} 💎`
    }
  });

})


}




}

module.exports.help = {
    name: "balance",
    info: "cmd"
}