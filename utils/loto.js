const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const fs = require('fs')
const cmd_control = require("./../config/cmdconfig.json");
const money = require('discord-money');
const talkedRecently = new Set();

const rando_imgs = [
    '2500', //x1 

    '1000', //x1

    '500', //x1

    '250',
    '250',
    '250', //x3
    
    '100',
    '100',
    '100',
    '100',
    '100', //x5

    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25',
    '25' //x35
]

module.exports.run = async (sdr, message, args) => {
 if (talkedRecently.has(message.author.id)) {
     message.reply('Подождите 5 секунд, что бы команда снова работала')
} else {    
    money.fetchBal(message.author.id).then((i) => {
    if(i.money < "100") 
        return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

    money.updateBal(message.author.id, -100).then((i) => {
    let row = Math.floor(Math.random() * rando_imgs.length);

    let reason = args.join(" ") 
    if(!reason) reason = "Не использовано";

    message.channel.send({embed: {
        color: 0x00ff00,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        description: `Вы потратили 100 💎 на игру в лото \n Вы Выиграли __${rando_imgs[row]}__ 💎 \n Ваш баланс составляет: ${i.money} 💎`,
        fields: [{
            name: "Толесман участника в лото",
            value: reason
        }]
    }
    });
    
    if(rando_imgs[row] === '25'){
        money.updateBal(message.author.id, 25)
    }
   

    if(rando_imgs[row] === '100'){
        money.updateBal(message.author.id, 100)
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
  });

 talkedRecently.add(message.author.id);
 setTimeout(() => {
   // Removes the user from the set after a minute
   talkedRecently.delete(message.author.id);
 }, 5000);
})
}
}


module.exports.help = {
    name: "lo435245to",
    info: "cmd"
  }