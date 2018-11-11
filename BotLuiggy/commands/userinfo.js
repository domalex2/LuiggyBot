const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(`${config.prefix}userinfo `)) {
    let pessoa = message.mentions.members.first() || message.author
    if (!pessoa) return message.channel.send('Você precisa mencionar um usuario')
    const embed = new Discord.RichEmbed()
        .setTitle("USERINFO")
        .addField('Nome', `${pessoa}`)
        .addField('ID', `${pessoa.id}`)
        .setThumbnail(pessoa.user.avatarURL)
        .setColor("RANDOM")
        .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}
}


module.exports.help = {
    name: "userinfo"
}