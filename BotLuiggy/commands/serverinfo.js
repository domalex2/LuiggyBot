const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(`${config.prefix}serverinfo `)) {
    const embed = new Discord.RichEmbed()
        .setTitle("INFORMAÇÕES DO SERVIDOR")
        .addField(`**Membros:** **${message.guild.memberCount}**`, `.`)
        .addField(`**Canais:** **${message.guild.channels.size}**`, `.`)
        .setColor("RANDOM")
        .setImage("https://cdn.discordapp.com/attachments/458362637701611542/509564536152391680/linha-imagem-animada-0429-1.gif")
        .setThumbnail(`${message.guild.iconURL}`)
        .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}
}

module.exports.help = {
    name: "serverinfo"
}