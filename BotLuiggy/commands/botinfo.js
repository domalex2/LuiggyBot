const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
if (message.content.startsWith(`${config.prefix}botinfo `)) {
    const embed = new Discord.RichEmbed()
        .setTitle("INFORMAÇÔES DO BOT")
        .addField('**Nome**', '@Alexs ©#1533')
        .addField('**Dono**', '@</Luiggy1200>#4357')
        .addField('**Servidores**', `${client.guilds.size}`)
        .addField('**Usuários**', `${client.users.size}`)
        .addField('**Ping**', `${Math.round(client.ping)}`)
        .addField('**Versão**', '3.0.0')
        .setColor("RANDOM")
        .setImage("https://cdn.discordapp.com/attachments/458362637701611542/509564536152391680/linha-imagem-animada-0429-1.gif")
        .setThumbnail(client.user.avatarURL)
        .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}
}

module.exports.help = {
    name: "botinfo"
}