const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const cmd_control = require("./../config/cmdconfig.json");
const config = require("./../config/bconfig.json");
const money = require('discord-money');
const rank = require('rank')
const fs                  = require('fs');

module.exports.run = async (sdr, message, args) => {
  
    const rando_imgs = [
      'Таинственная игрушка', //1x
    
      '30 рублей на киви кошелёк', //1x
    
      'Легендарная игрушка', //2x
      'Легендарная игрушка',
    
      'Мефическая игрушка', //2x
      'Мефическая игрушка',
    
      'Золотой мишка', //3x
      'Золотой мишка',
      'Золотой мишка',
    
      'Золотая игрушка', //3x
      'Золотая игрушка',
      'Золотая игрушка', 
    
      'Серебрянная игрушка', //5x
      'Серебрянная игрушка',
      'Серебрянная игрушка',
      'Серебрянная игрушка',
      'Серебрянная игрушка', 
    
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка', 
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка', 
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка', //90x
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
      'Бронзовая игрушка',
    
    
    ];
    
    //let points = JSON.parse(fs.readFileSync("./toy.json", "utf8"));
    const toyGames = require("./../toy.json");
    typeof toyGames; // object
    

    fs.writeFileSync(path, content[options]);

    if(message.author.bot) return;
    if(!toyGames[message.author.tag]){ 
        toyGames[message.author.id] = { 
            toy: 'нет игрушек'
        };
    }

    toyGames[message.author.tag].money += 25;
    fs.writeFileSync("./scores.json", JSON.stringify(toyGames));
    // const sdr                 = new Discord.Client({disableEveryone: true});     //имя клиент
    // sql.open("./inventory.sqlite");  
    
        // sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        //   let bt = "Бронзовая игрушка" //common
        //   let st = "Серебренная игрушка" //uncommon
        //   let gt = "" //uncommon
        //   let yttw = "" // ultra rare
        //   let gb = "" //uncommon
        //   let dt = "" //ultra rare
        //   let mt = ""//ulra rare
        //   let lt = "" //ultra rare
        //   let tt = "" //ultra rare
        //   let premt = "" //uncommon
        //   let delt = "" //uncommon
        //   let elitet = ""// ultrarare
        //   let admt = "" //ultrarare
    
        //   //sql.run(`UPDATE scores SET points = ${row.points + bt} WHERE userId = ${message.author.id}`);
    
    
        //     if (!row) {
        //       sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 'none']);
        // } else {
        //   //sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`)
        //   var keys = Math.floor(Math.random() * rando_imgs.length);
        //   message.reply(`**Поздравляю, ${message.author}, Вам выпал(а) __${rando_imgs[keys]}__**`);
        //   sql.run(`UPDATE scores SET points = ${row.points + 1 } WHERE userId = ${message.author.id}`);
        //     }
        //   }).catch(() => {
        //     console.error;
        //     sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
        //       sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        //     });
        //   });
        // })
    
    
    // sdr.on('message', message => {
    //   sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    //     if(!row) {
    //       sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 'none']);
    //     } else {
    //     var keys = Math.floor(Math.random() * rando_imgs.length);
    //     message.reply(`**Поздравляю, ${message.author}, Вам выпал(а) __${rando_imgs[keys]}__**`);
    //     sql.run(`UPDATE scores SET points = ${row.inventory + rando_imgs[keys]} WHERE userId = ${message.author.id}`);
    //   }})
    // })
    
    
        //   if (!message.content.startsWith(config.prefix)) return;
    
    
        //   if (message.content.startsWith(config.prefix + "rank")) {
        //       sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        //           if (!row) return message.reply("Статистика недоступна.");
        //           let levelembed = new Discord.RichEmbed()
        //           .setTitle('Уровень')
        //           .addField(`Level: ${row.level}`, `XP: ${row.points}`)
    
        //           message.channel.send(levelembed);
        //             //message.reply(`Ваш текущий уровень: **${row.level}**  Ваши очки: **${row.points}**.`)
        //       }
        //       )
        //     }

}
 
module.exports.help = {
  name: "key",
  info: "cmd"
}