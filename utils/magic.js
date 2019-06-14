const Discord        = require("discord.js");    
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDmagic === false) return message.reply(cmd_control.Smagic);

const embed2 = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setDescription(`（ ͡° ͜ʖ ͡°)つ━☆・。
⊂　　 ノ 　　　・゜+.
     しーＪ　　　°。+ ´¨)
  　　　　　　　　　.· ´¸.·´¨) ¸.·*¨)
  　　　　　　　　　　(¸.·´ (¸.·' ☆ ABRA KADABRA...`)
  

let embedargs = args.join(" ")
  if(embedargs == undefined) return message.channel.send(embed2);


  const embed1 = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setDescription(`（ ͡° ͜ʖ ͡°)つ━☆・。
 ⊂　　 ノ 　　　・゜+.
     しーＪ　　　°。+ ´¨)
  　　　　　　　　　.· ´¸.·´¨) ¸.·*¨)
  　　　　　　　　　　(¸.·´ (¸.·' ☆ ${embedargs}
  `)

  message.channel.send(embed1)





    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`magic`)} 
║Канал: ${message.channel.name}     
║Сервер: ${message.guild.name}                
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "magic",
  info: "cmd"
}