const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(`${config.prefix}reportbug `)) {
    message.channel.send(`Quer enviar o report?`).then(msg => {
        msg.react('✅')

        const mod = (reaction, user) => reaction.emoji.name === `✅` && user.id === message.author.id;

        const r1 = msg.createReactionCollector(mod, { time: 60000 });

        r1.on('collect', r => {


            message.channel.send("Report enviado com sucesso!")
            let sla = client.users.find('id', '448999125120188416')
            let embed = new Discord.RichEmbed()
                .setTitle("Reportbug")
                .addField('Report:', args.slice(0).join(" "))
                .setColor("#FD0000")
                .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Achtung.svg/220px-Achtung.svg.png")
                .setFooter(`Report enviado por: ${message.author.tag}`, message.author.displayAvatarURL)
            sla.send(embed)

        })
    })
}
}

module.exports.help = {
    name: "reportbug"
}