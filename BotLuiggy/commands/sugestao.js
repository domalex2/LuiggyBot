const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(`${config.prefix}sugestao `)) {
    message.channel.send(`Quer enviar a sugestão?`).then(msg => {
        msg.react('✅')

        const mod = (reaction, user) => reaction.emoji.name === `✅` && user.id === message.author.id;

        const r1 = msg.createReactionCollector(mod, { time: 60000 });

        r1.on('collect', r => {


            message.channel.send("Sugestão enviado com sucesso!")
            let sla = client.users.find('id', '448999125120188416')
            let embed = new Discord.RichEmbed()
                .setTitle("Sugestão")
                .addField('Sugestão:', args.slice(0).join(" "))
                .setColor("#FD0000")
                .setThumbnail("https://loading.io/spinners/gears/index.dual-gear-loading-icon.gif")
                .setFooter(`Sugestão enviado por: ${message.author.tag}`, message.author.displayAvatarURL)
            sla.send(embed)

        })
    })
}
}

module.exports.help = {
    name: "sugestao"
}