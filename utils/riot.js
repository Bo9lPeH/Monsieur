const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDriot === false) return message.reply(cmd_control.Sriot);

let riotargs = args[0]

  if(riotargs == undefined) return message.channel.send(`ヽ༼ຈل͜ຈ༽ﾉ ` + `ヽ༼ຈل͜ຈ༽ﾉ`) 

  
  message.channel.send(`ヽ༼ຈل͜ຈ༽ﾉ **` + riotargs + `**ヽ༼ຈل͜ຈ༽ﾉ`) 




    console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`riot`)} 
║Канал: ${message.channel.name}     
║Сервер: ${message.guild.name}                
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "riot",
  info: "cmd"
}
