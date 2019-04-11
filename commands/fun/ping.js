const {RichEmbed} = require('discord.js');

module.exports = {
    help: {
        name: 'ping',
        desc: 'Pong!',
        category: 'Fun'
    },
    config: {
        staffOnly: false
    },

    run: async(client, message) => {
        let embed = new RichEmbed()
        .setTitle('Pong! :ping_pong:')
        .setFooter(`This took me ${client.ping}ms.`)
        .setColor('RANDOM');
        message.channel.send(embed);
    }
}