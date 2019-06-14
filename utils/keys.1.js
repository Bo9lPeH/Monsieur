const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const fs = require('fs')
const cmd_control = require("./../config/cmdconfig.json");
const inv = require("inventory")
const sql                 = require("sqlite");              //патч на формат sqlite npm install sqlite


module.exports.run = async (sdr, message, args) => {
    if( message.guild.id != config.OfServer) return message.channel.send('Данная команда на этом сервере не доступна');
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(inv => {
   inv

   message.channel.send(`${inv.inventory}`)
    })
}


module.exports.help = {
    name: "keys1",
    info: "cmd"
  }