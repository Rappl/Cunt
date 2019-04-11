const {RichEmbed} = require('discord.js');
const nekos = require('nekos.life')
const neko = new nekos();

module.exports = {
    help: {
        name: 'boobs',
        desc: 'Sends a boobs image',
        category: 'NSFW'
    },
    config: {
        staffOnly: false
    },

    run: async(client, message) => {
        if(message.channel.id !== '565959844201234442') return;
        let image = await neko.nsfw.boobs();
        let embed = new RichEmbed()
        .setTitle('NSFW')
        .setImage(image.url)
        .setFooter('Requested by: ' + message.author.username, message.author.avatarURL)
        .setColor('RANDOM');
        message.channel.send(embed);
    }
}