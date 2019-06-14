const Discord             = require("discord.js");             //библиотека Дискорд
const sdr                 = new Discord.Client({disableEveryone: true});     //имя клиент
const config              = require("./config/bconfig.json"); //путь до конфига
const fs                  = require('fs');                   //патч на формат fs
const sql                 = require("sqlite");              //патч на формат sqlite npm install sqlite
const ytdl                = require('ytdl-core');          //патч на ссылки ютуб для музыки npm install ytsl-core
const moment              = require('moment');            //патч на отображение формата времени npm install moment
const chalk               = require('chalk');            //патч на цветну консоль npm install chalk
const Canvas              = require('canvas');          //патч на создание фоток
const snekfetch           = require('snekfetch');      //доп для canvas
//const ms                  = require('ms');            //Патч на секунды
const money               = require('discord-money');
const GreenStyle          = chalk.green;                       //Зелёный
const RedStyle            = chalk.red;                        //Крассный
const BlueStyle           = chalk.blue;                      //Синий
const YellowStyle         = chalk.yellow;                   //Жёлтый
const MagentaStyle        = chalk.magentaBright;           //серенивый
const GrayStyle           = chalk.gray;                   // серый
const RedBackground       = chalk.bgRed                  // Фон красный

//Прочие
sql.open("./score.sqlite");                                                 //Путь для sqlite файла
sdr.commands              = new Discord.Collection();                      //Колекция команд
const talkedRecently      = new Set();                                    //Новое значение
const rank = require('rank')


sdr.on('ready', async () => {


    sdr.user.setActivity(`${config.game}`, { type: "WATCHING"})
    console.log(`
╔════════════════════════════════════════════════════════════════
║${GrayStyle(` ▀█ █████████████████▀▀   ██ ████`)}
║${GrayStyle(`▄▄█████████████████▀      ██ ████`)}
║${GrayStyle(`███  ████████████▀       ▄█  ████`)}
║${GrayStyle(`███▄    ▀▀█████▀ ${RedStyle(`▄▀▄`)}    ▄█  ▄████`)}
║${GrayStyle(` ███▄▄  ${RedStyle(`▄▀▄`)} ▀███▄${RedStyle(`▀▀`)}  ▄▄▀█▀  █████`)}
║${GrayStyle(`▄▄█▄▀█▄▄ ${RedStyle(`▀▀`)} ████████▀███  ▄ ██████`)}
║${GrayStyle(`▀████▄▀▀▀██▀▀██▀▀██  ▀█  █▄█████ `)}
║${GrayStyle(`  ▀▀███▄ ▀█  ▀█   ▀ █   ▄██████ ▄`)}
║${GrayStyle(`████▄▄▀██▄ █  ▄  █▄ ███ ████▀▀ ▄█`)}
║${GrayStyle(`█▀▀▀▀▀▀ █████▄█▄▄████████▀ ▄▄ ▄██`)}
║
║   ╔══════════════╗
║   ║ ${GreenStyle("S-Virus load")} ║
║   ╚══════════════╝
║
║ ${GrayStyle(`• Игровой статус бота: ${config.game}`)}
║ ${GrayStyle(`• Перефикс бота: ${config.prefix}`)} 
║ ${GrayStyle(`• Создатель бота: ${config.author} `)}
║ ${GrayStyle(`• Версия: ${config.version}`)} 
║ ${GrayStyle(`• ${config.prefix}admin - доп. данные`)}
╚════════════════════════════════════════════════════════════════


`)
});

//модули команд
fs.readdir("./utils/", (err, files) => {

    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Не удалось найти команды.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./utils/${f}`);
      console.log(`[${GreenStyle(`loaded`)}] [${GrayStyle(`${props.help.info}`)}] [${GrayStyle(`${f}`)}]`);
      sdr.commands.set(props.help.name, props);
    });
  
});
//574567373508706305
//лаунчер команд
sdr.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    if(message.author.id === "574567373508706305") return message.reply(" Команда для вас запрещена, так как вы были добавлены в чёрный список бота!");
    
   // if(props.help.info === log) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)
    
    let commandfile = sdr.commands.get(cmd.slice(config.prefix.length));
    if(commandfile) commandfile.run(sdr,message,args);
});

sdr.login(process.env.BOT_TOKEN);
