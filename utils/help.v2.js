const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");

module.exports.run = async (sdr, message, args) => {
  if(cmd_control.CMDhelp === false) return message.reply(cmd_control.Shelp);

  if(args[0] === undefined) {
    message.channel.send({embed: {
        color: 0x00AE86,
        author: {
          name: `Привет! я ` + sdr.user.username,
          icon_url: sdr.user.avatarURL
        },
        description: '**• Хотите предложить свои идеи или нашли ошибку ? \n • пишите на почту бота ``/mail <сообщение>`` или создателю ``Bo9lPeH#7278``** \n • Если вам нужна помощь, свяжитесь с нашим [сервером поддержки](https://discord.gg/Wvr4JfH). \n **• Создатель бота Bo9lPeH#7278**',
        fields: [{
            name: "🛡Модераторские команды",
            value: '``/help moderation``'
            
        },
        {
            name: "🛠Системные команды",
            value: "``/help system``"
        },
        {
            name: "💎Экономика",
            value: "``/help economy``"
        },
        {
          name: "📚Информационные команды",
          value: "``/help info``"
        },
        {
            name: "🎉Развлекательные команды",
            value: "``/help fun``"
        }
        ]}})}

/*
${config.prefix}embed - fun
${config.prefix}mail <сообщение>,
${config.prefix}vote <Сообщение>.
${config.prefix}say <сообщение>П

Засекреченые команды
${config.prefix}edit <айди сообщение> <сообщение на которое хотите изменить>
*/

if(args[0] === "moderation") {
  message.channel.send({embed: {
    color: 0x00AE86,
    fields: [{
        name: "Модераторские команды",
        value: `${config.prefix}warn <@Пользователь> <причина> - Выдать предупреждение \n${config.prefix}tempmute <@Пользователь> <1s/m/h/d> <Причина> - Временно замутить \n${config.prefix}unmute <@пользователь> - размутить\n${config.prefix}kick <@Пользователь> <причина> - кикнуть \n${config.prefix}ban <@Пользователь> <причина> - забанить \n${config.prefix}clear <1-100> - очистить чат \n${config.prefix}report <нарушитель> <причина> - отправить репорт на пользователя`
    }]}});
}          

if(args[0] === "system") {
  message.channel.send({embed: {
    color: 0x00AE86,
    fields: [{
        name: "Системные команды",
        value: `${config.prefix}shutdown - выключение бота \n${config.prefix}restart - перезагрузка бота \n${config.prefix}bc - изменение баланса`
    }]}});
}   

if(args[0] === "economy") {
  message.channel.send({embed: {
    color: 0x00AE86,
    fields: [{
        name: "Экономические команды",
        value: `${config.prefix}balance - Свой баланс \n${config.prefix}sell - Продать предметы \n${config.prefix}transfer - Перевести гемы \n${config.prefix}pay - купить предметы`
    }]}});
} 

if(args[0] === "info") {
  message.channel.send({embed: {
    color: 0x00AE86,
    fields: [{
        name: "Информационные команды",
        value: `${config.prefix}rank - посмотреть свой уровень \n${config.prefix}channelinfo <#канал> - информация о канале \n${config.prefix}inventory - ваш инвентарь \n${config.prefix}userinfo - информация о пользователе \n${config.prefix}avatar <пользователь> - получение аватара \n${config.prefix}ping - узнать пинг \n${config.prefix}botinfo - информация о боте \n${config.prefix}serverinfo - информация о сервере`
    }]}});
}

if(args[0] === "fun") {
  message.channel.send({embed: {
    color: 0x00AE86,
    fields: [{
        name: "Развлекательные команды",
        value: `${config.prefix}embed <любое сообщение> - создать рамку возле совего сообщение \n${config.prefix}cry - плакать\n${config.prefix}awoo - awoo \n${config.prefix}angrytableflip - смайл "злой столик"  \n${config.prefix}anime - картинка "аниме" \n${config.prefix}butterfly - смайл "бабочка" \n${config.prefix}catgirl - гифка с кошка-девочками \n${config.prefix}channelinenergy - смайл "энергния" \n${config.prefix}dealwithit - смайл "иметь дело с этим" \n${config.prefix}dog - смайл "сабака" \n${config.prefix}eagleoflenny - смайл "Ленни орёл" \n${config.prefix}hurray - смайл "Ура" \n${config.prefix}lenny - смайл "Ленни" \n${config.prefix}lennygang - смайл "Ленни банда" \n${config.prefix}magic <@Пользователь> - Смайл "Магия" \n${config.prefix}peeking - смайл "Выглядывающий человек" \n${config.prefix}ram - Прикол над Ram \n${config.prefix}riot - смайл "riot" \n${config.prefix}roll - Кататся по полу \n${config.prefix}sendenergy - смайл "отправить энергию" \n${config.prefix}shrugwtf - пожать плечами \n${config.prefix}spiderlenny - смайл "Паук Ленни" \n${config.prefix}welcome - приветствующая картинка \n${config.prefix}wombat - картинки Вомбата \n${config.prefix}explosion - взрыв \n${config.prefix}flipcoin - кинуть монетку`
    }]}});
}
        
  if(args[0] === "1") {
    message.channel.send({embed: {
    color: 0x00AE86,
    author: {
      name: `Привет! я ` + sdr.user.username,
      icon_url: sdr.user.avatarURL
    },
    description: '**• Используйте ``/help <команда>`` чтобы получить больше информации о конкретной команде. \n • Хотите предложить свои идеи или нашли ошибку ? \n • пишите на почту бота ``/mail <сообщение>`` или создателю ``Bo9lPeH#7278``** \n • Если вам нужна помощь, свяжитесь с нашим [сервером поддержки](https://discord.gg/Wvr4JfH). \n **• Создатель бота Bo9lPeH#7278**',
    fields: [{
        name: "Модераторские команды",
        value: `${config.prefix}warn <@Пользователь> <причина>, ${config.prefix}tempmute <@Пользователь> <1s/m/h/d> <Причина>, ${config.prefix}unmute <@пользователь>,${config.prefix}kick <@Пользователь> <причина>, ${config.prefix}ban <@Пользователь> <причина>, ${config.prefix}clear`
      },
      {
        name: "Развлекательные команды",
        value: `${config.prefix}cry ${config.prefix}awoo, ${config.prefix}angrytableflip,  ${config.prefix}say <сообщение>,  ${config.prefix}anime, ${config.prefix}butterfly, ${config.prefix}catgirl, ${config.prefix}channelingenergy, ${config.prefix}dealwithit, ${config.prefix}dog, ${config.prefix}eagleoflenny, ${config.prefix}hurray, ${config.prefix}lenny, ${config.prefix}lennygang, ${config.prefix}magic, ${config.prefix}peeking, ${config.prefix}ram, ${config.prefix}riot, ${config.prefix}roll, ${config.prefix}sendenergy, ${config.prefix}shrugwtf, ${config.prefix}spiderlenny, ${config.prefix}welcome, ${config.prefix}wombat, ${config.prefix}explosion  ${config.prefix}flipcoin, ${config.prefix}rank`
      },
      {
        name: 'Банк',
        value: `${config.prefix}balance, ${config.prefix}sell, ${config.prefix}transfer, ${config.prefix}loto, ${config.prefix}pay`
      },
      {
        name: 'Gif',
        value: `${config.prefix}cuddle <@Пользователь>, ${config.prefix}slap <@Пользователь>, ${config.prefix}pat <@Пользователь>, ${config.prefix}milk <@Пользователь>, ${config.prefix}cookie <@Пользователь>, ${config.prefix}hug <@Пользователь>`
      },
      {
        name: "Пользовотельские команды",
        value: `3`
      },
      {
        name: "Списки",
        value: `${config.prefix}version`
      },
      {
        name: "Система",
        value: "${config.prefix}shutdown, ${config.prefix}restart, ${config.prefix}bc"
      },
      {
        name: "Полезные ссылки",
        value: "[Support server](https://discord.gg/Wvr4JfH), [Vk creators](https://vk.com/bo9lpeh), [Invite bot](https://discordapp.com/oauth2/authorize?client_id=461913317502353422&scope=bot&permissions=8)"
      }
    ]
    }
});
  }
    console.log(GrayStyle(`
    
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`help ` + args[0])} 
║Сервер: ${message.guild.name}
║Канал: ${message.channel.name}                    
╚═══════════════════════════════════════════════════
`))
    }
module.exports.help = {
  name: "help",
  info: "cmd"
}
