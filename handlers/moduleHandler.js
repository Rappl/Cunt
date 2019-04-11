const klaw = require('klaw');
const path = require('path');

var COMMAND_PATH = './commands';

module.exports = (client) => {
    klaw(COMMAND_PATH).on('data', (item) => {
        let cmd = path.parse(item.path);
        if (!cmd.ext || cmd.ext !== '.js') return;

        try {
            const Command = require(`${cmd.dir}${path.sep}${cmd.base}`);

            client.commands.set(Command.help.name, Command);
            client.log.load('Loaded command', Command.help.name);
        } catch (e) {
            client.log.error(e);
        }
    })
}