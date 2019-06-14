const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const fs = require('fs')
const cmd_control = require("./../config/cmdconfig.json");
const money = require('discord-money');

module.exports.run = async (sdr, message, args) => {
    if( message.guild.id != config.OfServer) return message.channel.send('Данная команда на этом сервере не доступна');

if(args[0] === undefined) {
    message.channel.send({embed: {
        color: 0x00ff00,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        fields: [{
            name: "Таинственная игрушка ``30.000 💎 mysterioustoy``",
            value: `Что бы купить пропишите ${config.prefix}shop pay mysterioustoy`
          },
          {
            name: "Легендарная игрушка``/sell legendarytoy``",
            value: `19.900 💎`
          },
          {
            name: "Мифическая игрушка ``/sell mythicaltoy``",
            value: `14.900 💎`
          },
          {
            name: "Золотой мишка ``/sell goldenbear``",
            value: `9.700 💎`
          },
          {
            name: "Золотая игрушка ``/sell goldentoy``",
            value: `7.900 💎`
          },
          {
            name: "Серебренная игрушка ``/sell silvertoy``",
            value: `4.900 💎`
          },
          {
            name: "Бронзовая игрушка ``/sell bronzetoy``",
            value: `2.800 💎`
          }
        ]}
    });
}

if(args[0] === "sell") { 
    if(args[0] === undefined) {
        message.channel.send({embed: {
            color: 0x00ff00,
            author: {
              name: message.author.username,
              icon_url: message.author.avatarURL
            },
            description: 'Вы не указали что хотите продать'
        }})
    }

    if(args[1] === "mysterioustoy") {
    let mt = message.guild.roles.find(r => r.id === "582597853139173381");
    if(message.member.roles.some(r => r.id === "582597853139173381")) {
        //console.log("123")
        message.member.removeRole(mt).catch(console.error);

        money.updateBal(message.author.id, 30000).then((i) => {
            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы продали Таинственную игрушку за 30.000 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })

    } else {
        message.reply('У вас нет данной игрушки')
    }
    }
}

// if(args[0] === "mys123terioustoy") {
//     let mt = message.guild.roles.find(r => r.id === "582597853139173381");
//     if(message.member.roles.some(r => r.id === "582597853139173381")) {
//         //console.log("123")
//         message.member.removeRole(mt).catch(console.error);

//         money.updateBal(message.author.id, 30000).then((i) => {
//             message.channel.send({embed: {
//                 color: 0x00ff00,
//                 author: {
//                 name: message.author.username,
//                 icon_url: message.author.avatarURL
//                 },
//                 description: `Вы продали Таинственную игрушку за 30.000 💎 \nВаш баланс составляет:\n ${i.money} 💎`
//             }})
//             })

//     } else {
//         message.reply('У вас нет данной игрушки')
//     }
// }

// if(args[0] === "legendarytoy") {
//     let mt = message.guild.roles.find(r => r.id === "582530870200762400");
//     if(message.member.roles.some(r => r.id === "582530870200762400")) {
//         //console.log("123")
//         message.member.removeRole(mt).catch(console.error);

//         money.updateBal(message.author.id, 19900).then((i) => {
//             message.channel.send({embed: {
//                 color: 0x00ff00,
//                 author: {
//                 name: message.author.username,
//                 icon_url: message.author.avatarURL
//                 },
//                 description: `Вы продали Легендарную игрушку за 19.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
//             }})
//             })

//     } else {
//         message.reply('У вас нет данной игрушки')
//     }
// }

// if(args[0] === "mythicaltoy") {
//     let mt = message.guild.roles.find(r => r.id === "582968688940941313");
//     if(message.member.roles.some(r => r.id === "582968688940941313")) {
//         //console.log("123")
//         message.member.removeRole(mt).catch(console.error);

//         money.updateBal(message.author.id, 14900).then((i) => {
//             message.channel.send({embed: {
//                 color: 0x00ff00,
//                 author: {
//                 name: message.author.username,
//                 icon_url: message.author.avatarURL
//                 },
//                 description: `Вы продали Легендарную игрушку за 14.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
//             }})
//             })

//     } else {
//         message.reply('У вас нет данной игрушки')
//     }
// }

// if(args[0] === "goldenbear") {
//     let mt = message.guild.roles.find(r => r.id === "582507586880798731");
//     if(message.member.roles.some(r => r.id === "582507586880798731")) {
//         //console.log("123")
//         message.member.removeRole(mt).catch(console.error);

//         money.updateBal(message.author.id, 9700).then((i) => {
//             message.channel.send({embed: {
//                 color: 0x00ff00,
//                 author: {
//                 name: message.author.username,
//                 icon_url: message.author.avatarURL
//                 },
//                 description: `Вы продали Легендарную игрушку за 9.700 💎 \nВаш баланс составляет:\n ${i.money} 💎`
//             }})
//             })

//     } else {
//         message.reply('У вас нет данной игрушки')
//     }
// }

// if(args[0] === "goldentoy") {
//     let mt = message.guild.roles.find(r => r.id === "582530866178162712");
//     if(message.member.roles.some(r => r.id === "582530866178162712")) {
//         //console.log("123")
//         message.member.removeRole(mt).catch(console.error);

//         money.updateBal(message.author.id, 7900).then((i) => {
//             message.channel.send({embed: {
//                 color: 0x00ff00,
//                 author: {
//                 name: message.author.username,
//                 icon_url: message.author.avatarURL
//                 },
//                 description: `Вы продали Мифическую игрушку за 7.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
//             }})
//             })

//     } else {
//         message.reply('У вас нет данной игрушки')
//     }
// }

// if(args[0] === "silvertoy") {
//     let mt = message.guild.roles.find(r => r.id === "582595245158694912");
//     if(message.member.roles.some(r => r.id === "582595245158694912")) {
//         //console.log("123")
//         message.member.removeRole(mt).catch(console.error);

//         money.updateBal(message.author.id, 4900).then((i) => {
//             message.channel.send({embed: {
//                 color: 0x00ff00,
//                 author: {
//                 name: message.author.username,
//                 icon_url: message.author.avatarURL
//                 },
//                 description: `Вы продали Легендарную игрушку за 4.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
//             }})
//             })

//     } else {
//         message.reply('У вас нет данной игрушки')
//     }
// }

// if(args[0] === "bronzetoy") {
//     let mt = message.guild.roles.find(r => r.id === "582507586520088576");
//     if(message.member.roles.some(r => r.id === "582507586520088576")) {
//         //console.log("123")
//         message.member.removeRole(mt).catch(console.error);

//         money.updateBal(message.author.id, 2800).then((i) => {
//             message.channel.send({embed: {
//                 color: 0x00ff00,
//                 author: {
//                 name: message.author.username,
//                 icon_url: message.author.avatarURL
//                 },
//                 description: `Вы продали Легендарную игрушку за 2.800 💎 \nВаш баланс составляет:\n ${i.money} 💎`
//             }})
//             })

//     } else {
//         message.reply('У вас нет данной игрушки')
//     }
// }


}

module.exports.help = {
    name: "shop",
    info: "cmd"
}