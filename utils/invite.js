const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDinvite === false) return message.reply(cmd_control.Sinvite);

message.channel.send({embed: {
color: 0x4B0082,
author: {
  name: sdr.user.username,
  icon_url: sdr.user.avatarURL
},
description: "Для приглашения меня на свой сервер, пожалуйста, используйте одну из следующих ссылок:",
fields: [
  {
    name: "Полные права",
    value: "**(рекомендуется)** [Приглосить | <Клик>](https://discordapp.com/oauth2/authorize?client_id=461913317502353422&scope=bot&permissions=2146958847)  "
  },
  {
    name: "Минимальное права",
    value: " **(Не рекомендуется)** [Приглосить | <Клик>](https://discordapp.com/oauth2/authorize?client_id=461913317502353422&scope=bot&permissions=8)  "
  }
]
}
});
console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`invite`)} 
║Канал: ${message.channel.name}    
║Сервер: ${message.guild.name}                 
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "invite",
  info: "cmd"
}