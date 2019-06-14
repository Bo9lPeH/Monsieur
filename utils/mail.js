const fs = require('fs'); //патч на формат fs
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(cmd_control.CMDmail === false) return message.reply(cmd_control.Smail); 
const randomchislo = Math.floor(100000 + Math.random() * 900000)
const sayw = args.join(" ");
var path = `./file_load/mail/${message.author.tag} $${randomchislo}.txt`,
buffer = new Buffer(`${sayw}`);

fs.open(path, 'w', function(err, fd) {
if (err) {
    throw 'error opening file: ' + err;
}

fs.write(fd, buffer, 0, buffer.length, null, function(err) {
    if (err) throw 'error writing file: ' + err;
    fs.close(fd, function() {
        console.log(message.author.tag + " - оставил сообщение: " + sayw);
        message.reply('Ваше письмо было отправлено 📨! И скоро будет прочитано 📪')
        })
    });
});

}
 
module.exports.help = {
  name: "mail",
  info: "cmd"
}