const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(`${config.prefix}roleinfo `)) {
    let role = message.mentions.roles.first()
    if (!role) return message.channel.send('Você precisa mencionar um cargo');
    let translate = { "ADMINISTRATOR": "Administrador", "CREATE_INSTANT_INVITE": "Criar convite", "KICK_MEMBERS": "Expulsar membros", "BAN_MEMBERS": "Banir membros", "MANAGE_CHANNELS": "Gerenciar canais", "MANAGE_GUILD": "Gerenciar servidor", "ADD_REACTIONS": "Adicionar reações", "VIEW_AUDIT_LOG": "Ver registro de auditoria", "PRIORITY_SPEAKER": "Prioridade para fala", "VIEW_CHANNEL": "Ler canais de texto e ver canais de voz", "SEND_MESSAGES": "Enviar mensagens", "SEND_TTS_MESSAGES": "Enviar mensagem em TTS", "MANAGE_MESSAGES": "Gerenciar mensagens", "EMBED_LINKS": "Inserir links", "ATTACH_FILES": "Anexar arquivos", "READ_MESSAGE_HISTORY": "Ler o histórico de mensagens", "MENTION_EVERYONE": "Mencionar todos", "USE_EXTERNAL_EMOJIS": "Usar emojis externos", "CONNECT": "Conectar", "SPEAK": "Falar", "MUTE_MEMBERS": "Silenciar membros", "DEAFEN_MEMBERS": "Desativar aúdio de membros", "MOVE_MEMBERS": "Mover membros", "USE_VAD": "Usar detecção de voz", "CHANGE_NICKNAME": "Mudar apelido", "MANAGE_NICKNAMES": "Gerenciar apelidos", "MANAGE_ROLES": "Gerenciar cargos", "MANAGE_WEBHOOKS": "Gerenciar webhooks", "MANAGE_EMOJIS": "Gerenciar emojis" }
    const embed = new Discord.RichEmbed()
        .setAuthor(`Informações do cargo ${role.name}`)
        .setColor("RANDOM")
        .addField("Nome do cargo:", `${role.name}`)
        .addField("ID do cargo:", `${role.id}`)
        .addField("Cor:", `${role.color}`)
        .addField("Cargo criado em:", `${role.createdAt}`)
        .addField("Permissões:", `${Object.entries(role.serialize()).filter(([, has]) => has).map(([perm]) => translate[perm]).join(", ")}`)
        .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(embed)
}
}

module.exports.help = {
    name: "roleinfo"
}