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
        description: `Вы не указали что хотите купить \n **Что бы посмотреть что можно купить __пропишите /pay list__**`
    }})
}

if(args[0] === "list") {
    message.channel.send({embed: {
        color: 0x00ff00,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        fields: [
            {
              name: "Превелегия Elite``/pay elite``",
              value: `49.900 💎`
            },
            {
              name: "Превелегия Deluxe``/pay deluxe``",
              value: `39.900 💎`
            },
            {
              name: "Превелегия Premium``/pay premium``",
              value: `19.900 💎`
            },
            {
              name: "Таинственная игрушка ``/pay mysterioustoy``",
              value: `30.000 💎`
            },
            {
              name: "Легендарная игрушка``/pay legendarytoy``",
              value: `19.900 💎`
            },
            {
              name: "Мифическая игрушка ``/pay mythicaltoy``",
              value: `14.900 💎`
            }, 
            {
              name: "Золотой мишка ``/pay goldenbear``",
              value: `9.700 💎`
            },
            {
              name: "Золотая игрушка ``/pay goldentoy``",
              value: `7.900 💎`
            },
            {
              name: "Серебренная игрушка ``/pay silvertoy``",
              value: `4.900 💎`
            },
            {
              name: "Бронзовая игрушка ``/pay bronzetoy``",
              value: `2.800 💎`
            }
        ]}
    });
}

// if(args[0] === "1") {
//     let mt = message.guild.roles.find(r => r.id === "454950088695873559");
//     let mte = message.guild.roles.find(r => r.id === "582530867243778049"); 
//     if(message.member.roles.some(r => r.id === "454950088695873559")) {
//         //console.log("123")
//         message.reply('У вас уже есть превелегия Elite')
//     } else {
//         money.fetchBal(message.author.id).then((i) => {
//             if(i.money < "49900") 
//             return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

//             money.updateBal(message.author.id, -49900)

//             message.member.addRole(mt).catch(console.error);
//             message.member.addRole(mte).catch(console.error);

//             message.channel.send({embed: {
//                 color: 0x00ff00,
//                 author: {
//                 name: message.author.username,
//                 icon_url: message.author.avatarURL
//                 },
//                 description: `Вы купили превелегию Elite за 49.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
//             }})
//             })
//     }
// }

if(args[0] === "elite") {
    let mt = message.guild.roles.find(r => r.id === "454950088695873559");
    let mte = message.guild.roles.find(r => r.id === "582530867243778049"); 
    if(message.member.roles.some(r => r.id === "454950088695873559")) {
        //console.log("123")
        message.reply('У вас уже есть превелегия Elite')
        
    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "49900") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

        money.updateBal(message.author.id, -49900)
        

        message.member.addRole(mt).catch(console.error);
        message.member.addRole(mte).catch(console.error);

            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы купили превелегию Elite за 49.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })
    }
}

if(args[0] === "deluxe") {
    let mt = message.guild.roles.find(r => r.id === "455704135178911754");
    let mte = message.guild.roles.find(r => r.id === "582530869277884436");
    if(message.member.roles.some(r => r.id === "455704135178911754")) {
        //console.log("123")
        message.reply('У вас уже есть превелегия Deluxe')
        
    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "39900") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

        money.updateBal(message.author.id, -39900)
        message.member.addRole(mt).catch(console.error);
        message.member.addRole(mte).catch(console.error);

            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы купили превелегию Deluxe за 39.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })
    }
}

if(args[0] === "premium") {
    let mt = message.guild.roles.find(r => r.id === "455704137456287755");
    let mte = message.guild.roles.find(r => r.id === "582530869613297665");
    if(message.member.roles.some(r => r.id === "455704137456287755")) {
        //console.log("123")
        message.reply('У вас уже есть превелегия premium')
        
    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "19900") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

        money.updateBal(message.author.id, -19900)

        message.member.addRole(mt).catch(console.error);
        message.member.addRole(mte).catch(console.error);

            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы купили превелегия Premium за 19.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })
    }
}


if(args[0] === "mysterioustoy") {
    let mt = message.guild.roles.find(r => r.id === "582597853139173381");
    if(message.member.roles.some(r => r.id === "582597853139173381")) {
        //console.log("123")
        message.reply('У вас уже есть данная игрушка')
        
    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "30000") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

        money.updateBal(message.author.id, -30000)

        message.member.addRole(mt).catch(console.error);

            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы купили Таинственную игрушку за 30.000 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })
    }
}

if(args[0] === "legendarytoy") {
    let mt = message.guild.roles.find(r => r.id === "582530870200762400");
    if(message.member.roles.some(r => r.id === "582530870200762400")) {
        //console.log("123")
        message.reply('У вас уже есть данная игрушка')

        

    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "19900") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

        money.updateBal(message.author.id, -19900)
        
        message.member.addRole(mt).catch(console.error);

            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы купили Легендарную игрушку за 19.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })
    }
}

if(args[0] === "mythicaltoy") {
    let mt = message.guild.roles.find(r => r.id === "582968688940941313");
    if(message.member.roles.some(r => r.id === "582968688940941313")) {
        //console.log("123")
        message.reply('У вас уже есть данная игрушка')

        

    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "14900") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

        money.updateBal(message.author.id, -14900)
        
        message.member.addRole(mt).catch(console.error);
            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы продали Легендарную игрушку за 14.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })
    }
}

    if(args[0] === "goldenbear") {
    let mt = message.guild.roles.find(r => r.id === "582507586880798731");
    if(message.member.roles.some(r => r.id === "582507586880798731")) {
        //console.log("123")
        message.reply('У вас уже есть данная игрушка')
    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "9700") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

        money.updateBal(message.author.id, -9700)
        message.member.addRole(mt).catch(console.error);

            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы купили Золотого мишку за за 9.700 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })
    }
}

if(args[0] === "goldentoy") {
    let mt = message.guild.roles.find(r => r.id === "582530866178162712");
    if(message.member.roles.some(r => r.id === "582530866178162712")) {
        //console.log("123")
        message.reply('У вас уже есть данная игрушка')

    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "7900") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

        money.updateBal(message.author.id, -7900)

        message.member.addRole(mt).catch(console.error);
            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы купили Мифическую игрушку за 7.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })
    }
}

if(args[0] === "silvertoy") {
    let mt = message.guild.roles.find(r => r.id === "582595245158694912");
    if(message.member.roles.some(r => r.id === "582595245158694912")) {
        //console.log("123")
        message.reply('У вас уже есть данная игрушка')
    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "4900") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

            money.updateBal(message.author.id, -4900)

            message.member.addRole(mt).catch(console.error);

            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы купили Серебренную игрушку за 4.900 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
            })
    }
}

if(args[0] === "bronzetoy") {
    let mt = message.guild.roles.find(r => r.id === "582507586520088576");
    if(message.member.roles.some(r => r.id === "582507586520088576")) {
        //console.log("123")
        message.reply('У вас уже есть данная игрушка')
    } else {
        money.fetchBal(message.author.id).then((i) => {
            if(i.money < "2800") 
            return message.reply("Недастаточно гемов(💎) на ващем счету").catch(console.error);

        money.updateBal(message.author.id, -2800)

        message.member.addRole(mt).catch(console.error);

            message.channel.send({embed: {
                color: 0x00ff00,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                description: `Вы купили Бронзовая игрушку за 2.800 💎 \nВаш баланс составляет:\n ${i.money} 💎`
            }})
        })
    }
}


}

module.exports.help = {
    name: "pay",
    info: "cmd"
}