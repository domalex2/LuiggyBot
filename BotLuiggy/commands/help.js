const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(`${config.prefix}help `)) {
    const embed = new Discord.RichEmbed()
        .setTitle("COMANDOS")
        .addField('**ping**', 'Mostrar ping do bot')
        .addField('**serverinfo**', 'O bot mostrara a quantidade de membros no servidor')
        .addField('**criarconvite**', 'O bot criara um convite para vc')
        .addField('(manutenção) **clear <numero de mensagens>**', 'Limpar numero de conversas max. 100')
        .addField('**calcular (Questão)**', 'Calcular questão solicitada')
        .addField('**roleinfo**', 'Mostrar cargo mencionado')
        .addField('**userinfo (@menção)**', 'Informações de quem executou o comando')
        .addField('(manutenção) **avatar**', 'Mostrar avatar de quem executou o comando')
        .addField('**invite**', 'Convidar bot para seu servidor')
        .addField('**say (frase)**', 'Fazer bot falar oque você pedir')
        .addField('**sugestao (sugestão)**', 'Envie uma sugestão para o bot')
        .addField('**reportbug (report)**', 'Reportar um bug para o dono')
        .setColor("RANDOM")
        .setImage("https://cdn.discordapp.com/attachments/458362637701611542/509564536152391680/linha-imagem-animada-0429-1.gif")
        .setThumbnail(client.user.avatarURL)
        .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}}

module.exports.help = {
    name: "help"
}