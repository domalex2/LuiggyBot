const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(`${config.prefix}invite `)) {
    const m = await message.channel.send("carregando...");
    m.edit(`Obrigado por convidar eu para seu servidor
Link: http://discordapp.com/oauth2/authorize?=&client_id=503452183673700352&scope=bot&permissions=8`);
}
}


module.exports.help = {
    name: "help"
}
