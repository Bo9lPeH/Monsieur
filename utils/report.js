const Discord = require("discord.js");
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDreport === false) return message.reply(cmd_control.Sreport);

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Не удалось найти пользователя.");
    
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "Причина не указана";

  let reportschannel = message.guild.channels.find(`name`, "modlog");
  if(!reportschannel) return message.channel.send("Не удалось найти канал отчетов. Канал должен называться 'modlog' ");

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Подозреваймый", `${rUser} \n ID: ${rUser.id}`)
  .addField("Зарепортил", `${message.author} \n ID: ${message.author.id}`)
  .addField("Канал репорта", message.channel)
  .addField("Время", message.createdAt)
  .addField("Причина", reason);

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);


}
 
module.exports.help = {
  name: "report",
  info: "cmd"
}