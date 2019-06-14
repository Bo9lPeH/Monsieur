const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
    if(message.author.id !== config.maximID)
    return message.reply("Вы не Максим!");

    var answers = [
        "https://www.xvideos.com/video15645961/720p_1500k_47322531",  //20% - шанс выподнеие
        "https://www.xvideos.com/video35453897/new_sfm_gifs_april_2018_compilation_2",  //20% - шанс выподнеие
        "https://www.xvideos.com/video35175541/new_sfm_gifs_with_sound_march_2018_compilation_3",  //20% - шанс выподнеие
        "https://www.xvideos.com/video35619381/new_sfm_gifs_with_sound_april_2018_compilation_2",  //20% - шанс выподнеие
        "https://www.xvideos.com/video37244213/hentai_gakuen_no_ikenie_full_video_-_https_bit.ly_2tyacjn"  //20% - шанс выподнеие
        ]
 
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    message.author.send(randomAnswer);

    message.reply('Порнушечка отправлена :smirk:')
    message.delete(2000)


    console.log(GrayStyle(`
    
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`max ` + args[0])} 
║Сервер: ${message.guild.name}
║Канал: ${message.channel.name}                    
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "max",
  info: "cmd"
}
