const Discord = require("discord.js");
const ms = require("ms");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый



module.exports.run = async (sdr, message, args) => {

  //!tempmute @user 1s/m/h/d



let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tomute) return message.reply("Не удалось найти пользователя.  ");
let muterole = message.guild.roles.find(`name`, "muted");

    await(tomute.removeRole(muterole.id)).catch(console.error);

// tomute.removeRoles(muterole.id); //Adds suspended Role
let reportschannel = message.guild.channels.find(`name`, "modlog");
if(!reportschannel) return message.channel.send("Не удалось найти канал отчетов.");

let reason = args.slice(1).join(' ');
if(!reason) reason = "Причина не указана";

let muteEmbed = new Discord.RichEmbed()
.setTitle(`Размучен!`)
.setColor(0x008000)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Размучен`, `<@${tomute.id}>`)
.addField(`Id Размученного`, `${tomute.id}`)
.addField(`Причина`, `${reason}`)

message.channel.send(muteEmbed);
message.delete(2000)

let modEmbed = new Discord.RichEmbed()
.setTitle(`Размучен`)
.setColor(0x008000)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Id Администратора`, message.author.id)
.addField(`Размучен`, `<@${tomute.id}>}`)
.addField(`Id Размутченого`, `${tomute.id}`)
.addField(`Канал `, message.channel.name)
.addField("Время", message.createdAt)
.addField(`Причина`, `${reason}`)

reportschannel.send(modEmbed);


console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - ${GreenStyle(`Размутил: ${tomute.id} `)} 
║Сервер: ${GreenStyle(`${message.guild.name}  `)}
║Причина: ${GreenStyle(reason)}
╚═══════════════════════════════════════════════════`));


}

module.exports.help = {
  name: "unmute",
  info: "cmd"
}