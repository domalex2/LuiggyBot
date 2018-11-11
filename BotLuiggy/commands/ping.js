const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(`${config.prefix}ping `)) {
    const embed = new Discord.RichEmbed()
        .setTitle("PING")
        .addField(`API: ${Math.round(client.ping)}ms`)
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL)
        .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}}

module.exports.help = {
    name: "ping"
}