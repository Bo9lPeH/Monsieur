
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

exports.run = (sdr, message) => {
  if(cmd_control.CMDrestart === false) return message.reply(cmd_control.Srestart);
  if(message.author.id !== config.ownerID)
  return message.reply("Данная команда является системной и поэтому не доступно вам.");

  message.channel.send('Перезапуск...')
  .then(message => sdr.destroy())
    .then(() => sdr.login('NTA4MzU4ODA5MDc3Njc4MTAw.Dr-FpA.enSYqPJU-65ppPguZtwAmUhjttI'));

  
};

exports.help = {
  name: 'restart',
  info: 'cmd'
};


