const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
prefix = config.prefix

require('http').createServer().listen(3000)

client.on("ready", () => {
    console.log(` bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores. `);
    function changing_status() {
        let status = [`ax!help`, `Estou em ${client.guilds.size} servidores`, `Para me convidar ax!invite`, `Fui desenvolvido em JavaScript`, `Sou focado em utilidades`]
        let random = status[Math.floor(Math.random() * status.length)]
        client.user.setActivity(random)
    }
    setInterval(changing_status, 7000);
})


fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Carregou nenhum comando meu filho =/.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} Carregados!`);
        bot.commands.set(props.help.name, props);
    });

});

client.on("guildcreate", guild => {
    console.log(`O bot entrou nos servidores: ${guild.name} (id: $guild.id}). população: ${guild.menberCont} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
});


client.login(process.env.TOKEN);