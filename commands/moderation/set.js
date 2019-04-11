const {RichEmbed} = require('discord.js');

module.exports = {
    help: {
        name: 'set',
        desc: 'Sets a users XP',
        category: 'Moderation'
    },
    config: {
        staffOnly: true
    },

    run: async(client, message, args) => {
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!user) return;

        let userModel = await client.database.models.user.findOne({
            attributes: ['experience'],
            where: {
                userID: message.author.id
            }
        });
        if(!userModel) return;

        await client.database.models.user.update({
            experience: args[1],
        },
        {
            where: {
                userID: user.id
            },
            fields: ['experience']
        });
    }
}