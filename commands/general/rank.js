const {RichEmbed} = require('discord.js');

module.exports = {
    help: {
        name: 'rank',
        desc: 'Shows your rank',
        category: 'General'
    },
    config: {
        staffOnly: false
    },

    run: async(client, message) => {
        let userModel = await client.database.models.user.findOne({
            attributes: ['experience', 'level', 'xpNeededForNextLvl'],
            where: {
                userID: message.author.id
            }
        });
        if(!userModel) return;

        let embed = new RichEmbed()
        .setTitle('Your rank:')
        .addField('Level', userModel.dataValues.level, true)
        .addField('XP', userModel.dataValues.experience, true)
        .addField('XP for next Level', userModel.dataValues.xpNeededForNextLvl, true)
        .setColor('RANDOM');
        message.channel.send(embed);
    }
}