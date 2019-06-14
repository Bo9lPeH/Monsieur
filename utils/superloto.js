const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const fs = require('fs')
const cmd_control = require("./../config/cmdconfig.json");
const money = require('discord-money');
const talkedRecently = new Set();

module.exports.run = async (sdr, message, args) => {
 //   if( message.guild.id != config.OfServer) return message.channel.send('Данная команда на этом сервере не доступна');

 if (talkedRecently.has(message.author.id)) {
    message.reply('Подождите 5 секунд, что бы команда снова работала')
} else {
    
    money.updateBal(message.author.id, -1000).then((i) => {
    const rando_imgs = [
     '3500', //x1 

     '2500', //x1

     '1000', //x1

     '500',
     '500',
     '500', //x3
     
     '250',
     '250',
     '250',
     '250',
     '250', //x5

     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',
     '45',

     


    ]
    var row = Math.floor(Math.random() * rando_imgs.length);

    if(rando_imgs[row] === '45'){
        money.updateBal(message.author.id, 45)
    }
   

    if(rando_imgs[row] === '3500'){
        money.updateBal(message.author.id, 3500)
    }
  

    if(rando_imgs[row] === '250'){
        money.updateBal(message.author.id, 250)
    }

    if(rando_imgs[row] === '500'){
        money.updateBal(message.author.id, 500)
    }

    if(rando_imgs[row] === '1000'){
        money.updateBal(message.author.id, 1000)
    }

    if(rando_imgs[row] === '2500'){
        money.updateBal(message.author.id, 2500)
    }
    

    message.channel.send({embed: {
        color: 0x00ff00,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        description: `Вы потратили 1000 💎 на игру в лото \n Вы Выиграли __${rando_imgs[row]}__ 💎 \n Ваш баланс составляет: ${i.money} 💎`
    }
    });

 });

 talkedRecently.add(message.author.id);
 setTimeout(() => {
   // Removes the user from the set after a minute
   talkedRecently.delete(message.author.id);
 }, 5000);
}
    
}


module.exports.help = {
    name: "su1233perloto",
    info: "cmd"
  }