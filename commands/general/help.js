const {RichEmbed} = require('discord.js');

module.exports = {
    help: {
        name: 'help',
        desc: 'Sends a list of commands',
        category: 'General'
    },
    config: {
        staffOnly: false
    },

    run: async(client, message) => {
        let cmd = client.commands
            let final = cmd.array().sort((p,c) => p.help.category > c.help.category ? 1 : p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1) 
            let output = `= Command List =\n`;
            let currentCategory = "";
            final.forEach(c => {
                const cat = c.help.category
                if (currentCategory !== cat) {
                  output += `\u200b\n== ${cat} ==\n`;
                  currentCategory = cat;
                }
                output += `${c.help.name} :: ${c.help.desc}\n`;
            });
            await message.channel.send(output, {code:"asciidoc", spllit: {char: "\u200b"}});
    }
}