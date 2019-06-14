
const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDm8 === false) return message.reply(cmd_control.Sm8);

  message.delete(); 

  const embed = new Discord.RichEmbed()
  .setDescription(`** :ribbon: Женщины, девушки и девочки!  :ribbon: 

  :rose: Поздравляю Вас с Международным женским днём! :rose:
  
  Милые девушки, будьте всегда очаровательны и привлекательны. 
  Пусть тёплое весеннее солнышко греет вас, а любовь близких согревает ваши души. 
  Пусть на сердце будет по-весеннему тепло, а в доме царит аромат цветов. :chocolate_bar:
  
  С праздником! :heart: **`)
  .setImage(`https://media.discordapp.net/attachments/508710279845118003/553144840490057729/SFpu.gif`)
  .setColor(0x00AE86);

  message.channel.send({embed});
  

console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`lennygang`)} 
║Канал: ${message.channel.name}   
║Сервер: ${message.guild.name}                  
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "m8",
  info: "cmd"
}