const Discord = require("discord.js");
const ms = require("ms");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый



module.exports.run = async (sdr, message, args) => {

  //!tempmute @user 1s/m/h/d



let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tomute) return message.reply("Не удалось найти пользователя.  ");
if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Не могу замутить");
let muterole = message.guild.roles.find(`name`, "muted");


if(!muterole){
try{
muterole = await message.guild.createRole({
    name: "muted",
    color: "#000000",
    permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
});
});
}catch(e){
console.log(e.stack);
}
}
  
let mutetime = args[1];
if(!mutetime) return message.reply("Вы не указали время!");

let reportschannel = message.guild.channels.find(`name`, "modlog");
if(!reportschannel) return message.channel.send("Не удалось найти канал отчетов.");

let reason = args.slice(2).join(' ');
if(!reason) reason = "Причина не указана";

  await(tomute.addRole(muterole.id));

let muteEmbed = new Discord.RichEmbed()
.setTitle(`Замутчен!`)
.setColor(0xff0000)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Замутчен`, `<@${tomute.id}>`)
.addField(`Id Замутченого`, `${tomute.id}`)
.addField(`Время мута`, `${ms(ms(mutetime))}`)
.addField(`Причина`, `${reason}`)

message.channel.send(muteEmbed);
message.delete(2000)

let modEmbed = new Discord.RichEmbed()
.setTitle(`Замутчен!`)
.setColor(0xff0000)
.addField(`Администратор`, `${message.author.tag}`)
.addField(`Id Администратора`, message.author.id)
.addField(`Замутчен`, `<@${tomute.id}>}`)
.addField(`Id Замутченого`, `${tomute.id}`)
.addField(`Канал `, message.channel.name)
.addField("Время", message.createdAt)
.addField(`Время мута`, `${ms(ms(mutetime))}`)
.addField(`Причина`, `${reason}`)

reportschannel.send(modEmbed);

setTimeout(function(){
  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> Время вышло, мут снят. Можете дальше продолжать общение!`);
}, ms(mutetime));



console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - ${GreenStyle(`Замутил: ${tomute.id} `)} 
║Сервер: ${GreenStyle(`${message.guild.name}  `)}
║Время мута: ${GreenStyle(`${ms(ms(mutetime))} `)}
║Причина: ${GreenStyle(reason)}
╚═══════════════════════════════════════════════════`));


}

module.exports.help = {
  name: "tempmute",
  info: "cmd"
}