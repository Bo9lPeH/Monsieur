const Discord = require("discord.js");
const chalk = require('chalk'); //патч на цветну консоль npm install chalk
const GreenStyle = chalk.green; //Зелёный
const GrayStyle = chalk.gray; // серый
const config = require("./../config/bconfig.json");
const cmd_control = require("./../config/cmdconfig.json");


module.exports.run = async (koneko, message, args) => {
    if(args[0] === undefined) {
        message.channel.send("Пожалуйста укажите команду для поиска информации об команде.")
    }
   // let cmd_list =  'avatar' && 'ban' // [`avatar`, "ban", "botinfo", "clear", "command", "cookie", "errorlist", "flipcoin", "help", "kick", "mail", "milk", "ping", "report", "say", "serverinfo", "userinfo", "vote", "voteforbot", "version", "warn", "play", "stop", "rank"]
    //if(args[0] != config.command_all) {
      //  message.channel.send("Не правельно указан модуль или информация отсутствует.")
   // }
    if(args[0] === 'angrytableflip') {
        message.channel.send("Отправляет смайлик (ノಠ益ಠ)ノ彡┻━┻ (до словный перевод с англ.: Перевернуть стол на крышку)")
    }
    if(args[0] === 'anime') {
        message.channel.send("Отправляет картинку с высклицающим даже скорей выкрикивающим словом 'Anime' ")
    }
    if(args[0] === 'butterfly') {
        message.channel.send("Отправляет смайлик Ƹ̵̡Ӝ̵̨̄Ʒ (бабочка)")
    }
    if(args[0] === 'catgirl') {
        message.channel.send("Отправляет довольно красивые фотографии с neko girl (Кошка-девочка) (С яп. neko - кошка. С анг. girl - девочка/девушка)")
    }
    if(args[0] === 'channelingenergy`') {
        message.channel.send("Отправляет смайлик (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ) (С англ. channel ing energy - энергия канала) ")
    }
    if(args[0] === 'dealwithit') {
        message.channel.send("Отправляет смайлик (•_•) ( •_•)>⌐■-■ (⌐■_■) (С англ. dealwithit - иметь дело с этим) ")
    }
    if(args[0] === 'dog') {
        message.channel.send("Отправляет рисунок символами в виде бегушей сабаки")
    }
    if(args[0] === 'eagleoflenny') {
        message.channel.send("Отправляет рисунок-смайлик орёл Ленни (С англ. eagle of lenny - орёл Ленни) ")
    }
    if(args[0] === 'explosion') {
        message.channel.send("Отправляет гиф фрагмент из аниме, где один из гл. героев Мегумин трёться об свой посох (С англ. Explosion - взрыв/взрывчатка")
    }
    if(args[0] === 'hug') {
        message.channel.send("Отправить гифку с смыслом обнять кого либо Например: /hug гость#0000 бот ответит: _Обнял_ гостя#0000 и прикрепит соответствующую гифку")
    }
    if(args[0] === 'hurray') {
        message.channel.send("Отправить смайлик ヽ(^o^)ノ (С англ. hurray - Ура (глагол кричать 'Ура!')")
    }
    if(args[0] === 'lenny') {
        message.channel.send("Отправит смайлик ( ͡° ͜ʖ ͡°) (Не переводится так как это имя.)")
    }
    if(args[0] === 'lennygang') {
        message.channel.send("Отправить смайлик ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) (Примерный перевод с англ. lenny gang - вермя Ленни)")
    }
    if(args[0] === 'magic') {
        message.channel.send("Отправить рисунок символами Ленни волшебник")
    }
    if(args[0] === 'pat') {
        message.channel.send("Отправить гифку с смыслом погладить кого либо Например: /pat гость#0000 бот ответит: _погладил_ гостя#0000 и прикрепит соответствующую гифку")
    }
    if(args[0] === 'peeking') {
        message.channel.send("Отправить смайлик ┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴ (Ленни выглядывает из за стены или просто выглядывать) (Перевод с англ peeking - выглядывая)")
    }
    if(args[0] === 'ram') {
        message.channel.send("Отправить картинку высмеющее имя одной из Гл. геровем Ram, так же есть сестра-близней Rem (отличаються цветом волос) (аниме не знаю) ")
    }
    if(args[0] === 'riot') {
        message.channel.send("Отправить смайлик ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ (С англ. riot - бунт)")
    }
    if(args[0] === 'roll') {
        message.channel.send("Отправить сообщение 'кататься по полу' и прекрепляет гиф изображение с данным смыслом (перевод данного слово очень велик")
    }
    if(args[0] === 'sendenergy') {
        message.channel.send("Отправить смайлик ༼ つ ◕_◕ ༽つ (С англ. Send energy - отправлять энергию)")
    }
    if(args[0] === 'shrugwtf') {
        message.channel.send("Отправить смайлик ¯\(°_o)/¯ (С англ. shrug wtf - пожать плечами)")
    }
    if(args[0] === 'spiderlenny') {
        message.channel.send("Отправить смайлик /╲/╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/╱\ (С англ. spider lenny - паук Ленни)")
    }
    if(args[0] === 'welcome') {
        message.channel.send("Отправить картинку welcome (С англ. welcome - добро пожаловать)")
    }
    if(args[0] === 'wombat') {
        message.channel.send("Отправить фото с животным Вомбат (Главное не смотреть когда оно мокрое, темболие не гугли мокрые Куалы)")
    }
    if(args[0] === `avatar`) {
        message.channel.send("Позволяет дать в Png формате или дать URL ссылку на вашу аватарку или другого участинка.")
    }
    if(args[0] === "ban") {
        message.channel.send("Позволяет забанить участника. \n**Пример: /ban @гость#0000 2.1**"); 
    } 
    if(args[0] === "botinfo") { 
        message.channel.send("Даёт полну публичную информацию об боте")
    }
    if(args[0] === "clear") { 
        message.channel.send("Удаляет все выше сообщение которые были отправлены не мение 14 дней. \n**Пример: /clear 50**")
    }
    if(args[0] === "command") { 
        message.channel.send("Даёт информацио о командах \n**Пример: /command название команды о который вы хотите узнать**")
    }
    if(args[0] === "cookie") { 
        message.channel.send("Развлекательная команда позволяющая подарить печеньку участнику \n**Пример: /warn @гость#0000**")
    }
    if(args[0] === "errorlist") { 
        message.channel.send("Показывает список с значениями ошибок")
    }
    if(args[0] === "flipcon") { 
        message.channel.send("Позволяет кинуть монетку 50 на 50")
    }
    if(args[0] === "help") { 
        message.channel.send("Показывает список команд")
    }
    if(args[0] === "kick") { 
        message.channel.send("Позволяет кикнуть участника со сервера \n**Пример: /kick @гость#0000 2.1**")
    }
    if(args[0] === "mail") { 
        message.channel.send("При помощи данной команды вы можете отправить сообщение на почту бота \n**Пример: /mail Бот хороший**")
    }
    if(args[0] === "milk") { 
        message.channel.send("Развлекательная команда позволяющая подарить молока \n**Пример: /milk @гость#0000**")
    }
    if(args[0] === "ping") { 
        message.channel.send("Показывает пинг")
    }
    if(args[0] === "report") { 
        message.channel.send("При помощи данной команды вы можете отправить жалобу на любого пользователя \n**Пример: /report @гость#0000 2.1**")
    }
    if(args[0] === "say") { 
        message.channel.send("Позволяет отправить сообщение от лица бота \n**Пример: /say Привет всем**")
    }
    if(args[0] === "serverinfo") { 
        message.channel.send("Показывает публичную информачию о сервере")
    }
    if(args[0] === "userinfo") { 
        message.channel.send("Показывает публичную информацию о участнике")
    }
    if(args[0] === "version") { 
        message.channel.send("Показывает список версий бота и их развитие")
    }
    if(args[0] === "vote") { 
        message.channel.send("Позволяет провести голосование \n**Пример: /vote Нравится ли бот ?**")
    }
    if(args[0] === "voteforbot") { 
        message.channel.send("Голосует в пользу бота")
    }
    if(args[0] === "warn") { 
        message.channel.send("Позволяет дать предупреждение участнику \n**Пример: /warn @гость#0000 2.1**")
    }
    if(args[0] === "rank") {
        message.channel.send("Позваляет узнать ваш уровень и колическо очков до уровня. Уровень зарабатовается за активность в чате.")
    }
    if(args[0] === "play") {
        message.channel.send("Позваляет включить музыку. Для этого вы должны находится в __голосовом__ канале \n**Пример: /play ссылка с ютуба на видео**")
    }
    if(args[0] === "stop") {
        message.channel.send("Останавливает проигрование музыки")
    }
    if(args[0] === "inventory") {
        message.channel.send("Открывает вашь инвентарь с предметами")
    }
    


        console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`command ${args[0]}`)} 
║Канал: ${message.channel.name} 
║Сервер: ${message.guild.name}                 
╚═══════════════════════════════════════════════════`));
    
}
 
module.exports.help = {
  name: "command",
  name: "cmd",
  info: "cmd"
}