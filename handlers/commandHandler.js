module.exports = async(client, message) => {
    let guildModel = await client.database.models.guild.findOne({
        attributes: ['prefix'],
        where: {
            guildID: message.guild.id
        }
    });

    let prefix = guildModel.dataValues.prefix;

    if(!message.content.startsWith(prefix)) return;
    if(message.channel.id !== '561441175601545217' && message.channel.id !== '565581116984000538' && message.channel.id !== '565959844201234442') {
        message.delete();
        return message.channel.send(':x: You can not use commands in here, use #bot-commands')
    }

    let args = message.content.trim().split(' ');
    let command = args.shift().toLowerCase().slice(prefix.length);

    let cmd;
    if(client.commands.has(command)){
        cmd = client.commands.get(command);
    }
    else return;

    let staffRole = message.guild.roles.find(role => role.id === '561973165967015949')
    if(cmd && cmd.config.staffOnly && !message.member.roles.has(staffRole.id)) return message.reply('nana');

    cmd.run(client, message, args);
}