const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const moment = require("moment");
const cmd_control = require("./../config/cmdconfig.json");

const status = {
  online: "В сети",
  idle: "Не активный",
  dnd: "Не беспокоить",
  offline: "Не в сети/Под невидимкой"
};


module.exports.run = async (sdr, message, msg, args) => {
  if(cmd_control.CMDuserinfo === false) return message.reply(cmd_control.Suserinfo);
  

  const member = message.mentions.members.first();
  if (!member) return message.reply("Укажите пользователя");
  let bot;
  if (member.user.bot === true) {
    bot = "Да";
  } else {
    bot = "Нет";
  }
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setThumbnail(`${member.user.displayAvatarURL}`)
    .setAuthor(`${member.user.tag}`, `${member.user.avatarURL}`)
    .addField("Пвсевданим:", `${member.nickname !== null ? `Пвсевданим: ${member.nickname}` : "Нет псевданима"}`, true)
    .addField("Бот?", `${bot}`, true)
    //.addField("Сервер", `${bot}`, true)
    .addField("Айди", `${member.id}`, true)
    .addField("Статус", `${status[member.user.presence.status]}`, true)
    .addField("Играет?", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Не играет в данный момент"}`, true)
    .addField("Роли", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Нет ролей"}`, true)
    .addField("Присоединился в", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Создан в", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

    message.channel.send({
    embed
  });










/*

  let embed1 = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setDescription("Информация пользователя")
  .setColor("#9B59B6")
  .setThumbnail(`${message.author.avatarURL}`)
  .addField("Ник", message.author.tag)
  .addField("ID", message.author.id)
  .addField("Играет", `${message.user.game ? `${message.user.game.name}` : "Не играет в данный момент"}`, true)
  .addField("Роли", `${message.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Нет ролей"}`, true)
  .addField("Присоединился в", `${moment.utc(message.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
  .addField("Создан в", `${moment.utc(message.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

let embeduser = args[0]
if(embeduser === undefined) return   message.channel.send(embed1);

let member = member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let embed2 = new Discord.RichEmbed()
.setAuthor(member.author.username)
.setDescription('Информация об пользователе')


message.channel.send(embed2);

*/








    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`userinfo`)} 
║Канал: ${message.channel.name}   
║Сервер: ${message.guild.name}                 
╚═══════════════════════════════════════════════════`));
    
}


 
module.exports.help = {
  name: "userinfo",
  info: "cmd"
}