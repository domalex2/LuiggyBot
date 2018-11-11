const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(`${config.prefix}calcular `)) {


    let input = args.join(" ");
    if (!input) {
        message.reply('__Você deve fornecer uma equação a ser resolvida na calculadora!__');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);

        const Discord = require('discord.js');
        const embed = new Discord.RichEmbed()
            .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
            .setColor('RANDOM')
            .addField("**Questão:**", question, true)
            .addField("**Responda:**", answer)
        message.channel.send(embed);
    } catch (err) {
        return message.reply(`**Questão invalida** ${err}`);
    }
}
}

module.exports.help = {
    name: "calcular"
}