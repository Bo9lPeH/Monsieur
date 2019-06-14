const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

exports.run = (sdr, message) => {
  if(cmd_control.CMDshutdown === false) return message.reply(cmd_control.Sshutdown);
  
  if(message.author.id !== config.ownerID)
  return message.reply("Данная команда является системной и поэтому не доступно вам.");
  
  message.channel.send(`Заверщение работы`)
  .then(sdr.destroy())
};

exports.help = {
  name: 'shutdown',
  info: "cmd"
};