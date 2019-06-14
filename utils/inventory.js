const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const cmd_control = require("./../config/cmdconfig.json");
const config = require("./../config/bconfig.json");
const money = require('discord-money');
const rank = require('rank')
const sql                 = require("sqlite");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDinventory === false) return message.reply(cmd_control.Sinventory);
  if( message.guild.id != config.OfServer) return message.reply(`К сожелению, данный плагин доступен лишь на сервере создателя.`)
  
  money.fetchBal(message.author.id).then((i) => { 
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(rank => {
      if (!rank) return message.reply("Инветарь не доступен из-за нулевого уровня");
    const inventoryEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Ваш инвентарь')
    .setColor(0x00AE86)
    .addField('Баланс', `${i.money} 💎`, true)
    .addField('Уровень', `Level: ${rank.level} \nXP: ${rank.points}`, true)
    .addField('Содержимое инвенторя', 'none' )
    
    message.channel.send({embed: inventoryEmbed})
  }) 
  })


  // const i = '330335977300033538'
  // '445132700425256960' 
  // '411836476364554240'
  // '413374833246601226'
  // '406896484823334915'
  // '339721594060406787'
  // '351765806100643841'
  // '261498953256796160'
  // '486965142307733504'
  // '440921538326298625'
  // '366513709704544256'
  // '272637904465952769'
  // '330335977300033538'
  // ''
  // ''
  // ''
  // ''
  // ''
  // ''
  // '';

  // if(message.member.user.id != i) return message.reply('Вашь инвентарь пуст или не доступен.');

  // if(message.member.user.id === '330335977300033538') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄
  //   **Слот 3:** Админская игрушка 👔`)
  // };

  // if(message.member.user.id === '445132700425256960') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄`)
  // };

  // if(message.member.user.id === '411836476364554240') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Новогодняя игрушка 2019 🎄 `)
  // };

  // if(message.member.user.id === '413374833246601226') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Новогодняя игрушка 2019 🎄 `)
  // };

  // if(message.member.user.id === '406896484823334915') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄
  //   **Слот 3:** Админская игрушка 👔`)
  // };
  
  // if(message.member.user.id === '339721594060406787') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄`)
  // };
  
  // if(message.member.user.id === '351765806100643841') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄`)
  // };
  
  // if(message.member.user.id === '261498953256796160') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄`)
  // };
  
  // if(message.member.user.id === '486965142307733504') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄`)
  // };
  
  // if(message.member.user.id === '440921538326298625') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄`)
  // };
  
  // if(message.member.user.id === '366513709704544256') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄`)
  // };
  
  // if(message.member.user.id === '272637904465952769') {
  //   message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
  //   **Слот 1:** Хеллоуинская игрушка 2018 🎃 
  //   **Слот 2:** Новогодняя игрушка 2019 🎄`)
  // };
  /*
  if(message.member.user.id === '330335977300033538') {
    message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
    **Слот 1:** Хеллоуинская игрушка 2018 🎃 
    **Слот 2:** Новогодняя игрушка 2019 🎄
     `)
  };
  
  if(message.member.user.id === '330335977300033538') {
    message.channel.send(`**${message.author.tag}, Ваш инвентрь:**
    **Слот 1:** 
    **Слот 2:**`)
  };
  
  */

 console.log(GrayStyle(`
 ╔═══════════════════════log═════════════════════════
 ║${message.author.tag} - использовал команду: ${GreenStyle(`inventory`)} 
 ║Канал: ${message.channel.name}  
 ║Сервер: ${message.guild.name}                  
 ╚═══════════════════════════════════════════════════
 `))
}
 
module.exports.help = {
  name: "inventory",
  info: "cmd"
}